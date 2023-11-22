<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = Str::random(8);
        echo('dit is admin password:'.$password);
        $password = Hash::make($password);

        $admin = new User();
        $admin->name = 'admin';
        $admin->email = 'samsam@admin.nl';
        $admin->password = $password;
        $admin->save();
    }
}
