<!doctype html>
<html>

<head>
    @include('admin.layouts.head')
</head>

<body>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                @include('admin.layouts.header')
            </div>
            <div class="col py-3">
                @yield('content')
            </div>
            
        </div>
        
    </div>
    <footer class="row">
        @include('admin.layouts.footer')
    </footer>
</body>

</html>
