<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUsers(Request $request) {
        try {
            $rowsPerPage = $request->input('rowsPerPage') ? $request->input('rowsPerPage') : 15;
            $partners = User::select(['id','name', 'email'])->paginate($rowsPerPage);
            return response()->json( [
                'success' => true,
                'partners' => $partners
            ], 200 );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => false,
                'message' => $e->getMessage()
            ], 500 );
        }
    }
    public function createUser(Request $request) {
        try {
            $validated = $request->validate([
                'name' => 'required',
                'email' => 'required|unique:users,email',
                'password' => 'required',
            ]);
            User::create($validated);
            return response()->json( [
                'success' => true,
                'message' => 'Usuario creado con exito'
            ], 200 );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => false,
                'message' => $e->getMessage()
            ], 500 );
        }
    }
    public function updateUser(Request $request) {
        try {
            $validated = $request->validate([
                'id' => 'required',
                'name' => 'required',
                'email' => 'required',
                'password' => 'nullable',
            ]);
            User::whereId($validated['id'])->first()->update($validated);
            return response()->json( [
                'success' => true,
                'message' => 'Usuario actualizado con exito'
            ], 200 );
        }
        catch ( \Exception $e ) {
            return response()->json( [
                'success' => false,
                'message' => $e->getMessage()
            ], 500 );
        }
    }
    public function deleteUser($id) {
        try {
            User::whereId($id)->delete();
            return response()->json( [
                'success' => true,
                'message' => 'Usuario Eliminado con exito'
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
