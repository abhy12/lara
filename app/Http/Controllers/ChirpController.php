<?php

namespace App\Http\Controllers;

use App\Models\Chirp;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Gate;
use App\Policies\ChirpPolicy;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render( 'Chirps/Index', [
            'chirps' => Chirp::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $request->user()->chrips()->create( $validated );

        return redirect( route( 'chirps.index') );
    }

    /**
     * Display the specified resource.
     */
    public function show(Chirp $chrip)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirp $chrip)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp): RedirectResponse
    {
        // Gate::define( 'update-chirp', [ChirpPolicy::class, 'update'] );
        Gate::authorize( 'update-chirp', $chirp );

        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);

        $chirp->update( $validated );

        return redirect( route( 'chirps.index' ) );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chrip)
    {
        //
    }
}
