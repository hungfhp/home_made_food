<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'UserController@index')->name('users.index');
Route::get('/{id}', 'UserController@show')->name('users.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'UserController@store')->name('users.store');
    Route::match(['put', 'patch'], '/{id}', 'UserController@update')->name(
        'users.update'
    );
    Route::delete('/{id}', 'UserController@delete')->name('users.delete');
});
