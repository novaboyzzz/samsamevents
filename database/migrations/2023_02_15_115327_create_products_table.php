<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->longtext('name');
            $table->longtext('description');
            $table->integer('price');
            $table->foreignId('category_id')->constrained();
            $table->longText('image_1');
            $table->longText('image_2')->nullable();
            $table->longText('image_3')->nullable();
            $table->longText('image_4')->nullable();
            $table->longText('image_5')->nullable();
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
        Schema::dropIfExists('products');
    }
};
