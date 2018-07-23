<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'FoodController@index')->name('foods.index');
Route::get('/{id}', 'FoodController@show')->name('foods.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'FoodController@store')->name('foods.store');
    Route::match(['put', 'patch'], '/{id}', 'FoodController@update')->name(
        'foods.update'
    );
    Route::delete('/{id}', 'FoodController@delete')->name('foods.delete');
});
