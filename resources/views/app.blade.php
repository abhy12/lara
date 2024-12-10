<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta property="og:image" itemprop="image" content="/assets/img/logo-2.png">
        <meta name="description" content="A compendium of Digital Tools & Service Providers for Social Purpose Organisations (SPO)">
        <meta name="og:description" content="A compendium of Digital Tools & Service Providers for Social Purpose Organisations (SPO)">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
