<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $products=[
            "name" => "wackamole",
            "price" => "120",
            "discription" => "lorim ",
            "category_id" => '1'


        ];



        DB::table('products')->insert([
            "name" => "wackamole",
            "price" => "120",
            "discription" => "lorim ",
            "category_id" => '1'


        ]);
    }
}
