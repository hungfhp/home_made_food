<?php

use Illuminate\Database\Seeder;

class AdminsTableSeeder extends Seeder
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
                'name' => 'admin',
                'password' => bcrypt('123456'),
                'email' => 'admin@email.com',
                'phone' => '0123888888'
            ]
        ];
        DB::table('admins')->insert($data);
    }
}
