<?php

use Illuminate\Database\Seeder;

class FavoritesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'food_id' => 2,
                'user_id' => 2
            ],
            [
                'food_id' => 4,
                'user_id' => 2
            ]
        ];
        DB::table('favorites')->insert($data);
    }
}
