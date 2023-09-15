<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        // dd($products);
        return view('admin.products.index',compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
        $categories = Category::all();
     return view('admin.products.create',compact("categories"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $product = new Product;
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->category_id = $request->category_id;
        if ($request->file('image_1') !== null) {
            $file = $request->image_1;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->image_1);
            $product->image_1 = $filename;
        }
        if ($request->image_2 !== null) {
            $file = $request->image_2;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->image_2);
            $product->image_2 = $filename;
        }
        if ($request->image_3 !== null) {
            $file = $request->image_3;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->image_3);
            $product->image_3 = $filename;
        }
        if ($request->image_4 !== null) {
            $file = $request->image_4;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->image_4);
            $product->image_4 = $filename;
        }
        if ($request->image_5 !== null) {
            $file = $request->image_5;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->image_5);
            $product->image_5 = $filename;
        }
        $product->save();
        return redirect()->route('products.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $Product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return view('admin.products.edit',compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product = Product::where('id', $product->id)->first();
        if($request->name){
            $product->name = $request->name;
        }
        if ($request->image !== null) {
            $file = $request->image;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/product'), $filename);
            unset($product->img);
            $product->img = $filename;
        }
        $product->save();
        return redirect()->route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }

    public function product()
    {
        $data =  Product::all();
        
        return response()->json($data);
    }
}
