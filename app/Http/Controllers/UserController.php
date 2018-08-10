<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Model\User;
use App\Model\Food;
use App\Model\Food_image;
use App\Model\Vote;
use App\Model\Favorite;
use Log;
use Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = User::get();
        return response()->json(['success' => $data], 200);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = User::find($id);
        return response()->json(['success' => $data], 200);
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
        $user = Auth::user();
        $updated = User::find($user->id)->update($request->all());

        return response()->json(['success' => $updated], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getCookedFoods($user_id) {
        Log::info($user_id);
        $cooked_foods = Food::where('cooked_id', $user_id)->with('feature_image')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $cooked_foods], 200);
    }
    
    public function getFavoritedFoods($user_id) {
        $favorited_foods = Favorite::where('user_id', $user_id)
            ->with('food.feature_image')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $favorited_foods], 200);
    }
    
    public function getLikedFoods($user_id) {
        $liked_foods = Vote::where('user_id', $user_id)->where('like','!=',1)
            ->with('food.feature_image')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['data' => $liked_foods], 200);
    }
}
