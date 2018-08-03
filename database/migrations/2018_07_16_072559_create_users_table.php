<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->string('name');
            $table->string('password');
            $table->string('email');
            $table->string('avatar')->default('https://wallpapersfind.com/wp-content/uploads/2017/10/dota-2-wallpaper-1080x1080.jpg');
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->boolean('ident')->default(false);
            $table->string('certificate')->nullable();
            $table->longText('description')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
