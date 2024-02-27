<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $this->validate($request, [
                'email' => 'required|email',
                'password' => 'required',
            ]);
            $credentials = [ 'email' => $request->input('email'), 'password' => $request->input('password') ];

            $user = User::where('email', $credentials['email'])->first();

            if (Auth::attempt($credentials)){
                auth()->loginUsingId( User::where( 'email',  $credentials['email'] )->first()->id );
                $user = auth()->user();
                $token = $user->createToken('grp_session')->plainTextToken;
                if ($token) {
                    return response()->json( [
                        'authenticated'             => true,
                        'grp_token'                 => $token,
                        'grp_token_expiration'      => date( 'D M d Y H:i:s', strtotime( "+8 hours" ) ),
                    ], 200 );
                }
            }
            return response()->json( [
                'authenticated' => false,
            ], 200 );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => false,
                'message' => $e->getMessage()
            ], 500 );
        }
    }
}
