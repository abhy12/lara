<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Tool;
use App\Models\Service;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tools', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedTinyInteger('is_opensource')->nullable();
            $table->string('website')->nullable();
            $table->text('cost_structure')->nullable();
            $table->text('fee_amount')->nullable();
            $table->text('free_credit')->nullable();
            $table->text('support_structure')->nullable();
            $table->text('sgb_domain')->nullable();
            $table->text('ngo_ref')->nullable();
            $table->text('additional_comments')->nullable();
            $table->timestamps();
        });

        Schema::create('service_tool', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Tool::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Service::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service_tool');
        Schema::dropIfExists('tools');
    }
};
