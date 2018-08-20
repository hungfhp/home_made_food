<?php

use Illuminate\Database\Seeder;
// use Log;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        
        $data =  [
            [
                'name' => 'hải sản',
                'description' => 'đây là món hải sản',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'thịt',
                'description' => 'đây là món thịt',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'canh',
                'description' => 'đây là món canh',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'cơm',
                'description' => 'đây là món cơm',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'gà',
                'description' => 'đây là món thịt gà',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'phở',
                'description' => 'đây là món thịt phở',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'King of foods',
                'description' => 'đây là món thịt King of foods',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Japan',
                'description' => 'đây là món thịt Japan',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ]
        ];

        DB::table('categories')->insert($data);
    }
}
