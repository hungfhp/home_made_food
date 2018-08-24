<?php

use Illuminate\Database\Seeder;
// use Log;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        
        $data =  [
            [
                'name' => 'Hải sản',
                'description' => 'Hải sản là nguồn cung cấp protein quan trọng trong khẩu phần ăn trên khắp thế giới, đặc biệt là ở các vùng ven biển. Là nguồn thực phẩm cần thiết cho con người, không những thế, nó còn có hương vị thơm ngon mà còn có giá trị dinh dưỡng cao.  Các nhà khoa học cho biết, việc tiêu thụ một khẩu phần hải sản mỗi tuần có thể giúp giảm 50% nguy cơ đau tim. Bên cạnh đó, hải sản còn mang lại nhiều lợi ích cho não bộ.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Thịt',
                'description' => 'Trong những nền ẩm thực trên thế giới, thịt đã được chế biến thành những món ăn, những biến thể khác nhau, rất phong phú và đa dạng. Một số món thịt được chế biến bằng cách sử dụng hai hoặc nhiều loại thịt, trong khi một số khác chỉ được chế biến bằng cách sử dụng một loại.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Canh',
                'description' => 'Mâm cơm người Việt không thể thiếu canh. Món canh tuy đơn giản, nhưng lại mang đến nhiều giá trị dinh dưỡng nếu chế biến đúng cách.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Cơm',
                'description' => 'Cơm là một loại thức ăn được làm ra từ gạo bằng cách đem nấu với một lượng vừa đủ nước. Cơm trắng, chỉ có nguyên liệu là gạo tẻ và không có thêm gia vị, là thức ăn gần như hàng ngày của người Đông Nam Á và Đông Á. Cơm trắng còn là nguyên liệu cho các món cơm rang, cơm hến.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Gà',
                'description' => 'Tuyển tập các món gà ngon không thể tả, tin tức hình ảnh mới nhất luôn được cập nhật liên tục.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Phở',
                'description' => 'Phở là một món ăn truyền thống của Việt Nam, cũng có thể xem là một trong những món ăn tiêu biểu cho nền ẩm thực Việt Nam. Thành phần chính của phở là bánh phở và nước dùng (hay nước lèo theo cách gọi miền Nam) cùng với thịt bò hoặc thịt gà cắt lát mỏng.',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Món chay',
                'description' => 'Nếu ai cho rằng ăn chay không ngon miệng thì sẽ phải thay đổi quan điểm khi được thưởng thức các món chay từ nấm, đậu phụ, rau củ,..',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ],
            [
                'name' => 'Các món khác',
                'description' => 'Gồm các món tráng miêng, kem, chè, sinh tố,...',
                'created_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null),
                'updated_at' => $faker->dateTimeBetween($startDate = '-45 days', $endDate = 'now', $timezone = null)
            ]
        ];

        DB::table('categories')->insert($data);
    }
}
