<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'TransactionController@index')->name('transactions.index');
Route::get('/{id}', 'TransactionController@show')->name('transactions.show');

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'TransactionController@store')->name('transactions.store');
    Route::match(
        ['put', 'patch'],
        '/{id}',
        'TransactionController@update'
    )->name('transactions.update');
    Route::delete('/{id}', 'TransactionController@delete')->name(
        'transactions.delete'
    );
});
