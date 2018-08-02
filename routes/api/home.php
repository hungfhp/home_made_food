<?php
use Illuminate\Support\Facades\Route;

Route::get('/categories_feature', 'HomeController@feature')->name('home.feature');
