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

Route::get('test', 'UserController@getUser');

//Login
Auth::routes();

Route::resource('admins', 'AdminController');
Route::resource('categories', 'CategoryController');
Route::resource('certificates', 'CertificateController');
Route::resource('comments', 'CommentController');
Route::resource('deals', 'DealController');
Route::resource('favorites', 'FavoriteController');
Route::resource('foods', 'FoodController');
Route::resource('food_images', 'FoodImageController');
Route::resource('category_images', 'CategoryImageController');
Route::resource('transactions', 'TransactionController');
Route::resource('users', 'UserController');
Route::resource('votes', 'VoteController');

Route::get('test', 'UserController@getUser');

//Login
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
