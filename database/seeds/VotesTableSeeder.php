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
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 1000; $i += 2) {
            $data[$i] = [
                'food_id' => rand(1, 1000),
                'user_id' => rand(1, 5),
                'like' => 1,
                'created_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-45 days',
                        $endDate = 'now',
                        $timezone = null
                    ),
                'updated_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-1 days',
                        $endDate = 'now',
                        $timezone = null
                    )
            ];
            $data[$i + 1] = [
                'food_id' => rand(1, 1000),
                'user_id' => rand(1, 5),
                'like' => rand(-1, 1),
                'created_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-45 days',
                        $endDate = 'now',
                        $timezone = null
                    ),
                'updated_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-1 days',
                        $endDate = 'now',
                        $timezone = null
                    )
            ];
        }
        DB::table('votes')->insert($data);
    }
}
