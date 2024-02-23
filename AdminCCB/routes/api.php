<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// use AppHttpControllersApiAfiliadosController;
use App\Http\Controllers\AfiliadosController;

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

Route::get('/afiliado', [AfiliadosController::class, 'index']);

Route::get('/afiliado/{matricula}/{codigoCCb}', [AfiliadosController::class, 'buscarPorMatriculaCodigo']);

Route::get('/construirPdf', [AfiliadosController::class, 'construirPdf']);

Route::post('/guardarInscritos', [AfiliadosController::class, 'guardarInscritos']);