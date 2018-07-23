{{-- <!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel 5.5 with React 16 Boilerplate') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
<h1>INDEX</h1>
<div id="root">
</div>
{{-- @yield('content') --}}

<!-- Scripts -->
{{-- <script src="{{mix('/js/app.js')}}"></script> --}}
{{-- </body> --}}
{{-- </html> --}}
@extends('layouts.app')

@section('content')

<div id="root"></div>
@endsection
