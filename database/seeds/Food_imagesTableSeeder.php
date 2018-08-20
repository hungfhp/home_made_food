<?php
use Illuminate\Database\Seeder;
use GuzzleHttp\Client;

class Food_imagesTableSeeder extends Seeder
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
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
            "https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg",
            "https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg",
            "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/15_surprisingly_healthy_foods_slideshow/493ss_thinkstock_rf_spaghetti_with_tomatoes_on_plate.jpg",
            "https://www.rd.com/wp-content/uploads/2018/01/09_Fast_Foods-You-Should-Never-Eat-if-You-Want-to-Live-a-Long-Life_583485004_Nitr-760x506.jpg",
            "https://cdn1.medicalnewstoday.com/content/images/articles/320/320932/processed-foods-on-table.jpg",
            "https://cdn1.medicalnewstoday.com/content/images/articles/320/320932/processed-foods-on-table.jpg",
            "https://dingo.care2.com/pictures/greenliving/1014/1013023.large.jpg",
            "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817.jpg%3Fitok%3Dig79fdSU&w=700&q=85",
            "https://foodrevolution.org/wp-content/uploads/2018/03/blog-featured_healthy_foods-20180306.jpg",
            "https://cdn.newsapi.com.au/image/v1/053e70ddc55e5aa4b1584e2485331c20",
            "https://media.treehugger.com/assets/images/2018/02/junk-food.jpg.860x0_q70_crop-scale.jpg",
            "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4t/x3/p04tx3m6.jpg",
            "https://cdn-img.health.com/sites/default/files/styles/master_4_3/public/styles/main/public/sb10066792a-001.jpg?itok=Zl-O6qIU",
            "https://foodrevolution.org/wp-content/uploads/2018/04/blog-featured-diabetes-20180406-1330.jpg",
            "http://www.backtonaturefoods.com/media/2577/slide_newproducts.jpg",
            "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/5x/m0/p05xm061.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
            "https://e3.365dm.com/18/02/1096x616/2371802150107668907_4231478.jpg?20180215033146",
            "http://akc.org/wp-content/uploads/2015/12/Dinner-Table.jpg",
            "https://data.whicdn.com/images/309799483/original.jpg?t=1522351625",
            "https://www.healthline.com/hlcmsresource/images/AN_images/strawberries-in-chocolate-thumb.jpg",
            "https://cdn.narcity.com/u/2017/10/23/8a51a043937ed69f7365059abfa3907265894f1d.png_1200x630.png",
            "http://macbrandfoods.com/wp-content/uploads/2013/09/food.jpg",
            "https://i.walmartimages.ca/img/category/grocery/tiles/2018/Week02/CUS_WMS_OG-IndianSouthAsian_20180202_E.jpg",
            "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1519844002%2Ffast-food-mobile-apps-chick-fil-a-FT-BLOG0218.jpg%3Fitok%3D7d_gu0JA&w=700&q=85",
            "https://s.abcnews.com/images/Lifestyle/HT_recipes_03_as_160829_4x3_992.jpg",
            "https://www.healthline.com/hlcmsresource/images/AN_images/AN138-Pizza-732x549-Thumb_0.jpg",
            "https://s.hswstatic.com/gif/crave-comfort-foods-1.jpg",
            "https://cdn.cnn.com/cnnnext/dam/assets/150521165141-02-microbiome-foods-restricted-super-169.jpg",
            "https://i.ndtvimg.com/i/2018-05/chicken_650x400_51525852960.jpg",
            "https://cdn.superonefoods.com/images/slides/PorkShoulder.jpg",
            "https://amp.thisisinsider.com/images/5888e1b955b1061a008b57df-750-563.jpg",
            "http://images.tritondigitalcms.com/6616/sites/271/2018/02/04103902/generalmillsmap.jpg",
            "https://images.agoramedia.com/everydayhealth/gcms/best-ra-foods-722x406.jpg",
            "https://www.goredforwomen.org/wp-content/uploads/2013/03/six-salty-foods-700x395-11.jpg",
            "https://hofoodsnyc.cdn.prismic.io/hofoodsnyc/d9a300548118d8ef901e53bfe32d97047c565111_ho-foods-12b_preview.jpg",
            "https://www.instagram.com/p/BThRaJth_YT/media/?size=l",
            "https://cdn.triplelights.com/uploads/2016-04/teGdH4eA_japanese-curry-01.jpg",
            "https://i.ytimg.com/vi/sWisuBtbypE/hqdefault.jpg",
            "https://cdn.triplelights.com/uploads/2016-04/OstkwMk4_okonomiyaki.jpg",
            "https://www.instagram.com/p/BThRaJth_YT/media/?size=l",
            "https://shizuokagourmet.files.wordpress.com/2010/05/japan-food.jpg",
            "https://cdn.triplelights.com/uploads/2016-04/vFmYi9hl_sushi-collage.jpg",
            "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160823141245-japan-food6-hiroshima-ramen-hiroshima-prefecturejnto.jpg",
            "https://www.jfh.com.sg/images/index_about_pic.jpg",
            "https://www.insidejapantours.com/csp/jap/insidejapan/images/culturepages/6/slider/1.jpg",
            "https://resources.matcha-jp.com/resize/720x2000/2017/07/07-30602.jpeg",
            "https://www.tsunagujapan.com/wp-content/uploads/2017/05/15102166307_f04012c6a4_z.jpg",
            "http://designmadeinjapan.com/site/wp-content/uploads/2015/04/cover-japan-fake-food-display-dishes_001.jpg",
            "https://44u8552epjw3rivfs1yfikr1-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/Bowl-of-ramen.jpg",
            "https://blog.gaijinpot.com/wp-content/uploads/sites/4/2014/08/california_roll.jpg",
            "http://jpninfo.com/wp-content/uploads/2016/01/food-tonkatsu.jpg",
            "https://assets.vogue.com/photos/5891343285b3959618472679/master/pass/11-exotic-foods-to-try-in-japan-besides-sushi.jpg",
            "https://gurunavi.com/en/japanfoodie/article/what_to_eat_in_japan/img/06_unique-food.jpg",
            "https://d1cv1pewbvxxsf.cloudfront.net/uploads/Article/1711/thumbnails/sm_file_d904ccdc-cd02-43e5-9ccf-681a40677e23.jpg",
            "https://i.ytimg.com/vi/dVpLASmDbiE/maxresdefault.jpg",
            "https://i.pinimg.com/originals/45/44/b7/4544b702457730fefb1cfc2453a7a0b1.jpg",
            "http://www.intelbriefing.com/wp-content/uploads/2017/06/Best-place-to-find-Japan-food.jpg",
            "http://www.pachd.com/free-images/food-images/japanese-food-01.jpg",
            "https://www.japantravel-centre.com/wp-content/uploads/2016/03/kaiseki_l.jpg",
            "https://www.gooverseas.com/sites/default/files/styles/1014x/public/images/2018-02-06/Must-Try%20Foods%20While%20Studying%20in%20Japan.jpg?itok=1AKxfonX",
            "https://favy-inbound-singapore.s3.amazonaws.com/uploads/topic_item/image/32037/retina_pixta_35245741_S.jpg"
        ];

        $data = [];
        for ($i = 1; $i <= 1000; $i++) {
            array_push($data, [
                'food_id' => $i,
                'link' => $images[rand(0, sizeof($images) - 1)],
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
            array_push($data, [
                'food_id' => $i,
                'link' => $images[rand(0, sizeof($images) - 1)],
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

        DB::table('food_images')->insert($data);
    }
}
