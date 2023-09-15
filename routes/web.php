<?php

use App\Http\Controllers\admin\CategoryController;
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
route::get('/admin', [DashboardConrtoller::class, 'index']);
route::resource('/admin/categories', CategoryController::class);
route::resource('/admin/products', ProductController::class);
route::view('/', "welcome");
