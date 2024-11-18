<?php

namespace App\Http\Controllers;

use App\Models\Tool;
use Inertia\Inertia;
use App\Http\Requests\StoreToolRequest;
use Illuminate\Support\Facades\Redirect;
use App\Models\Category;

class ToolController extends Controller
{
    public $upload_path = 'uploads';

    protected function handleLogoUpload($logo, Tool $tool)
    {
        $logoName = time() . '_' . $logo->getClientOriginalName(); // Generate unique name
        $logo->move(public_path($this->upload_path), $logoName);

        // Optionally store the logo path in the database
        $tool->logo = '/' . $this->upload_path . '/' . $logoName;
        $tool->save();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tools/Index', [
            'tools' => Tool::with('categories')->get(),
            'categories' => Category::all(),
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
        return Inertia::render('Admin/Tools/CreateTool', [
            'categories' => Category::where('parent_id', null)->with('subcategory')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreToolRequest $request)
    {
        $validated = $request->validated();

        $tool = Tool::create($validated);

        $category = $request->input('categories');
        if (isset($category)) $tool->categories()->sync($category);

        // upload logo
        if ($request->hasFile('logo')) $this->handleLogoUpload($request->file('logo'), $tool);

        return Redirect::route('tools.edit', ['tool' => $tool->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tool $tool)
    {
        return Inertia::render('Tools/SingleTool', [
            'tool' => $tool->load('services'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tool $tool)
    {
        return Inertia::render('Admin/Tools/EditTool', [
            'tool' => $tool,
            'categories' => Category::where('parent_id', null)->with('subcategory')->get(),
            'selectedCategories' => $tool->categories->pluck('id'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreToolRequest $request, Tool $tool)
    {
        $validated = $request->validated();

        $tool->update($validated);

        $category = $request->input('categories');
        if (isset($category)) $tool->categories()->sync($category);

        // upload logo
        if ($request->hasFile('logo')) $this->handleLogoUpload($request->file('logo'), $tool);

        return Redirect::route('tools.edit', ['tool' => $tool->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tool $tool)
    {
        $tool->delete();

        return Redirect::route('admin.tools.index');
    }
}
