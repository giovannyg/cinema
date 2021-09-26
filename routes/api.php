<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'App\Http\Controllers', 'middleware' => 'auth:sanctum'], function () {
  Route::get('/get-loggedin-user', function() {
    return response(request()->user());
  });  
  Route::patch('/showtimes/{model}/change-status', 'ShowtimeController@changeStatus');
  Route::resource('/showtimes', 'ShowtimeController', [
    'only' => ['index', 'store', 'update', 'destroy'],
    'parameters' => ['showtimes' => 'model']
  ]);
  Route::patch('/movies/{model}/change-status', 'MovieController@changeStatus');
  Route::resource('/movies', 'MovieController', [
    'only' => ['index', 'store', 'update', 'destroy'],
    'parameters' => ['movies' => 'model']
  ]);
});