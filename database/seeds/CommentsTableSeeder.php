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
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 1000; $i++) {
            $data[$i] = [
                'food_id' => rand(1, 1000),
                'user_id' => rand(1, 5),
                'comment' => $faker->realText($maxNbChars = 50, $indexSize = 2),
                'created_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-45 days',
                        $endDate = 'now',
                        $timezone = null
                    ),
                'updated_at' =>
                    $faker->dateTimeBetween(
                        $startDate = '-45 days',
                        $endDate = 'now',
                        $timezone = null
                    )
            ];
        }

        DB::table('comments')->insert($data);
    }
}
