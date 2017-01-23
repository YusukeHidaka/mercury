<?php

use Illuminate\Database\Seeder;
use App\Models\Plan;
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
        $faker = Faker\Factory::create();

        for ($i=0; $i < 5; $i++) {
            Plan::create([
              'user_id' => $i,
              'give' => $faker->numerify('やってあげます！ ###'),
              'take' => $faker->numerify('やってください！ ###'),
              'place' => $faker->address,
              'image_url' => 'http://free-designer.net/design_img/1229010007.jpg'
            ]);
        }
    }
}
