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

        $services = Service::select('id', 'name', 'description')->get()->sortDesc()->values()->all();

        return Inertia::render('Services/IndexService', [
            'services' => $services,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Services/CreateService', [
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

        $service = Service::create( $vaildated );

        $data = $request->input('tools');

        if( isset( $data ) ) $service->tools()->sync($data);

        return Redirect::route('services.index');
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
        return Inertia::render('Services/EditService', [
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

        $service->update( $vaildated );

        $tools = $request->input('tools');
        if( isset( $tools ) ) $service->tools()->sync($tools);

        $tools = $request->input('categories');
        if( isset( $tools ) ) $service->categories()->sync($tools);
        // dd( $request->input('categories') );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return Redirect::route( 'services.index' );
    }
}
