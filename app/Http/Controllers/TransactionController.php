<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;
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
        $transactions = Transaction::myTransactions($userId)
            ->withCount('deals')
            ->with('food.feature_image')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('updated_at', 'desc')
            ->paginate(10);

        Log::info($transactions);

        return response()->json(['data' => $transactions], 200);
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

        // $required = Transaction::required()->where('requirer_id', '=', $userId);
        // $cooked = Transaction::cooked()->where('cooker_id', '=', $userId);

        // $dealed = Transaction::dealed()->where(function ($query) use ($userId) {
        //     $query
        //         ->where('requirer_id', $userId)
        //         ->orwhere('cooker_id', $userId);
        // });
        // $shipping = Transaction::shipping()->where(function ($query) use ($userId) {
        //     $query
        //         ->where('requirer_id', $userId)
        //         ->orwhere('cooker_id', $userId)
        //         ->orwhere('shipper_id', $userId);
        // });
        // $done = Transaction::done()->where(function ($query) use ($userId) {
        //     $query
        //         ->where('requirer_id', $userId)
        //         ->orwhere('cooker_id', $userId)
        //         ->orwhere('shipper_id', $userId);
        // });
        // $cancel = Transaction::cancel()->where(function ($query) use ($userId) {
        //     $query
        //         ->where('requirer_id', $userId)
        //         ->orwhere('cooker_id', $userId)
        //         ->orwhere('shipper_id', $userId);
        // });

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
    public function store(Request $request, $id)
    {
        Log::info('post transactions');
        $transaction = Transaction::create($request->all());
        return response()->json(['data' => $transaction], 201);
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
        $transaction = Transaction::where('id', $id)->get();
        return response()->json(['data' => $transaction], 200);
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
