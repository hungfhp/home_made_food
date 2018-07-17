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
        $data = [
            [
                'food_name' => 'trứng rán',
                'food_id' => 1,
                'required_id' => 2,
                'cooked_id' => null,
                'shipper_id' => null,
                'status' => 'required',
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'description' => 'đây là món trứng rán',
                'price' => 250000
            ],
            [
                'food_name' => 'thịt rán',
                'food_id' => 2,
                'required_id' => 2,
                'cooked_id' => 3,
                'shipper_id' => null,
                'status' => 'cooked',
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'description' => 'đây là món thịt rán',
                'price' => 200000,
            ],
            [
                'food_name' => 'canh măng',
                'food_id' => 3,
                'required_id' => 2,
                'cooked_id' => 3,
                'shipper_id' => 4,
                'status' => 'shipping',
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'description' => 'đây là món canh',
                'price' => 200000,
            ],
            [
                'food_name' => 'canh chua',
                'food_id' => 4,
                'required_id' => 2,
                'cooked_id' => 3,
                'shipper_id' => 4,
                'status' => 'done',
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'description' => 'đây là món canh chua',
                'price' => 200000,
            ],
            [
                'food_name' => 'thịt gà chiên',
                'food_id' => 5,
                'required_id' => 3,
                'cooked_id' => null,
                'shipper_id' => null,
                'status' => 'cancel',
                'created_at' => Carbon::now()->toDateString(),
                'updated_at' => Carbon::now()->toDateString(),
                'description' => 'đây là món gà chiên',
                'price' => 350000,
            ]
        ];
        DB::table('transactions')->insert($data);
    }
}
