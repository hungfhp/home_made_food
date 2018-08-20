<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Deal;

use Log;

class DealController extends Controller
{
    public function newest() {
        $deals = Deal::orderBy('updated_at', 'desc')
            ->take(3)->with('user')->with('transaction.food')->get();

        return response()->json(['data' => $deals], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->user()->email == 'admin@gmail.com')
        {
            Log::info('admin: get deal');
            $deal = Deal::get();
            return response()->json(['result'=>true, 'data'=>$deal], 200);
        }
        else
        {
            Log::info('unautheticate: get deal');
            return redirect()->back();
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
        Log::info('add deal');
        $deal = Deal::create($request->all());
        return response()->json(['result'=>true, 'data'=>$deal], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Log::info('show a deal');
        $deal = Deal::where('id', $id)
            ->get();
        return response()->json(['result'=>true, 'data'=>$deal], 200);
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
        Log::info('update deal');
        $deal = Deal::find($id)
            ->update($request->all());
        return response()->json(['result'=>true, 'data'=>$deal], 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info('delete deal');
        $deal = Deal::find($id);
        $deal->delete();
        return response()->json(['result'=>true, 'data'=>$deal], 203);
    }
}
