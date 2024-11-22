<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function tools()
    {
        return $this->belongsToMany(Tool::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'service_categories');
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public static function createUniqueSlug($name)
    {
        $slug = Str::slug($name);
        $count = Service::where('slug', 'LIKE', "{$slug}%")->count();

        return $count ? "{$slug}-{$count}" : $slug;
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($service) {
            $service->slug = Str::slug($service->name);
        });
    }
}
