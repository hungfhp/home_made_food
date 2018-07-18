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

Route::resource('admins', 'AdminController');
Route::resource('categories', 'CategoryController');
Route::resource('certificates', 'CertificateController');
Route::resource('comments', 'CommentController');
Route::resource('deals', 'DealController');
Route::resource('favorites', 'FavoriteController');
Route::resource('foods ', 'FoodController');
Route::resource('food_imgs ', 'FoodImgController');
Route::resource('images ', 'ImageController');
Route::resource('transactions ', 'TransactionController');
Route::resource('users', 'UserController');
Route::resource('votes', 'VoteController');

Route::get('test', 'UserController@getUser');

//Login
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
