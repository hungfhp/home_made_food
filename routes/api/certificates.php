<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'CertificateController@index')->name('certificates.index');
    Route::get('/{id}', 'CertificateController@show')->name(
        'certificates.show'
    );
    Route::post('/', 'CertificateController@store')->name('certificates.store');
    Route::match(
        ['put', 'patch'],
        '/{id}',
        'CertificateController@update'
    )->name('certificates.update');
    Route::delete('/{id}', 'CertificateController@delete')->name(
        'certificates.delete'
    );
});
