<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('{slug}', function() {
    return view('index');
})
->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Auth::routes();

Route::get('/home', 'HomeController@index');

Route::group(['middleware' => 'web'], function () {

    //FBログイン（ボタンのリンク先）
    Route::get('facebook','FacebookController@facebookLogin');
    //認証後の戻りURL
    Route::get('facebook/callback','FacebookController@facebookCallback');

});
