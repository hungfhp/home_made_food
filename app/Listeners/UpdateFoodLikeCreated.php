<?php
namespace App\Listeners;

use Log;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

use App\Model\Food;

use App\Events\VoteCreated;

class UpdateFoodLikeCreated
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
     * @param  VoteCreated  $event
     * @return void
     */
    public function handle(VoteCreated $event)
    {
        Log::info('created');
        $new_vote = $event->new_vote;
        if ($new_vote['like'] > 0) {
            $updatedLike = Food::find($new_vote['food_id'])->like + 1;
            Food::find($new_vote['food_id'])->update(['like' => $updatedLike]);
        } elseif ($new_vote['like'] < 0) {
            $updatedDislike = Food::find($new_vote['food_id'])->dislike + 1;
            Food::find($new_vote['food_id'])->update([
                'dislike' => $updatedDislike
            ]);
        }
    }
}
