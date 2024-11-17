<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Laravel\Socialite\Facades\Socialite;


class GoogleAuthController extends Controller
{
    // 引導使用者到 Google 認證頁面
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    // 處理 Google 認證的回傳
    public function handleGoogleCallback()
{
    try {
        // 獲取 Google 用戶信息
        $googleUser = Socialite::driver('google')->stateless()->user();

        // 查找或創建用戶
        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'google_id' => $googleUser->getId(),
                'avatar' => $googleUser->getAvatar(),
            ]
        );

        // 創建訪問令牌，返回給前端
        $token = $user->createToken('Google Login')->accessToken;

         // 返回用戶信息和令牌
         return response()->json([
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
            'token' => $token,
        ]);

    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}


}
