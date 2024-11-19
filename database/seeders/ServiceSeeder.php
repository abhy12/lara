<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $file = public_path('services.csv');
        $services = csvToArray($file);

        foreach ($services as $service) {
            Service::create([
                'name' => $service['name'],
                'description' => $service['description'],
                'services_provided' => $service['services_provided'],
                'services_cost' => $service['services_cost'],
                'product_offered' => $service['product_offered'],
                'product_cost' => $service['product_cost'],
                'functional_expertise' => $service['functional_expertise'],
                'sgb_domain' => $service['sgb_domain'],
                'website' => $service['website'],
                'point_contact' => $service['point_contact'],
                'designation' => $service['designation'],
                'email' => $service['email'],
                'contact_number' => $service['contact_number'],
            ]);
        }
    }
}
