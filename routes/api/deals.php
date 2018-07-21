<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'DealController@index')->name('deals.index');
Route::get('/{id}', 'DealController@show')->name('deals.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'DealController@store')->name('deals.store');
    Route::match(['put', 'patch'], '/{id}', 'DealController@update')->name(
        'deals.update'
    );
    Route::delete('/{id}', 'DealController@delete')->name('deals.delete');
});
