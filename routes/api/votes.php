<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'VoteController@index')->name('votes.index');
    Route::get('/{id}', 'VoteController@show')->name('votes.show');
    Route::post('/', 'VoteController@store')->name('votes.store');
    Route::match(['put', 'patch'], '/{id}', 'VoteController@update')->name(
        'votes.update'
    );
    Route::delete('/{id}', 'VoteController@delete')->name('votes.delete');
});
