<?php

use Illuminate\Database\Seeder;

class Category_imagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $images = [
            "http://girlbeta.com/wp-content/uploads/2013/07/foods.jpg",
            "https://static1.squarespace.com/static/59bf5431e45a7c495cccc43e/t/5aa84318419202c43912e772/1520976707826/bigstock--157004327.jpg",
            "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4t/x3/p04tx3m6.jpg",
            "https://thumbs.dreamstime.com/b/category-foods-hot-pot-food-electric-stove-thai-hot-pot-stly-includes-shrimp-fish-beef-vegetables-corn-meatballs-many-107224753.jpg",
            "http://www.supermarketnews.com/sites/supermarketnews.com/files/2017FreshIntroPromo_5.jpg",
            "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/6/1/2/9/3419216-1-eng-GB/Everything-is-a-snack-the-foods-and-formats-shaping-the-category.jpg",
            "https://www.marketingmag.com.au/wp-content/uploads/2015/09/george-weston-foods-540.jpg",
            "https://futurethinking.com/wp-content/uploads/2018/02/plant-based-produce.jpg"
        ];

        for ($i=0; $i < 8; $i++) { 
            $data[$i] = [
                'category_id' => $i,
                'link' => $images[$i],
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ];
        }

        DB::table('category_images')->insert($data);
    }
}
