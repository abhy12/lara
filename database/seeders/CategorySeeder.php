<?php

namespace Database\Seeders;

require_once 'utils.php';

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = public_path('tools_categories.csv');
        $categories = csvToArray($file);

        foreach ($categories as $category) {
            $cat_name = $category['category_name'];
            $parent_name = $category['parent_name'];
            if( isset( $parent_name ) ) $parent_name = trim( $parent_name );
            $parent_id = null;

            if ($parent_name !== '') {
                $parent = Category::where('name', $parent_name)->first();
                if ($parent !== null) {
                    $parent_id = $parent->id;
                }
            }

            Category::create([
                'name' => $cat_name,
                'parent_id' => $parent_id,
            ]);
        }
    }
}
