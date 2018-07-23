<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'CommentController@index')->name('comments.index');
Route::get('/{id}', 'CommentController@show')->name('comments.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'CommentController@store')->name('comments.store');
    Route::match(['put', 'patch'], '/{id}', 'CommentController@update')->name(
        'comments.update'
    );
    Route::delete('/{id}', 'CommentController@delete')->name('comments.delete');
});
