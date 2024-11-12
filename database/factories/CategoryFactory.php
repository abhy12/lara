<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Configure the model factory.
     */
    public function configure():static
    {
        return $this->afterCreating(function (Category $category) {
            $category_id = $category->id;

            if( $category_id >= 5 && $category_id < 7 ) {
                $category->parent_id = 2;
                $category->save();
            }
        });
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->catchPhrase(),
        ];
    }
}
