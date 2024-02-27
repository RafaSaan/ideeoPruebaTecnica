<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SuperUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userToCreate = User::where('email', "rsaan02@gmail.com")->exists();
        if (!$userToCreate) {
            User::create([
                "name"=> "rafa",
                "email"=>"rsaan02@gmail.com",
                "password"=>bcrypt("12345678"),
            ]);
        }
    }
}
