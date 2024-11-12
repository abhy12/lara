<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tool>
 */
class ToolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'is_opensource' => rand(0, 1),
            'website' => 'https://google.com',
            'cost_structure' => fake()->text(60),
            'fee_amount' => fake()->text(40),
            'free_credit' => fake()->text(40),
            'support_structure' => fake()->text(80),
            'sgb_domain' => fake()->text(30),
            'ngo_ref' => fake()->text(40),
            'additional_comments' => fake()->text(60),
        ];
    }
}
