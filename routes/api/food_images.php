<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'FoodImageController@index')->name('food_images.index');
Route::get('/{id}', 'FoodImageController@show')->name('food_images.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'FoodImageController@store')->name('food_images.store');
    Route::match(['put', 'patch'], '/{id}', 'FoodImageController@update')->name(
        'food_images.update'
    );
    Route::delete('/{id}', 'FoodImageController@delete')->name(
        'food_images.delete'
    );
});
