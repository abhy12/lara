<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    /** @use HasFactory<\Database\Factories\ToolFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'is_opensource',
        'website',
        'cost_structure',
        'fee_amount',
        'free_credit',
        'support_structure',
        'sgb_domain',
        'ngo_ref',
        'additional_comments',
        'logo',
    ];

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'tool_categories');
    }
}
