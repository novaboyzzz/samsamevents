<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class aboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 3; $i++) { 
            $image = new Image;
            if($i == 0){
                $image->name = 'aboutus';
                $image->main = 1;
            }else{
                $image->name = 'aboutus';
                $image->main = 0;
            }
            
            $image->page = 'aboutus';
            $image->image_url = 'testaboutus.png';
            $image->save();
        }
        
    }
}
