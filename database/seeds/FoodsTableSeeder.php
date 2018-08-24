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
            "không nên ăn ít",
            "Tận dụng nguyên liệu có sẵn và không quá cầu kỳ, món ăn này có cách thực hiện rất nhanh và đơn giản",
            "Với thành phần và nguyên liệu đa dạng như rau củ, bột làm từ các loại cây thiên nhiên, đây là một trong những món ăn nên thường xuyên đưa vào thực đơn.",
            "Được nhiều người thích, nhất là vào mùa hè"
        ];

        $categories = [
            ['name' => 'hải sản', 'description' => 'đây là món hải sản'],
            ['name' => 'thịt', 'description' => 'đây là món thịt'],
            ['name' => 'canh', 'description' => 'đây là món canh'],
            ['name' => 'cơm', 'description' => 'đây là món cơm'],
            ['name' => 'gà', 'description' => 'đây là món thịt gà'],
            ['name' => 'phở', 'description' => 'đây là món thịt phở'],
            [
                'name' => 'King of foods',
                'description' => 'đây là món thịt King of foods'
            ],
            ['name' => 'Japan', 'description' => 'đây là món thịt Japan']
        ];

        $data = [];
        for ($i = 0; $i < 1000; $i++) {
            $category_id = rand(0, 7);
            array_push($data, [
                'cooker_id' => rand(1, 5),
                'category_id' => $category_id+1,
                'name' => $categories[$category_id]["name"] . " " . $i,
                'price' => rand(3, 20) * 5000,
                'description' => $description[rand(0, 3)],
                'like' => rand(1, 10),
                'dislike' => rand(1, 2),
                'publish' =>
                    rand(0, 1) < 0.5 ||
                        rand(0, 1) < 0.5 ||
                        rand(0, 1) < 0.5 ||
                        rand(0, 1) < 0.5,
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
            ]);
        }

        DB::table('foods')->insert($data);
    }
}
