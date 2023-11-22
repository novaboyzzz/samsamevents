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
    public function allProduct()
    {
        $data =  Product::all();
        
        return response()->json($data);
    }

    public function product(int $productId)
    {   
        $data =  Product::where('id',$productId)->first();
        // Log::info('Retrieved product data:', ['data' => $data]); 
        return response()->json($data);
    }
}
