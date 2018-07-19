<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Food;
use App\Model\Food_image;
use App\Model\Vote;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
//        $user = Auth::user();

        // $FOOD = Food::find(2)->food_images->all();
        $FOOD = Food::find(2)->food_images->all();
        // $FOOD = Food_image::with('food')->get();
        // ->with('food_images')
        // ->get();

        $votes = // ->with('food')
            Vote::where('user_id', 2)
                ->with('user')
                ->with('food.food_images')
                ->orderBy('created_at', 'desc')
                ->paginate(10);
        // for()

        // $votes = DB::table('votes')
        //     ->where('user_id', $user->id)
        //     ->leftjoin('foods', 'votes.food_id', '=', 'foods.id')
        //     ->orderBy('created_at', 'desc')
        //     ->paginate(10);

        return response()->json(["votes" => $votes], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        Log::info("ksdfksd");
        return "create";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return "store";
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }
}
