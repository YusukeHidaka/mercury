<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

//追加
use Laravel\Socialite\Contracts\Factory as Socialite;

class FacebookController extends Controller
{
    //
    protected $socialite;

    //コンストラクタ
    public function __construct(Socialite $socialite)
    {
        $this->socialite = $socialite;
    }

    //ログイン
    public function facebookLogin()
    {
        //facebookへリダイレクト
        return $this->socialite->driver('facebook')->redirect();
    }

    //コールバック
    public function facebookCallback()
    {
        //ユーザー情報を取得
        $fuser = $this->socialite->driver('facebook')->user();

        //各情報の取得
        $fuser->getId();
        $fuser->getName();
        $fuser->getEmail();

        //とりあえず表示
        return $fuser->getEmail();
    }
}
