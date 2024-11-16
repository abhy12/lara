<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ToolController;
use App\Http\Controllers\CategoryController;
use Inertia\Inertia;
use App\Http\Middleware\UserIsAdmin;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource( 'chirps', ChirpController::class )
// ->only( ['index', 'store', 'update'])
->middleware(['auth']);

Route::resource( 'posts', PostController::class )
// ->only(['index', 'store', 'update'])
->middleware(['auth']);

Route::resource( 'category', CategoryController::class )
->only(['store', 'update'])
->middleware(['auth', UserIsAdmin::class]);

Route::resource( 'services', ServiceController::class )
->only(['index', 'show']);

Route::resource( 'tools', ToolController::class )
->only(['index', 'show']);

Route::prefix('admin')->group(function() {
    Route::middleware(['auth', UserIsAdmin::class])->group(function() {
        Route::get('/', function () {
            return Inertia::render('Admin/Admin');
        })->name('dashboard');

        Route::resource( 'services', ServiceController::class )
        ->except(['index', 'show']);
        Route::get('services', [ServiceController::class, 'adminIndex'])->name('admin.services.index');

        Route::resource( 'tools', ToolController::class )
        ->except(['index', 'show']);
        Route::get('tools', [ToolController::class, 'adminIndex'])->name('admin.tools.index');
    });
});

require __DIR__.'/auth.php';
