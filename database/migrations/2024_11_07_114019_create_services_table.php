<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->text('services_provided')->nullable();
            $table->text('services_cost')->nullable();
            $table->text('product_offered')->nullable();
            $table->text('product_cost')->nullable();
            $table->text('functional_expertise')->nullable();
            $table->text('sgb_domain')->nullable();
            $table->string('website')->nullable();
            $table->text('point_contact')->nullable();
            $table->string('designation')->nullable();
            $table->string('email')->nullable();
            $table->string('contact_number')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
