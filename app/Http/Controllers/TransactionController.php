<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;
use App\Model\Food;
use App\Model\Food_image;

use Auth;
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
            ->with('required')
            ->with('cooked')
            ->with('shipped')
            ->orderBy('created_at', 'desc')
            ->paginate(20);

        return response()->json(['data' => $transactions], 200);
    }

    public function required()
    {
        $transactions = Transaction::where('status', 'required')
            ->with('required')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $transactions], 200);
    }

    public function cooked()
    {
        $transactions = Transaction::where('status', 'cooked')
            ->with('cooked')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function dealed()
    {
        $transactions = Transaction::where('status', 'dealed')
            ->with('required')
            ->with('cooked')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function shipping()
    {
        $transactions = Transaction::where('status', 'shipping')
            ->with('required')
            ->with('cooked')
            ->with('shipped')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function done()
    {
        $transactions = Transaction::where('status', 'done')
            ->with('required')
            ->with('cooked')
            ->with('shipped')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['data' => $transactions], 200);
    }

    public function cancel()
    {
        $transactions = Transaction::where('status', 'done')
            ->with('required')
            ->with('cooked')
            ->with('shipped')
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

    public function getTransactionHistory($userId)
    {
        Log::info('get transaction history');
        $transaction = Transaction::where('required_id', $userId)
            ->orWhere('cooked_id', $userId)
            ->orWhere('shipper_id', $userId)
            ->paginate(10);

        foreach ($transaction as $item) {
            $item['food_image'] = Food_image::where(
                'food_id',
                $item['food_id']
            )->first();
        }
        return response()->json(['data' => $transaction], 200);
    }
}
