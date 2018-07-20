<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth'])->group(function () {
    $index_show = ['index', 'show'];
    Route::resource('admins', 'AdminController');
    Route::resource('categories', 'CategoryController')->except($index_show);
    Route::resource('certificates', 'CertificateController')->except(
        $index_show
    );
    Route::resource('comments', 'CommentController')->except($index_show);
    Route::resource('deals', 'DealController')->except($index_show);
    Route::resource('favorites', 'FavoriteController')->except($index_show);
    Route::resource('foods', 'FoodController')->except($index_show);
    Route::resource('food_images', 'FoodImageController')->except($index_show);
    Route::resource('category_images', 'CategoryImageController')->except(
        $index_show
    );
    Route::resource('transactions', 'TransactionController')->except(
        $index_show
    );
    Route::resource('users', 'UserController')->except($index_show);
    Route::resource('votes', 'VoteController')->except($index_show);
});

$index_show = ['index', 'show'];
Route::resource('categories', 'CategoryController')->only($index_show);
Route::resource('certificates', 'CertificateController')->only($index_show);
Route::resource('comments', 'CommentController')->only($index_show);
Route::resource('deals', 'DealController')->only($index_show);
Route::resource('favorites', 'FavoriteController')->only($index_show);
Route::resource('foods', 'FoodController')->only($index_show);
Route::resource('food_images', 'FoodImageController')->only($index_show);
Route::resource('category_images', 'CategoryImageController')->only(
    $index_show
);
Route::resource('transactions', 'TransactionController')->only($index_show);
Route::resource('users', 'UserController')->only($index_show);
Route::resource('votes', 'VoteController')->only($index_show);

Route::get('test', 'UserController@getUser');

//Login
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
