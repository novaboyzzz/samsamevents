@extends('auth.layouts.default')

@section('content')
    <div class="container d-flex align-items-center justify-content-center" style="min-height: 100vh;">
        <div class="centered-div">
            <div style="text-align: center">
                <a href="/">
                <img src="{{ asset('/images/logo.png') }}" alt="" width="100" style="">
            </a>
            </div>
            <div>
                @if ($errors->has('login'))
                    <div class="alert alert-danger mt-2">
                        {{ $errors->first('login') }}
                    </div>
                @endif
            </div>
            <form action="{{ route('authenticate') }}" method="post">
                @csrf
                <div class="mb-3 mt-2">
                    <input type="email" class="form-control p-2" id="exampleFormControlInput1" placeholder="Email address"
                        name="email" >
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control p-2" id="exampleFormControlInput1" name="password"
                        placeholder="password">
                </div>
                <button type="submit" class="btn btn-primary w-100">submit</button>
            </form>
        </div>
    </div>
@stop
