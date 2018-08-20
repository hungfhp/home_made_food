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
        $address_array = [
            'Đại học Bách Khoa Hà Nội',
            "Đại học Ngoại Thương",
            "434 Trần Khát Chân",
            "Time City",
            "Phố đi bộ Hồ Gươm"
        ];

        for ($i = 0; $i < 500; $i += 5) {
            $user0 = rand(1,4);
            $user1 = $user0 + 1;
            $user2 = $user0 + 2;
            $rand = rand(0,1) > 0.5 ? true : false;

            // dealing
            $data[$i] = [
                'food_id' => rand(1, 1000),
                'creator_id' => $user0,
                'requirer_id' => $rand ? $user0 : null,
                'cooker_id' => $rand ? null : $user0,
                'shipper_id' => null,
                'status' => 'dealing',
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
                    ),
                'desired_at' =>   
                    $faker->dateTimeBetween(
                        $startDate = '+1 days',
                        $endDate = '+2 days',
                        $timezone = null
                    ),
                'description' =>
                    $faker->realText($maxNbChars = 150, $indexSize = 2),
                'address_from' => $rand ? $address_array[rand(0,4)] : null,
                'address_to' => $rand ? null : $address_array[rand(0,4)],
                'price' => rand(4, 15) * 5000
            ];
            // dealed 
            $data[$i + 1] = [
                'food_id' => rand(1, 1000),
                'creator_id' => $rand ? $user1 : $user2,
                'requirer_id' => $user1,
                'cooker_id' => $user2,
                'shipper_id' => null,
                'status' => 'dealed',
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
                    ),
                'desired_at' =>   
                    $faker->dateTimeBetween(
                        $startDate = '+1 days',
                        $endDate = '+2 days',
                        $timezone = null
                    ),
                'description' =>
                    $faker->realText($maxNbChars = 150, $indexSize = 2),
                'address_from' => $address_array[rand(0,4)],
                'address_to' => $address_array[rand(0,4)],
                'price' => rand(4, 15) * 5000
            ];
            // shipping
            $data[$i + 2] = [
                'food_id' => rand(1, 1000),
                'creator_id' => $rand ? $user1 : $user2,
                'requirer_id' => $user1,
                'cooker_id' => $user2,
                'shipper_id' => $user0,
                'status' => 'shipping',
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
                    ),
                'desired_at' =>   
                    $faker->dateTimeBetween(
                        $startDate = '+1 days',
                        $endDate = '+2 days',
                        $timezone = null
                    ),
                'description' =>
                    $faker->realText($maxNbChars = 150, $indexSize = 2),
                'address_from' => $address_array[rand(0,4)],
                'address_to' => $address_array[rand(0,4)],
                'price' => rand(4, 15) * 5000
            ];
            // done
            $data[$i + 3] = [
                'food_id' => rand(1, 1000),
                'creator_id' => $rand ? $user0 : $user2,
                'requirer_id' => $user0,
                'cooker_id' => $user2,
                'shipper_id' => $user1,
                'status' => 'done',
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
                    ),
                'desired_at' =>   
                    $faker->dateTimeBetween(
                        $startDate = '+1 days',
                        $endDate = '+2 days',
                        $timezone = null
                    ),
                'description' =>
                    $faker->realText($maxNbChars = 150, $indexSize = 2),
                'address_from' => $address_array[rand(0,4)],
                'address_to' => $address_array[rand(0,4)],
                'price' => rand(4, 15) * 5000
            ];
            // cancel
            $data[$i + 4] = [
                'food_id' => rand(1, 1000),
                'creator_id' => $rand ? $user0 : $user1,
                'requirer_id' => $user0,
                'cooker_id' => $user1,
                'shipper_id' => $user2,
                'status' => 'cancel',
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
                    ),
                'desired_at' =>   
                    $faker->dateTimeBetween(
                        $startDate = '+1 days',
                        $endDate = '+2 days',
                        $timezone = null
                    ),
                'description' =>
                    $faker->realText($maxNbChars = 150, $indexSize = 2),
                'address_from' => $address_array[rand(0,4)],
                'address_to' => $address_array[rand(0,4)],
                'price' => rand(4, 15) * 5000
            ];
        }

        DB::table('transactions')->insert($data);
    }
}
