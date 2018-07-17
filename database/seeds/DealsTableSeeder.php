<?php

use Illuminate\Database\Seeder;

class DealsTableSeeder extends Seeder
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
                'user_id' => 2,
                'transaction_id' => 2,
                'comment' => '20000',
                'user_name' => '123'
            ],
            [
                'user_id' => 3,
                'transaction_id' => 3,
                'comment' => '20000 and i will cook',
                'user_name' => '222'
            ],
            [
                'user_id' => 3,
                'transaction_id' => 3,
                'comment' => '20000 and i will cook',
                'user_name' => '222'
            ]
        ];
        DB::table('deals')->insert($data);
    }
}
