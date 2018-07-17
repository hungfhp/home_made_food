<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data =  [
            [
            'name' => 'trứng rán',
            'description' => 'đây là món trứng rán'
            ],
            [
                'name' => 'thịt rán',
                'description' => 'đây là món thịt rán'
            ],
            [
                'name' => 'canh măng',
                'description' => 'đây là món canh măng'
            ],
            [
                'name' => 'canh chua',
                'description' => 'đây là món canh chua'
            ],
            [
                'name' => 'thịt gà chiên',
                'description' => 'đây là món thịt gà chiên'
            ]
        ];
        DB::table('categories')->insert($data);
    }
}
