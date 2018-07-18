<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Model\User;
use Log;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUser()
    {
        $data = User::get();
        Log::info('1');
        return response()->json(['result' => true, 'data' => $data], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function postRegister(Request $request)
    {
        $data = $request->only('password', 'email');
        $check = User::where('email', $data['email'])
            ->count();
        if ($check == 0)
        {
            return response()->json(['result' => true, 'data' => $data], 200);
        }
        else
        {
            return response()->json(['result' => false, 'data' => 'error: register'], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postLogin(Request $request)
    {
        Log::info('2');
        return 1;
//        $data = $request->only('email', 'name');
//        $result = User::where('email', $data['email'])
//            ->value('name');
//        if ($data['name'] == $result['name'])
//        {
//            return response()->json(['result' => true, 'data' => $result], 200);
//        }
//        else
//        {
//            return response()->json(['result' => false, 'data' => 'error: Log in'], 401);
//        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//    public function show($id)
//    {
//        //
//    }
//
//    /**
//     * Show the form for editing the specified resource.
//     *
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
//    public function edit($id)
//    {
//        //
//    }
//
//    /**
//     * Update the specified resource in storage.
//     *
//     * @param  \Illuminate\Http\Request  $request
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
//    public function update(Request $request, $id)
//    {
//        //
//    }
//
//    /**
//     * Remove the specified resource from storage.
//     *
//     * @param  int  $id
//     * @return \Illuminate\Http\Response
//     */
//    public function destroy($id)
//    {
//        //
//    }
}
