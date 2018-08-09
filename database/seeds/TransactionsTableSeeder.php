<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use App\Http\Helpers\ControllerHelper;

class TransactionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i=0; $i < 500; $i+=6) { 
            $data[$i] = [
                    'food_id' => rand(0,1000),
                    'required_id' => rand(0,4),
                    'cooked_id' => null,
                    'shipper_id' => null,
                    'status' => 'required',
                    'created_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
            $data[$i+1] = [
                    'food_id' => rand(0,1000),
                    'required_id' => null,
                    'cooked_id' => rand(0,4),
                    'shipper_id' => null,
                    'status' => 'cooked',
                    'created_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
            $data[$i+2] = [
                    'food_id' => rand(0,1000),
                    'required_id' => rand(0,4),
                    'cooked_id' => rand(0,4),
                    'shipper_id' => null,
                    'status' => 'dealed',
                    'created_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
            $data[$i+3] = [
                    'food_id' => rand(0,1000),
                    'required_id' => rand(0,4),
                    'cooked_id' => rand(0,4),
                    'shipper_id' => rand(0,4),
                    'status' => 'shipping',
                    'created_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-1 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
            $data[$i+4] = [
                    'food_id' => rand(0,1000),
                    'required_id' => rand(0,4),
                    'cooked_id' => rand(0,4),
                    'shipper_id' => rand(0,4),
                    'status' => 'done',
                    'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
            $data[$i+5] = [
                    'food_id' => rand(0,1000),
                    'required_id' => rand(0,4),
                    'cooked_id' => rand(0,4),
                    'shipper_id' => rand(0,4),
                    'status' => 'cancel',
                    'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                    'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                    'description' => $faker->realText($maxNbChars = 150, $indexSize = 2),
                    'price' => rand(4,15)*5000
            ];
        }
       
        DB::table('transactions')->insert($data);
    }
}
