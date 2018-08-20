<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'TransactionController@index')->name('transactions.index');

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/history', 'TransactionController@getHistory')->name('transactions.getHistory');
    Route::get('/history/total', 'TransactionController@getHistoryTotal')->name('transactions.getHistoryTotal');
    Route::post('/', 'TransactionController@store')->name('transactions.store');
    Route::match(['put', 'patch'],'/{id}','TransactionController@update')->name('transactions.update');
    Route::delete('/{id}', 'TransactionController@delete')->name('transactions.delete');
    }
);
    
Route::get('/{id}', 'TransactionController@show')->name('transactions.show');