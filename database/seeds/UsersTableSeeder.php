<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        User::create([
          'name' => 'Test User',
          'email' => 'test@gmail.com',
          'password' => Hash::make('test1234'),
          'image_url' => 'http://free-designer.net/design_img/1229010007.jpg'
        ]);
    }
}
