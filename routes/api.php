<?php

use Illuminate\Http\Request;

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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::resource('/plans', 'PlanController');

Route::post('/auth/register','Auth\RegisterController@createForApi');

Route::post('/auth/isRegistered','Auth\RegisterController@isRegistered');

Route::get('/plans/user_id={user_id}','PlanController@showForUser');

Route::get('/plans/participant_id={participant_id}','PlanController@showForParticipant');
