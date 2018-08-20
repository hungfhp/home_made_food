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
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 1000; $i++) {
            $data[$i] = [
                'user_id' => rand(1, 20),
                'transaction_id' => rand(1, 500),
                'comment' => $faker->realText($maxNbChars = 50, $indexSize = 2),
                'created_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-1 days',
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
        DB::table('deals')->insert($data);
    }
}
