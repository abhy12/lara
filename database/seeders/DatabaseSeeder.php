<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Service;
use App\Models\Tool;
use App\Models\Category;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->is_admin()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        Post::factory(10)->create();

        Service::factory(15)->create();

        Tool::factory(10)->create();

        // create at least 10
        Category::factory(10)->create();
    }
}
