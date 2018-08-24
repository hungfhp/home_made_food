<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Model\Transaction;
use App\Model\Deal;
use App\Model\Food;
use App\Model\Food_image;
use Illuminate\Support\Facades\Auth;

use Log;

class TransactionController extends Controller
{
    public function index(Request $request) { //dealing_dealed
        switch ($request->status) {
            case 'required':
                $transactions = Transaction::required();
                break;
            case 'cooked':
                $transactions = Transaction::cooked();
                break;
            case 'dealing':
                $transactions = Transaction::dealing();
                break;
            case 'dealed':
                $transactions = Transaction::dealed();
                break;
            case 'shipping':
                $transactions = Transaction::shipping();
                break;
            case 'done':
                $transactions = Transaction::done();
                break;
            case 'cancel':
                $transactions = Transaction::cancel();
                break;
            case 'recent':
                $transactions = Transaction::recent();
                break;
            case 'dealing_dealed':
                $transactions = Transaction::dealing_dealed();
            default:
                $transactions = Transaction::dealing_dealed();
                break;
        }

        $transactions = $transactions
            ->withCount('deals')
            ->with('food.feature_image')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('updated_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $transactions], 200);
    }

    public function getHistory(Request $request)
    {
        Log::info("transaction history");
        $user = Auth::user();
        $userId = $user->id;

        switch ($request->status) {
            case 'required':
                $transactions = Transaction::historyRequired($userId);
                break;
            case 'cooked':
                $transactions = Transaction::historyCooked($userId);
                break;
            case 'dealing':
                $transactions = Transaction::historyDealing($userId);
                break;
            case 'dealed':
                $transactions = Transaction::historyDealed($userId);
                break;
            case 'shipping':
                $transactions = Transaction::historyShipping($userId);
                break;
            case 'done':
                $transactions = Transaction::historyDone($userId);
                break;
            case 'cancel':
                $transactions = Transaction::historyCancel($userId);
                break;
            default:
                $transactions = Transaction();
        }
        $transactions = $transactions
            ->withCount('deals')
            ->with('food.feature_image')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('updated_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $transactions], 200);
    }

    public function getHistoryTotal()
    {
        Log::info("transaction history total");
        $user = Auth::user();
        $userId = $user->id;

        $data = [
            'required' => [
                'total_price' => Transaction::historyRequired($userId)->sum('price'),
                'quantity' => Transaction::historyRequired($userId)->count('price')
            ],
            'cooked' => [
                'total_price' => Transaction::historyCooked($userId)->sum('price'),
                'quantity' => Transaction::historyCooked($userId)->count('price')
            ],
            'dealing' => [
                'total_price' => Transaction::historyDealing($userId)->sum('price'),
                'quantity' => Transaction::historyDealing($userId)->count('price')
            ],
            'dealed' => [
                'total_price' => Transaction::historyDealed($userId)->sum('price'),
                'quantity' => Transaction::historyDealed($userId)->count('price')
            ],
            'shipping' => [
                'total_price' => Transaction::historyShipping($userId)->sum('price'),
                'quantity' => Transaction::historyShipping($userId)->count('price')
            ],
            'done' => [
                'total_price' => Transaction::historyDone($userId)->sum('price'),
                'quantity' => Transaction::historyDone($userId)->count('price')
            ],
            'cancel' => [
                'total_price' => Transaction::historyCancel($userId)->sum('price'),
                'quantity' => Transaction::historyCancel($userId)->count('price')
            ]
        ];

        $data['total'] = [
            'price' =>
                $data['required']['total_price'] +
                $data['cooked']['total_price'] +
                $data['dealed']['total_price'] +
                $data['shipping']['total_price'] +
                $data['done']['total_price'] +
                $data['cancel']['total_price'],
            'quantity' =>
                $data['required']['quantity'] +
                $data['cooked']['quantity'] +
                $data['dealed']['quantity'] +
                $data['shipping']['quantity'] +
                $data['done']['quantity'] +
                $data['cancel']['quantity']
        ];

        return response()->json(['data' => $data], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Log::info('post transactions');
        $user = Auth::user();
        $userId = $user->id;
        $transactionData = $request->all();
        if ($userId == intval($transactionData['creator_id'])) {
            $time = new  Carbon($transactionData['desired_at']);
            $transactionData['desired_at'] = $time->format('Y-m-d H:i:s');
            $quantity = intval($transactionData['quantity']);
            for ($i = 1; $i<= $quantity; $i++) {
                $transaction = Transaction::create($transactionData);
            }
            return response()->json(['data' => $transaction], 201);
        }
        else{
            Log::info('error');
            return response()->json(['result' => false], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Log::info('show a transaction');
        $transaction = Transaction::where('id', $id)
            ->with('food.images')
            ->with('food.user')
            ->with('creator')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->withCount('deals')
            ->get();

        $transaction[0]->deals = Deal::where("transaction_id",$id)->with('user')->get();
        return response()->json(['data' => $transaction[0]], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Log::info('update a transaction');
        $user = Auth::user();
        $next_transaction = $request->all();
        $transaction = Transaction::find($id);
        // if (condition) {
        //     # code...
        // }
        //  check dieu kien next status

        $transaction = Transaction::find($id)->update($next_transaction);
        return response()->json(['data' => $next_transaction], 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info('delete a transaction');
        $transaction = Transaction::find($id);
        $transaction->delete();
        return response()->json(['data' => $transaction], 203);
    }
}
