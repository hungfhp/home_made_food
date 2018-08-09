<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'TransactionController@index')->name('transactions.index');
Route::get('/required', 'TransactionController@required')->name('transactions.required');
Route::get('/cooked', 'TransactionController@cooked')->name('transactions.cooked');
Route::get('/dealed', 'TransactionController@dealed')->name('transactions.dealed');

Route::get('/{id}', 'TransactionController@show')->name('transactions.show');
Route::get('/transactionHistory/{userId}', 'TransactionController@getTransactionHistory')->name('transactions.history');

Route::group(['middleware' => 'auth:api'], function () {
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
