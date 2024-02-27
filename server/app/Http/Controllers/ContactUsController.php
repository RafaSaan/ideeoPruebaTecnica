<?php

namespace App\Http\Controllers;

use App\Models\ContactUS;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function contactUSPost(Request $request)
    {
        try {
            $this->validate($request, [
                'name' => 'required',
                'email' => 'required|email',
                'message' => 'required',
                ]);
            ContactUS::create($request->all());
            return response()->json( [
                'success' => true,
                'message' => 'Gracias por contactarnos!'
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
