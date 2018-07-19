<?php
namespace App\Listeners;

use App\Model\Food;

use App\Events\VoteUpdating;

use Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateFoodLikeUpdating
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  VoteUpdating  $event
     * @return void
     */
    public function handle(VoteUpdating $event)
    {
        Log::info("Handle VoteUpdating");
        $old_vote = $event->old_vote; // object
        $new_vote = $event->new_vote; // Array
        $old_vote_value = $old_vote->like;
        $new_vote_value = $new_vote['like'];

        $old_like = Food::find($old_vote->food_id)->like;
        $old_dislike = Food::find($old_vote->food_id)->dislike;
        $new_like;
        $new_dislike;

        if ($old_vote_value < 0) {
            // dislike -> like
            $new_like = $old_like + $new_vote_value / 1;
            $new_dislike = $old_dislike - 1;
        } elseif ($old_vote_value == 0) {
            if ($new_vote_value > 0) {
                $new_like = $old_like + 1;
                $new_dislike = $old_dislike;
            } else {
                $new_like = $old_like;
                $new_dislike = $old_dislike + 1;
            }
        } else {
            // like -> dislike
            $new_like = $old_like - 1;
            $new_dislike = $old_dislike + (-1) * $new_vote_value / 1;
        }
        Food::find($old_vote->food_id)->update(['like' => $new_like]);
        Food::find($old_vote->food_id)->update(['dislike' => $new_dislike]);
    }
}
