<?php

namespace App\Http\Controllers;

use App\Models\ContactUS;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function getContactRequest(Request $request)
    {
        try {
            $rowPerPage = $request->input('rowsPerPage') ? $request->input('rowsPerPage') : 15;
            $items = ContactUS::paginate($rowPerPage);
            return response()->json( [
                'success' => true,
                'contactRequests' => $items
            ], 200 );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => false,
                'message' => $e->getMessage()
            ], 500 );
        }
    }
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
