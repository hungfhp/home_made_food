<?php
namespace App\Providers;

use App\Model\User;
use App\Model\Vote;
use App\Model\Food;
use Log;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        User::deleting(function ($user) {
            $user->posts()->delete();
        });

        // Vote::created(function ($vote) {
        //     Log::info('created chay bt');
        //     if ($vote->like > 0) {
        //         $updatedLike = Food::find($vote->food_id)->like + 1;
        //         Food::find($vote->food_id)->update(['like' => $updatedLike]);
        //     } elseif ($vote->like < 0) {
        //         $updatedDislike = Food::find($vote->food_id)->dislike + 1;
        //         Food::find($vote->food_id)->update([
        //             'dislike' => $updatedDislike
        //         ]);
        //     }
        // });

        // Vote::updating(function ($vote) {
        //     Log::info("van chay bt");
        //     $lastVote = $vote->getOriginal('like');
        //     $newVote = $vote->like;

        //     $lastLike = Food::find($vote->food_id)->like;
        //     $lastDislike = Food::find($vote->food_id)->dislike;
        //     $newLike;
        //     $newDislike;

        //     if ($lastVote < 0) {
        //         // last is dislike
        //         $newLike = $lastLike + $newVote;
        //         $newDislike = $lastDislike - 1;
        //     } elseif ($lastVote == 0) {
        //         if ($newVote > 0) {
        //             $newLike = $lastLike + 1;
        //             $newDislike = $lastDislike;
        //         } else {
        //             $newLike = $lastLike;
        //             $newDislike = $lastDislike + 1;
        //         }
        //     } else {
        //         // last is like
        //         $newLike = $lastLike - 1;
        //         $newDislike = $lastDislike + (-1) * $newVote;
        //     }
        //     Food::find($vote->food_id)->update(['like' => $newLike]);
        //     Food::find($vote->food_id)->update(['dislike' => $newDislike]);
        // });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
