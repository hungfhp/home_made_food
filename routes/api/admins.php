<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'AdminController@index')->name('admins.index');
    Route::get('/{id}', 'AdminController@show')->name('admins.show');
    Route::post('/', 'AdminController@store')->name('admins.store');
    Route::match(['put', 'patch'], '/{id}', 'AdminController@update')->name(
        'admins.update'
    );
    Route::delete('/{id}', 'AdminController@delete')->name('admins.delete');
});
