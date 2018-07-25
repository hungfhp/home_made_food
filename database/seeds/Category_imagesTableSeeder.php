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
        $data = [
            [
                'category_id' => 1,
                'link' => 'http://7monngonmoingay.info/wp-content/uploads/2015/12/cach-lam-mon-trung-chien-bo-don-gian-ma-la-mieng.jpg'
            ],
            [
                'category_id' => 2,
                'link' => 'https://media.lamsao.com//Data//thaontp/22042016/cach_lam_thit_lon_ran_thom_ngon_19.JPG'
            ],
            [
                'category_id' => 3,
                'link' => 'http://2sao.vietnamnetjsc.vn/images/2018/02/10/15/17/canh-mang-04.jpg'
            ],
            [
                'category_id' => 4,
                'link' => 'http://7monngonmoingay.info/wp-content/uploads/2015/05/cach-nau-canh-chua-ca-hu-ngon-giai-nhiet-mua-he.jpg'
            ],
            [
                'category_id' => 5,
                'link' => 'https://ameovat.com/wp-content/uploads/2016/05/cach-lam-ga-ran.jpg'
            ]
        ];
        DB::table('category_images')->insert($data);
    }
}
