<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
<<<<<<< HEAD
Route::get('/pdf', function () {
    return view('pdf');
});
Route::get('/form', function () {
    return view('formRegister');
});
=======

Route::get('afiliado/index', [AfiliadosController::class, 'index']);
>>>>>>> aec0858f2f0f8f7a968578c72ecbb38b23d5625f
