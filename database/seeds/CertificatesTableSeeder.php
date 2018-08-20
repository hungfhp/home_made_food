<?php

use Illuminate\Database\Seeder;

class CertificatesTableSeeder extends Seeder
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
                'admin_id' => 0,
                'user_id' => 0,
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-5 days', $endDate = 'now', $timezone = null)
            ],
            [
                'admin_id' => 1,
                'user_id' => 1,
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-5 days', $endDate = 'now', $timezone = null)
            ],
            [
                'admin_id' => 2,
                'user_id' => 2,
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-5 days', $endDate = 'now', $timezone = null)
            ]
        ];
        DB::table('certificates')->insert($data);
    }
}
