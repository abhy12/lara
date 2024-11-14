<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::user()->is_admin;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'services_provided' => 'nullable|string',
            'services_cost' => 'nullable|string',
            'product_offered' => 'nullable|string',
            'product_cost' => 'nullable|string',
            'functional_expertise' => 'nullable|string',
            'sgb_domain' => 'nullable|string',
            'website' => 'nullable|url',
            'point_contact' => 'nullable|string',
            'designation' => 'nullable|string',
            'email' => 'nullable|email',
            'contact_number' => 'nullable|string',
            'tools' => 'exists:App\Models\Tool,id'
        ];
    }
}
