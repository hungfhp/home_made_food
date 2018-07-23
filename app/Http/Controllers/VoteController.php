<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use DB;
use Auth;

use App\Model\Vote;
use App\Model\Food;
use App\Model\Food_image;

use App\Events\VoteCreated;
use App\Events\VoteUpdating;

class VoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __contruct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        $user = Auth::user();

        $votes = Vote::whereIn('user_id', $user)
            ->with('user')
            ->with('food.food_images')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json(['result'=>true,"data" => $votes], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();

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
        $user = Auth::user();

        $new_vote = [
            'user_id' => $user->id,
            'food_id' => $request->food_id,
            'like' => $request->like
        ];

        DB::table('votes')->insert($new_vote);
        event(new VoteCreated($new_vote));

        return response()->json(['result'=>true,'data' => $new_vote], 201);
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
        $user = Auth::user();
        $like = $request->like;

        $old_vote = Vote::find($id);
        $food_id = $old_vote->food_id;

        $new_vote = [
            'user_id' => $user->id,
            'food_id' => $food_id,
            'like' => $like
        ];

        Vote::find($id)->update($new_vote);
        if ($old_vote->like != $like) {
            event(new VoteUpdating($old_vote, $new_vote));
        }

        return response()->json(['result'=>true,'data' => $new_vote], 202);
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
