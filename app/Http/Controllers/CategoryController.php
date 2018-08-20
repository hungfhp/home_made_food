<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Category;
use App\Model\Food;
use App\Model\Category_image;

use Log;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        Log::info('get category');
        $category = Category::get();
        return response()->json(['result'=>true, 'data'=>$category], 200);
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
        Log::info('post category');
        $category = Category::create($request->all());
        return response()->json(['result'=>true, 'data'=>$category], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        Log::info('show a category');
        $category = Category::where('id', $id)
            ->get();
        $category['image'] = Category::find($id)->category_images->all();
        $category['feature_image'] = Category::find($id)->category_images->first();
        $foods = Category::find($id)->foods()->get();
        foreach ($foods as $food) {
            $food['images'] = Food::find($food['id'])->food_images->all();
        }
        $category['foods'] = $foods;

        return response()->json(['result'=>true, 'data'=>$category], 200);
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
        Log::info('update category');
        $category = Category::find($id)
            ->update($request->all());
        return response()->json(['result'=>true, 'data'=>$category], 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info('delete category');
        $category = Category::find($id);
        $category->delete();
        return response()->json(['result'=>true, 'data'=>$category], 203);
    }
}
