<?php
namespace App\Http\Controllers;

use App\Model\Food;
use App\Model\Food_image;
use App\Model\User;

use Illuminate\Http\Request;
use Auth;
use Log;
use DB;

class FoodImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = Auth::user();

        $food_images = Food_image::with('food')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(["food_images" => $food_images], 200);
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
        $user = Auth::user();

        $new_food_image = [
            'food_id' => $request->food_id,
            'link' => $request->link
        ];

        DB::table('food_images')->insert($new_food_image);

        return response()->json(["created" => $new_food_image], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $food_image = Food_image::find($id);

        return response()->json(["updated" => $food_image], 200);
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
        $food_image = Food_image::find($id);
        $food_image->link = $request->link;
        $food_image->save();

        return response()->json(["updated" => $food_image], 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = Auth::user();
        $food_image = Food_image::find($id)->delete();

        return response()->json(["destroyed" => $food_image], 203);
    }
}
