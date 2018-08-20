<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $data = [
            [
                'name' => 'Hung',
                'password' => bcrypt('123456'),
                'email' => 'hung@home.foods.com',
                'phone' => '0123888888',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Hieu',
                'password' => bcrypt('123456'),
                'email' => 'hieu@home.foods.com',
                'phone' => '0123888888',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Thu',
                'password' => bcrypt('123456'),
                'email' => 'thu@home.foods.com',
                'phone' => '0123888888',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ]
        ];
        DB::table('admins')->insert($data);
    }
}
