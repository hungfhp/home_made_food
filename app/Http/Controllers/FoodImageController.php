<?php
namespace App\Http\Controllers;

use App\Model\Food;
use App\Model\Food_image;
use App\Model\User;

use Illuminate\Http\Request;
use Auth;
use Log;
use DB;
use Image;

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
        return response()->json(['result'=>true, 'data'=> $food_images], 200);
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
        $image = $request->only('file');
        Log::info($image);
        $id = Food::select('id')
            ->orderBy('id', 'desc')
            ->first();
        $name = time().'.' . 'jpg';
        \Image::make($image['file'])->save('image_food/'.$name);
        $fileupload = new Food_image();
        $fileupload->link = $name;
        $fileupload->food_id = $id->id;
        $fileupload->save();
        return response()->json(['result'=>true], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($food_id)
    {
        $food_image = Food_image::where('food_id', $food_id)->first();
        return response()->json(['result'=>true, 'data' => $food_image], 200);
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
        return response()->json(['result'=>true, 'data' => $food_image], 202);

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
        return response()->json(['result'=>true, 'data' => $food_image], 203);
    }
}
