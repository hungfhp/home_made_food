<?php

use Illuminate\Database\Seeder;

class FoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data =[
            [
                'cooked_id' => 3,
                'category_id' => 2,
                'name' => 'thịt rán',
                'price' => 20000,
                'description' => 'thịt ba chỉ, rán ít mỡ',
                'like' => 1,
                'dislike' => 0,
                'publish' => true,
            ],
            [
                'cooked_id' => 3,
                'category_id' => 3,
                'name' => 'canh măng',
                'price' => 20000,
                'description' => 'cần đặt món canh măng nhiều ',
                'like' => 0,
                'dislike' => 0,
                'publish' => true,
            ],
            [
                'cooked_id' => 3,
                'category_id' => 4,
                'name' => 'canh ',
                'price' => 20000,
                'description' => 'cần đặt món canh chua',
                'like' => 0,
                'dislike' => 0,
                'publish' => true,
            ]
        ];
        DB::table('foods')->insert($data);
    }
}
