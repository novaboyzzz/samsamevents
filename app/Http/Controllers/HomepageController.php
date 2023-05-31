<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class HomepageController extends Controller
{
    public function categories()
    {
        $data = Category::all();
        return response()->json($data);
    }
    public function products()
    {
        $data = Product::all();
        return response()->json($data);
    }
}
