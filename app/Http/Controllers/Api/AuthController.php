<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //

    public function signup(SignupRequest $request)
    {
        return $request->all();
        
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }


    public function login(LoginRequest $request){
        $credentials = $request->validated();
        if(!Auth::attempt($credentials)){
            return response(['message' => 'The email or password is incorrect']);
        }

        $user = Auth::user();
        return response(compact('user', 'token'));
    }

    public function logOut(Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();
        
        return response(['message' => 'You have been logged out']);
    }
}
