<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Category;
use App\Model\Food;
use Log;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function feature()
    {
        Log::info('get feature');
        $categories = Category::inRandomOrder()->limit(3)->get();
        foreach ($categories as $category) {
            $foods = Food::where('category_id',$category->id)
                    ->with('user')
                    ->take(6)
                    ->get();
            foreach ($foods as $food) {
                $food['images'] = Food::find($food['id'])->food_images->all();
                $food['favorites'] = $food->favorites->count();
            }
            $category['foods'] = $foods;
        }
        // $category = Category::get(3);
        return response()->json([ 'data'=>$categories], 200);
    }

    public function getReactSearch($search)
    {
        $foods = '';
        // $search = "canh";

        if (trim($search)) {
            $foods = Food::where('name','LIKE',"%{$search}%")
                         ->orderBy('created_at','DESC')->limit(10)->get();
        }

        return response()->json([ 'data'=>$foods], 200);
    }

}
