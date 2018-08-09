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
        Log::info('1');
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
        Log::info($request->all());
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
        $cooked_foods = Food::where('cooked_id', $user_id)
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        foreach ($cooked_foods as $cf_item) {
            $cf_item['feature_image'] = Food_image::find($cf_item['id'])->first();
        }
        
        return response()->json(['success' => $cooked_foods], 200);
    }
    
    public function getFavoritedFoods($user_id) {
        $favorited_foods = Favorite::where('user_id', $user_id)
            ->with('food')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        foreach ($favorited_foods as $ff_item) {
            $ff_item['feature_image'] = Food_image::find($ff_item['food_id'])->first();
        }

        return response()->json(['success' => $favorited_foods], 200);
    }
    
    public function getLikedFoods($user_id) {
        $liked_foods = Favorite::where('user_id', $user_id)
            ->with('food')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        foreach ($liked_foods as $lf_item) {
            $lf_item['feature_image'] = Food_image::find($lf_item['food_id'])->first();
        }

        return response()->json(['success' => $liked_foods], 200);

        $votes = Vote::whereIn('user_id', $user_id)
            ->with('user')
            ->with('food.food_images')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(["success" => $votes], 200);
    }
}
