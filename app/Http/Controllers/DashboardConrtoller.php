<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

class DashboardConrtoller extends Controller
{
    public function index()
    {
        $data =  Category::all();
        return response()->json($data);
    }
}
