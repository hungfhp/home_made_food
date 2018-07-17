<?php

use Illuminate\Database\Seeder;

class CertificatesTableSeeder extends Seeder
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
                'admin_id' => 1,
                'user_id' => 3
            ],
            [
                'admin_id' => 1,
                'user_id' => 4
            ]
        ];
        DB::table('certificates')->insert($data);
    }
}
