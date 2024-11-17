<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;

    protected $fillable = ['name', 'parent_id'];

    public function services() {
        return $this->belongsToMany(Service::class);
    }

    public function tools() {
        return $this->belongsToMany(Tool::class);
    }

    public function subcategory() {
        return $this->hasMany(Category::class, 'parent_id');
    }

    public function parent() {
        return $this->belongsTo(Category::class, 'parent_id');
    }
}
