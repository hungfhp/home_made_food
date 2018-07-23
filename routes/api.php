<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// admins routes
Route::prefix("amdins")->group(base_path('routes/api/admins.php'));
// categories routes
Route::prefix("categories")->group(base_path('routes/api/categories.php'));
// category_images routes
Route::prefix("category_images")->group(
    base_path('routes/api/category_images.php')
);
// certificates routes
Route::prefix("certificates")->group(base_path('routes/api/certificates.php'));
// comments routes
Route::prefix("comments")->group(base_path('routes/api/comments.php'));
// deals routes
Route::prefix("deals")->group(base_path('routes/api/deals.php'));
// favorites routes
Route::prefix("favorites")->group(base_path('routes/api/favorites.php'));
// foods routes
Route::prefix("foods")->group(base_path('routes/api/foods.php'));
// food_images routes
Route::prefix("food_images")->group(base_path('routes/api/food_images.php'));
// transactions routes
Route::prefix("transactions")->group(base_path('routes/api/transactions.php'));
// users routes
Route::prefix("users")->group(base_path('routes/api/users.php'));
// votes routes
Route::prefix("votes")->group(base_path('routes/api/votes.php'));
