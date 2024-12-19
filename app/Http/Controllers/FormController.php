<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\Contact;

class FormController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Forms/IndexForms', [
            'forms' => Form::all(),
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
    public function store(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'organization' => 'required|max:255',
            'message' => 'max:550',
        ]);

        Form::create($validate);
    }

    /**
     * Send mail to admin email.
     */
    public function mail(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|max:255|email',
            'organization' => 'required|max:255',
            'message' => 'max:550',
        ]);

        Mail::to(env('MAIL_ADMIN_ADDRESS'))->send(new Contact($validate));
    }

    /**
     * Display the specified resource.
     */
    public function show(Form $form)
    {
        return Inertia::render('Admin/Forms/SingleForm', [
            'form' => $form,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Form $form)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Form $form)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Form $form)
    {
        $form->delete();

        redirect(route('forms.index'));
    }
}
