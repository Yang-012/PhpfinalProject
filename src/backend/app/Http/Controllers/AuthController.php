<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AuthController extends Controller
{
    public function exchangeToken(Request $request)
    {
        $request->validate([
            'code' => 'required|string',
        ]);

        // 其他邏輯
        return response()->json(['message' => 'Token exchanged successfully!']);
    }
}
