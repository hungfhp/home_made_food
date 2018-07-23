<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'FavoriteController@index')->name('favorites.index');
    Route::get('/{id}', 'FavoriteController@show')->name('favorites.show');
    Route::post('/', 'FavoriteController@store')->name('favorites.store');
    Route::match(['put', 'patch'], '/{id}', 'FavoriteController@update')->name(
        'favorites.update'
    );
    Route::delete('/{id}', 'FavoriteController@delete')->name(
        'favorites.delete'
    );
});
