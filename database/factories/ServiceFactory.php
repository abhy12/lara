<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Tool;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
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
            'description' => fake()->text(),
            'services_provided' => fake()->text(30),
            'services_cost' => ( fake()->randomDigit() * rand() ) * rand(),
            'product_offered' => Tool::factory(),
            'product_cost' => ( fake()->randomDigit() * rand() ) * rand(),
            'functional_expertise' => fake()->text(60),
            'sgb_domain' => fake()->text(10),
            'website' => 'https://google.com',
            'point_contact' => fake()->name(),
            'designation' => fake()->jobTitle(),
            'email' => fake()->safeEmail(),
            'contact_number' => fake()->phoneNumber(),
        ];
    }
}
