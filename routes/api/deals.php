<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'DealController@index')->name('deals.index');
Route::get('/newest', 'DealController@newest')->name('deals.newest');

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('/', 'DealController@store')->name('deals.store');
    Route::match(['put', 'patch'], '/{id}', 'DealController@update')->name(
        'deals.update'
    );
    Route::delete('/{id}', 'DealController@delete')->name('deals.delete');
});

Route::get('/{id}', 'DealController@show')->name('deals.show');