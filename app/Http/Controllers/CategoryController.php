<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function Category()
    {
        $data =  Category::all();
        
        return response()->json($data);
    }
    public function product()
    {
        $data =  Product::all();
        
        return response()->json($data);
    }
}
