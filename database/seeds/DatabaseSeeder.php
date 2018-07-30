<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(UsersTableSeeder::class);
         $this->call(CategoriesTableSeeder::class);
         $this->call(CommentsTableSeeder::class);
         $this->call(AdminsTableSeeder::class);
         $this->call(TransactionsTableSeeder::class);
         $this->call(FavoritesTableSeeder::class);
         $this->call(Category_imagesTableSeeder::class);
         $this->call(Food_imagesTableSeeder::class);
         $this->call(FoodsTableSeeder::class);
         $this->call(VotesTableSeeder::class);
         $this->call(CertificatesTableSeeder::class);
         $this->call(DealsTableSeeder::class);
    }
}
