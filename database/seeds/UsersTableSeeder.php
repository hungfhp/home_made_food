<?php
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $data = [
            [
                'name' => 'Hung',
                'password' => bcrypt('123456'),
                'email' => 'hung@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => true,
                'certificate' => "http://therewardboss.com/wp-content/uploads/2015/11/jason-bourne-passport-photo.jpg",
                'description' => 'this is user test',
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ],
            [
                'name' => "Hieu",
                'password' => bcrypt('123456'),
                'email' => 'hieu@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => true,
                'certificate' => "http://therewardboss.com/wp-content/uploads/2015/11/jason-bourne-passport-photo.jpg",
                'description' => $faker->text($maxNbChars = 200),
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ],
            [
                'name' => "Thu",
                'password' => bcrypt('123456'),
                'email' => 'thu@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => true,
                'certificate' => "http://therewardboss.com/wp-content/uploads/2015/11/jason-bourne-passport-photo.jpg",
                'description' => $faker->text($maxNbChars = 200),
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ],
            [
                'name' => $faker->name,
                'password' => bcrypt('123456'),
                'email' => 'test@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => false,
                'certificate' => null,
                'description' => $faker->text($maxNbChars = 200),
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ],
            [
                'name' => $faker->name,
                'password' => bcrypt('123456'),
                'email' => 'test4@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => false,
                'certificate' => null,
                'description' => $faker->text($maxNbChars = 200),
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ],
            [
                'name' => $faker->name,
                'password' => bcrypt('123456'),
                'email' => 'test5@gmail.com',
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => false,
                'certificate' => null,
                'description' => 'The International Battle Pass is here to tap into the heart of the Dota summer season. Packed full of exclusive features and rewards, the Battle Pass is sure to unearth a hoard of treasures for your stash as we approach the culmination of this year\'s Dota Pro Circuit and the climactic showdown in Vancouver. 25% of all Battle Pass sales go directly to The International 2018 prize pool.',
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ]
        ];

        for ($i=0; $i < 100; $i++) { 
            $data[$i+5] = [
                'name' => $faker->name,
                'password' => bcrypt('123456'),
                'email' => $faker->email,
                'avatar' => 'https://www.mautic.org/media/images/default_avatar.png',
                'address' => 'Trường Đại học Ngoại thương, 91 Chùa Láng, Đống Đa, Hà Nội, Việt Nam',
                'phone' => str_random(11),
                'ident' => false,
                'certificate' => null,
                'description' => $faker->text($maxNbChars = 200),
                'latitude' => $faker->latitude($min = 19, $max = 22),
                'longitude' => $faker->longitude($min = 102, $max = 107)
            ];
        }

        DB::table('users')->insert($data);
    }
}
