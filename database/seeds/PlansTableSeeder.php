<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class PlansTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans')->delete();

        Plan::create([
          'user_id' => 1,
          'give' => 'プログラミング教えます',
          'take' => 'クッキーの作り方教えてください',
          'place' => '新宿',
          'image_url' => 'http://free-designer.net/design_img/1229010007.jpg'
        ]);
    }
}
