<?php

use App\Http\Controllers\admin\AdminAuthcontroller;
use App\Http\Controllers\admin\CategoryController;
use App\Http\Controllers\admin\ImageController;
use App\Http\Controllers\admin\ProductController;
use App\Http\Controllers\DashboardConrtoller;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/product/{name}', function () {
    return view('product');
});

Route::get('/category', function () {
    return view('category');
});

Route::get('/category/{id}', function () {
    return view('category');
});

Route::name('admin.')->prefix('admin')->group(function () {
    Route::group(['middleware' => ['auth:admin']], function () {
    route::get('/', [DashboardConrtoller::class, 'index'])->name("dashboard");
    route::resource('/categories', CategoryController::class);
    route::resource('/products', ProductController::class);
    route::resource('/images', ImageController::class);

    });
    
});
Route::get('/login', [AdminAuthcontroller::class,'index'])->name('login');
Route::post('/login', [AdminAuthcontroller::class,'authenticate'])->name('authenticate');
Route::get('/logout', [AdminAuthcontroller::class,'logout'])->name('logout');
route::view('/', "welcome");