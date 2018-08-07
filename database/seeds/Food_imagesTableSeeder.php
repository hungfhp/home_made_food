<?php

use Illuminate\Database\Seeder;

class Food_imagesTableSeeder extends Seeder
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
                'food_id' => 1,
                'link' => 'https://media.lamsao.com//Data//thaontp/22042016/cach_lam_thit_lon_ran_thom_ngon_19.JPG'
            ],
            [
                'food_id' => 2,
                'link' => 'http://2sao.vietnamnetjsc.vn/images/2018/02/10/15/17/canh-mang-04.jpg'
            ],
            [
                'food_id' => 3,
                'link' => 'http://7monngonmoingay.info/wp-content/uploads/2015/05/cach-nau-canh-chua-ca-hu-ngon-giai-nhiet-mua-he.jpg'
            ]
        ];
        DB::table('food_images')->insert($data);
    }
}
