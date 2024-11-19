<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tool;
use App\Models\Category;

class ToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = public_path('tools.csv');
        $tools = csvToArray($file);

        foreach( $tools as $tool ) {
            $is_opensource = $tool['is_opensource'];

            $new_tool = Tool::create([
                'name' => $tool['name'],
                'is_opensource' => ( $is_opensource === 'Y' || $is_opensource === 'Yes' ) ? 1 : 0,
                'website' => $tool['website'],
                'cost_structure' => $tool['cost_structure'],
                'fee_amount' => $tool['fee_amount'],
                'free_credit' => $tool['free_credit'],
                'support_structure' => $tool['support_structure'],
                'sgb_domain' => $tool['sgb_domain'],
                'ngo_ref' => $tool['ngo_ref'],
                'additional_comments' => $tool['additional_comments'],
                'service_provider' => $tool['service_provider'],
            ]);

            // category
            $cat_ids = [];
            $category_name = $tool['category_name'];
            if( isset( $category_name ) ) $category_name = trim( $category_name );
            if( $category_name !== '' ) {
                $cat = Category::where('name', $category_name )->first();
                if( $cat !== null ) $cat_ids[] = $cat->id;
            }
            $new_tool->categories()->sync($cat_ids);
        }
    }
}
