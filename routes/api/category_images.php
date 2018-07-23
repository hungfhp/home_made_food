<?php
use Illuminate\Support\Facades\Route;

Route::get('/', 'CategoryImageController@index')->name('category_images.index');
Route::get('/{id}', 'CategoryImageController@show')->name(
    'category_images.show'
);

Route::group(['middleware' => 'auth'], function () {
    Route::post('/', 'CategoryImageController@store')->name(
        'category_images.store'
    );
    Route::match(
        ['put', 'patch'],
        '/{id}',
        'CategoryImageController@update'
    )->name('category_images.update');
    Route::delete('/{id}', 'CategoryImageController@delete')->name(
        'category_images.delete'
    );
});
