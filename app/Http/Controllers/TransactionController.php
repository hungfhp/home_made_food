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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::with('food.feature_image')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $transactions], 200);
    }

    public function required()
    {
        $transactions = Transaction::where('status', 'required')
            ->with('requirer')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $transactions], 200);
    }

    public function cooked()
    {
        $transactions = Transaction::where('status', 'cooked')
            ->with('cooker')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function dealed()
    {
        $transactions = Transaction::where('status', 'dealed')
            ->with('requirer')
            ->with('cooker')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function shipping()
    {
        $transactions = Transaction::where('status', 'shipping')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function done()
    {
        $transactions = Transaction::where('status', 'done')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function cancel()
    {
        $transactions = Transaction::where('status', 'done')
            ->with('requirer')
            ->with('cooker')
            ->with('shipper')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
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
        $transaction = Transaction::find($id)->update($request->all());
        return response()->json(['data' => $transaction], 202);
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

    public function getHistory()
    {
        Log::info("transaction history");
        $user = Auth::user();
        $userId = $user->id;
        $transactions = Transaction::where('requirer_id', $userId)
            ->orWhere('cooker_id', $userId)
            ->orWhere('shipper_id', $userId)
            ->with('food.feature_image')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

            return response()->json(['data' => $transactions], 200);
    }

    public function getHistoryTotal()
    {
        Log::info("transaction history total");
        $user = Auth::user();
        $userId = $user->id;

        $required = Transaction::required()->where('requirer_id', '=', $userId);
        $cooked = Transaction::cooked()->where('cooker_id', '=', $userId);

        $dealed = Transaction::dealed()
            ->where(function($query) use ($userId) {
                $query->where('requirer_id',$userId)
                ->orwhere('cooker_id',$userId);
            });
        $shipping = Transaction::shipping()
            ->where(function($query) use ($userId) {
                $query->where('requirer_id',$userId)
                ->orwhere('cooker_id',$userId)
                ->orwhere('shipper_id',$userId);
            });
        $done = Transaction::done()
            ->where(function($query) use ($userId) {
                $query->where('requirer_id',$userId)
                ->orwhere('cooker_id',$userId)
                ->orwhere('shipper_id',$userId);
            });
        $cancel = Transaction::cancel()
            ->where(function($query) use ($userId) {
                $query->where('requirer_id',$userId)
                ->orwhere('cooker_id',$userId)
                ->orwhere('shipper_id',$userId);
            });
        
        $data = [
            'required' => [
                'total_price'=> $required->sum('price'),
                'quantity'=> $required->count('price')
            ],
            'cooked' => [
                'total_price'=> $cooked->sum('price'),
                'quantity'=> $cooked->count('price')
            ],
            'dealed' => [
                'total_price'=> $dealed->sum('price'),
                'quantity'=> $dealed->count('price')
            ],
            'shipping' => [
                'total_price'=> $shipping->sum('price'),
                'quantity'=> $shipping->count('price')
            ],
            'done' => [
                'total_price'=> $done->sum('price'),
                'quantity'=> $done->count('price')
            ],
            'cancel' => [
                'total_price'=> $cancel->sum('price'),
                'quantity'=> $cancel->count('price')
            ]
        ];

        $data['total'] = [
            'price'=>    $data['required']['total_price'] + $data['cooked']['total_price'] +
                        $data['dealed']['total_price'] + $data['shipping']['total_price'] +
                        $data['done']['total_price'] + $data['cancel']['total_price'],
            'quantity'=> $data['required']['quantity'] + $data['cooked']['quantity'] +
                        $data['dealed']['quantity'] + $data['shipping']['quantity'] +
                        $data['done']['quantity'] + $data['cancel']['quantity']
        ];

        return response()->json(['data' => $data], 200);
    }
}
