<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/', 'UserController@index')->name('users.index');
    Route::get('/{id}', 'UserController@show')->name('users.show');
    Route::post('/', 'UserController@store')->name('users.store');
    Route::match(['put', 'patch'], '/{id}', 'UserController@update')->name(
        'users.update'
    );
    Route::delete('/{id}', 'UserController@delete')->name('users.delete');
});
