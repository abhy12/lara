<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function tools() {
        return $this->belongsToMany(Tool::class);
    }

    public function categories() {
        return $this->belongsToMany(Category::class, 'service_categories');
    }
}
