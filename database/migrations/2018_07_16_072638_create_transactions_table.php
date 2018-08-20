<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Carbon\Carbon;
class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('id')->index();
            $table->integer('food_id');
            $table->integer('creator_id');
            $table->integer('requirer_id')->nullable();
            $table->integer('cooker_id')->nullable();
            $table->integer('shipper_id')->nullable();
            $table->string('status');
            $table->longText('description');
            $table->integer('price');
            $table->dateTime('desired_at')->default(Carbon::now());
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
        Schema::dropIfExists('transactions');
    }
}
