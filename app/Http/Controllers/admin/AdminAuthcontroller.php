<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\StoreUserReqeust;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\error;

class AdminAuthcontroller extends Controller
{
   public function index(){
    $url ='/login';
    return view('admin.auth.login',compact('url'));
   }

   public function authenticate(LoginRequest $request){
    if(auth('admin')->attempt($request->except(['_token']))){
        return redirect()->intended(route("admin.dashboard"));
    }else{
        return back()->withErrors(['login' => 'email or password invalid']);
    }
   }
   
   public function logout(){
    auth('admin')->logout();
    return redirect()->route('login');
   }

}
