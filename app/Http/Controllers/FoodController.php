<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Food;
use Illuminate\Support\Facades\DB;
use App\Model\Category;
use App\Model\Food_image;
use Log;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        Log::info('user: get food');
        $result = Food::where('publish', true)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        foreach ($result as $item) {
            $item['images'] = Food::find($item['id'])->food_images->all();
        }
        return response()->json(['result' => true, 'data' => $result], 200);
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
        Log::info('add food');
        $food = Food::create($request->all());
        return response()->json(['result' => true, 'data' => $food], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Log::info('show a food');
        $food = Food::where('id', $id)
            ->with('user')
            ->get();
        $food['image'] = Food::find($id)
            ->food_images
            ->all();
        $food['feature_image'] = Food::find($id)
            ->food_images
            ->first();
        return response()->json(['result' => true, 'data' => $food], 200);
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
        Log::info('update food');
        $food = Food::find($id)->update($request->all());
        return response()->json(['result' => true, 'data' => $food], 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info('delete food');
        $food = Food::find($id);
        $food->delete();
        return response()->json(['result' => true, 'data' => $food], 203);
    }

    public function mostLike(Request $request)
    {
        Log::info('user: get most liked food');
        $result = Food::where([
            ['publish','=', true],
            ['like','=',DB::table('foods')->max('like')],
        ])->take(4)->get();
        foreach ($result as $item) {
            $item['images'] = Food::find($item['id'])->food_images->all();
        }
        return response()->json(['result' => true, 'data' => $result], 200);
    }
}
