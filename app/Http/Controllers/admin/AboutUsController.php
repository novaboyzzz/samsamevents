<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Image;
use Illuminate\Http\Request;

class AboutUsController extends Controller
{
    public function index(){
        $images = Image::where('page','aboutus')->get();
        return view('admin.about-us.index',compact('images'));
    }

    public function update(Request $request, Image $image)
    {
        
        if(isset($request->main)){
            $image = Image::where('id',$request->main)->first();
            $image->main = 1;
            $image->name = 'aboutusMain';
            $image->save();
            $image = null;
            $images = Image::where('id' ,'!=' ,$request->id)->get();
            foreach ($images as $image) {
                $image->main = 0;
                $image->name = 'aboutus';
                $image->save();
            }
        }else{
            $image = Image::where('id',$request->id)->first();
            if ($request->file('image_url') !== null) {
                $file = $request->image_url;
                $filename = date('Y_m_d_His').'_'.str_replace(' ', '', $file->getClientOriginalName());
                $file->move(public_path('/images/aboutus/'), $filename);
                unset($image->image_url);
                $image->image_url = $filename;
            }
        $image->save();
        }
        return redirect()->route('admin.about-us.index');
    }
}
