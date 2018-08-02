<?php
use Illuminate\Support\Facades\Route;

Route::get('/{id}/cooked_foods', 'UserController@getCookedFoods')->name('users.getCookedFoods');
Route::get('/{id}/favorited_foods', 'UserController@getFavoritedFoods')->name('users.getFavoritedFoods');
Route::get('/{id}/liked_foods', 'UserController@getLikedFoods')->name('users.getLikedFoods');

Route::get('/', 'UserController@index')->name('users.index');
Route::get('/{id}', 'UserController@show')->name('users.show');

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/', 'UserController@store')->name('users.store');
    Route::match(['put', 'patch'], '/{id}', 'UserController@update')->name(
        'users.update'
    );
    Route::delete('/{id}', 'UserController@delete')->name('users.delete');
});
