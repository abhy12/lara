<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreToolRequest extends FormRequest
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
            'is_opensource' => 'nullable|integer|between:0,1',
            'website' => 'nullable|url',
            'cost_structure' => 'nullable|string',
            'fee_amount' => 'nullable|string',
            'free_credit' => 'nullable|string',
            'support_structure' => 'nullable|string',
            'sgb_domain' => 'nullable|string',
            'ngo_ref' => 'nullable|string',
            'additional_comments' => 'nullable|string',
            'service_provider' => 'nullable|string',
            // 'logo' => 'nullable|image|max:4048',
        ];
    }
}
