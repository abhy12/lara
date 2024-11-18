<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreServiceRequest;
use App\Models\Tool;
use App\Models\Category;

class ServiceController extends Controller
{
    public $upload_path = 'uploads';

    protected function handleLogoUpload($logo, Service $service)
    {
        $logoName = time() . '_' . $logo->getClientOriginalName(); // Generate unique name
        $logo->move(public_path($this->upload_path), $logoName);

        // Optionally store the logo path in the database
        $service->logo = '/' . $this->upload_path . '/' . $logoName;
        $service->save();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get with tools
        /* $services = Service::select('id', 'name', 'description')
        ->with(['tools' => function( $query) {
            $query->select('tool_id', 'name');
        }])
        ->get()->sortDesc()->values()->all(); */

        $services = Service::select('id', 'name', 'description', 'logo')->get()->sortDesc()->values()->all();

        return Inertia::render('Services/IndexService', [
            'services' => $services,
        ]);
    }

    public function adminIndex()
    {
        $services = Service::with('tools', 'categories')
            ->select('id', 'name', 'created_at')
            ->get()
            ->sortDesc()
            ->values()
            ->all();

        return Inertia::render('Admin/Services/IndexServices', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Services/CreateService', [
            'tools' => Tool::all(),
            'categories' => Category::where('parent_id', null)->with('subcategory')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        $vaildated = $request->validated();

        $service = Service::create($vaildated);

        $data = $request->input('tools');

        if (isset($data)) $service->tools()->sync($data);

        $category = $request->input('categories');
        if (isset($category)) $service->categories()->sync($category);

        // upload logo
        if ($request->hasFile('logo')) $this->handleLogoUpload($request->file('logo'), $service);

        return Redirect::route('services.edit', ['service' => $service->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        return Inertia::render('Services/SingleService', [
            'service' => $service->load('tools', 'categories'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
    {
        return Inertia::render('Admin/Services/EditService', [
            'service' => $service,
            'tools' => Tool::all(),
            'selectedToolIds' => $service->tools->pluck('id'),
            'categories' => Category::where('parent_id', null)->with('subcategory')->get(),
            'selectedCategories' => $service->categories->pluck('id'),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreServiceRequest $request, Service $service)
    {
        $vaildated = $request->validated();

        $service->update($vaildated);

        $tools = $request->input('tools');
        if (isset($tools)) $service->tools()->sync($tools);

        $category = $request->input('categories');
        if (isset($category)) $service->categories()->sync($category);

        // upload logo
        if ($request->hasFile('logo')) $this->handleLogoUpload($request->file('logo'), $service);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return Redirect::route('admin.services.index');
    }
}
