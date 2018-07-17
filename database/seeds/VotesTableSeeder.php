<?php

use Illuminate\Database\Seeder;

class VotesTableSeeder extends Seeder
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
                'user_id' => 2,
                'like' => 1
            ]
        ];
        DB::table('votes')->insert($data);
    }
}
