<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Transaction;

use Log;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->user()->email == 'admin@gmail.com')
        {
            Log::info('admin: get transactions');
            $transaction = Transaction::get();
            return response()->json(['result'=>true, 'data'=>$transaction], 200);
        }
        else
        {
            Log::info('user: get transactions');
            $transaction['required'] = Transaction::where('required_id', $request->user()->id)
                ->get();
            $transaction['cooked'] = Transaction::where('cooked_id', $request->user()->id)
                ->get();
            $transaction['shipper'] = Transaction::where('shipper_id', $request->user()->id)
                ->get();
            return response()->json(['result'=>true, 'data'=>$transaction], 200);
        }
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
        $transaction = Transaction::create($request->all());
        return response()->json(['result'=>true, 'data'=>$transaction], 201);
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
        return response()->json(['result'=>true, 'data'=>$transaction], 200);
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
        $transaction = Transaction::find($id)
            ->update($request->all());
        return response()->json(['result'=>true, 'data'=>$transaction], 202);
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
        return response()->json(['result'=>true, 'data'=>$transaction], 203);
    }
}
