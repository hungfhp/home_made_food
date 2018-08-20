<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Category_image;

use Log;

class CategoryImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category_images = Category_image::with('category')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return response()->json(['result'=>true, 'data'=> $category_images], 200);
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
        Log::info('post category_image');
        $category_image = Category_image::create($request->all());
        return response()->json(['result'=>true, 'data'=>$category_image], 20);
    }

    /**
     * Display the specified resource.
     *1
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($category_id)
    {
        $category_image = Category_image::where('category_id', $category_id)->first();
        return response()->json(['result'=>true, 'data' => $category_image], 200);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Log::info('delete category_image');
        $category_image = Category_image::find($id);
        $category_image->delete();
        return response()->json(['result'=>true, 'data'=>$category_image], 203);
    }
}
