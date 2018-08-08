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
        $faker = Faker\Factory::create();
        $description = [
            "món ăn bổ ích",
            "tốt cho sức khỏe",
            "ăn nhiều cũng được",
            "không nên ăn ít"
        ];

        $categories =  [
            [
                'name' => 'hải sản',
                'description' => 'đây là món hải sản'
            ],
            [
                'name' => 'thịt',
                'description' => 'đây là món thịt'
            ],
            [
                'name' => 'canh',
                'description' => 'đây là món canh'
            ],
            [
                'name' => 'cơm',
                'description' => 'đây là món cơm'
            ],
            [
                'name' => 'gà',
                'description' => 'đây là món thịt gà'
            ],
            [
                'name' => 'phở',
                'description' => 'đây là món thịt phở'
            ],
            [
                'name' => 'King of foods',
                'description' => 'đây là món thịt King of foods'
            ],
            [
                'name' => 'Japan',
                'description' => 'đây là món thịt Japan'
            ]
        ];

        $category_id = rand(0,7);
        $data = [];
        for ($i=0; $i < 1000; $i++) { 
            array_push($data, [
                'cooked_id' => rand(0,4),
                'category_id' => $category_id,
                'name' => $categories[$category_id]["name"] ." ". $i,
                'price' => rand(3,20)*5000,
                'description' => $description[rand(0,3)],
                'like' => rand(0,10),
                'dislike' => rand(0,2),
                'publish' => rand(0,1) < 0.5 || rand(0,1) < 0.5 || rand(0,1) < 0.5 || rand(0,1) < 0.5,
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ]);
        };

        DB::table('foods')->insert($data);
    }
}
