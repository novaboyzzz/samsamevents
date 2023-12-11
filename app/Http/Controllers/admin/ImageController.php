<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreImageRequest;
use App\Models\Image;
use Illuminate\Http\Request;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = Image::where('page','banner')->get();
        return view('admin.banner.index',compact('images'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.images.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = new Image;
        $image->name = $request->name;
        if ($request->file('image_url') !== null) {
            $file = $request->image_url;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/'), $filename);
            unset($image->image_url);
            $image->image_url = $filename;
        }
        $image->save();
        return redirect()->route('admin.images.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        return view('admin.images.edit',compact('image'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        $image = Image::where('id',$request->id)->first();
        if ($request->file('image_url') !== null) {
            $file = $request->image_url;
            $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
            $file->move(public_path('/images/banner/'), $filename);
            unset($image->image_url);
            $image->image_url = $filename;
        }
        $image->save();
        return redirect()->route('admin.banner.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        $image->delete();
        return redirect()->route('admin.images.index');
    }
}
