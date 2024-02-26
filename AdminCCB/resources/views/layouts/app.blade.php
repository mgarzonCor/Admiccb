<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CCB</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/libraries/bootstrap.min.css">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        {{--  --}}
        <link rel="stylesheet" rel="stylesheet" type="text/css" href="/build/assets/app-BSI89zBS.css">
        <link rel="stylesheet" rel="stylesheet" type="text/css" href="/build/assets/form-zI29IpHS.css">


        {{-- @vite(['public/css/app.scss', 'public/css/form.scss', 'public/js/app.js']) --}}

        
    </head>
    <body class="">
        <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="boxLogo" href="https://www.ccb.org.co/" target="_blank">
                    <img class="boxLogo__img" src="/img/logoCCB.png" alt="">
                </a>

                <a class="textLink" href="https://www.mundoaventura.com.co" target="_blank">Ir a mundo aventura</a>

                <a class="boxLogo" href="https://www.mundoaventura.com.co/" target="_blank">
                    <img class="boxLogo__img" src="/img/logoMA.png" alt="">
                </a>     
            </div>
        </nav>
        <main class="container">
            @yield('content')
        </main>

        <footer class="bg-light">
            <p>C O R P A R Q U E S 2024</p>
        </footer>

        <script src="/js/app.js"></script>
    </body>
</html>