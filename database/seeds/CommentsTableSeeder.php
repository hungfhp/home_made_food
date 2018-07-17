<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
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
                'comment' => 'món này ngon vcc!'
            ]
        ];
        DB::table('comments')->insert($data);
    }
}
