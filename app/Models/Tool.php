<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tool extends Model
{
    /** @use HasFactory<\Database\Factories\ToolFactory> */
    use HasFactory;
    protected $guarded = ['id'];

    /* protected $fillable = [
        'name',
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
    ]; */

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'tool_categories');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public static function createUniqueSlug($name)
    {
        $slug = Str::slug($name);
        $count = Tool::where('slug', 'LIKE', "{$slug}%")->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($tool) {
            $tool->slug = Str::slug($tool->name);
        });
    }
}
