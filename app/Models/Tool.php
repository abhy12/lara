<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    /** @use HasFactory<\Database\Factories\ToolFactory> */
    use HasFactory;

    protected $guarded = ['id'];

    public function services() {
        return $this->belongsToMany(Service::class);
    }

    public function categories() {
        return $this->belongsToMany(Category::class, 'tool_categories');
    }
}
