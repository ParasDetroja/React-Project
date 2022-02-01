<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/getAllCategory',[CategoryController::class, 'getAllCategory']);   // get All category
Route::post('/store',[CategoryController::class, 'store']);     // store new category
Route::put('/update/{id}',[CategoryController::class, 'update']);   // update category
Route::delete('/delete/{id}',[CategoryController::class,'delete']); // delete category

Route::get('/', function () {
    return view('welcome');
});
