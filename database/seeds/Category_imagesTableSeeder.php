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
            "https://anh.24h.com.vn/upload/3-2017/images/2017-08-05/1501893262-150000133490672-1.jpg",
            "http://www.allwomens.ru/uploads/posts/2014-10/1412227970_govjazhyj-stejk.jpg",
            "https://thumbs.dreamstime.com/b/category-foods-hot-pot-food-electric-stove-thai-hot-pot-stly-includes-shrimp-fish-beef-vegetables-corn-meatballs-many-107224753.jpg",
            "http://sohanews.sohacdn.com/thumb_w/660/2016/4-thuc-pham-gay-ung-thu-da-day-ma-ban-an-thuong-xuyen-hinh-2-1482827575171-28-0-499-759-crop-1482827579721.jpg",
            "https://nau.vn/wp-content/uploads/2014/04/luoc-ga-ngon.jpg",
            "http://nemchuaotdo.com/wp-content/uploads/2015/03/pho-ha-noi1.jpg",
            "https://i.ytimg.com/vi/8anWh3nXROM/maxresdefault.jpg",
            "https://wiki-travel.com.vn/uploads/post/Thaophuongnguyen-174720044737-kem-4.jpg"
        ];

        for ($i=0; $i < 8; $i++) { 
            $data[$i] = [
                'category_id' => $i+1,
                'link' => $images[$i],
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ];
        }

        DB::table('category_images')->insert($data);
    }
}
