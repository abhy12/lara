<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreToolRequest;
use Illuminate\Support\Facades\Redirect;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tools/Index', [
            'tools' => Tool::all(),
        ]);
    }

    public function adminIndex()
    {
        return Inertia::render('Admin/Tools/IndexTool', [
            'tools' => Tool::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Tools/CreateTool');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreToolRequest $request)
    {
        $validated = $request->validated();

        $tool = Tool::create( $validated );

        return Redirect::route( 'tools.edit', ['tool' => $tool->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tool $tool)
    {
        return Inertia::render('Tools/SingleTool', [
            'tool' => $tool,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tool $tool)
    {
        return Inertia::render('Admin/Tools/EditTool', [
            'tool' => $tool,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreToolRequest $request, Tool $tool)
    {
        $validated = $request->validated();

        $tool->update( $validated );

        return Redirect::route( 'tools.edit', ['tool' => $tool->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
        $tool->delete();

        return Redirect::route( 'admin.tools.index' );
    }
}
