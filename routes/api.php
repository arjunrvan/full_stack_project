<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/register',[ApiController::class,'register'])->name('api.register');
Route::post('/login',[ApiController::class,'login'])->name('api.login');

Route::post('/loginadmin',[ApiController::class,'loginadmin'])->name('api.loginadmin');


Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('/addtask', [TaskController::class, 'addTask'])->name('api.addtask');
    Route::post('/fetchtasks', [TaskController::class, 'fetchTasks'])->name('api.fetchtasks');
    Route::post('/fetcheverything', [TaskController::class, 'fetchEverything'])->name('api.fetcheverything');
    Route::post('/updatetask', [TaskController::class, 'updateTask'])->name('api.updatetask');
    Route::post('/deletetask', [TaskController::class, 'deleteTask'])->name('api.deletetask');
    Route::post('/fetchemployees', [TaskController::class, 'fetchEmployees'])->name('api.fetchemployees');
    Route::post('/logout', [ApiController::class, 'logout'])->name('api.logout');
});


