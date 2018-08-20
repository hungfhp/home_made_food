<?php
use Illuminate\Support\Facades\Route;

Route::get('/categories_feature', 'HomeController@feature')->name('home.feature');
Route::get('/most_liked_foods', 'FoodController@mostLike')->name('home.most_liked_foods');
