<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    </head>
    <body class="h-100">
      <div id="app" class="flex-center position-ref h-100"></div>
      <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
