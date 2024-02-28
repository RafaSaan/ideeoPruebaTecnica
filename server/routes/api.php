<?php

use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\Authenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('contact-us', [ContactUsController::class, 'contactUSPost']);
Route::post('login', [AuthController::class, 'login']);
Route::get('test', [TestController::class, 'testDB']);

Route::middleware('auth:api')->group(function () {
    Route::get('contactsRequest', [ContactUsController::class, 'getContactRequest']);
    Route::get('getPartners', [UserController::class, 'getUsers']);
    Route::post('createPartner', [UserController::class, 'createUser']);
    Route::post('updatePartner', [UserController::class, 'updateUser']);
    Route::delete('deletePartner/{id}', [UserController::class, 'deleteUser']);
});

