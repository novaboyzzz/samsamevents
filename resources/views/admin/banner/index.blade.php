@extends('admin.layouts.app')
@section('content')

    <div>
        <h1>index</h1>
       
    </div>
    <div>
        <table>
            <tbody>
                @foreach ($images as $image)
            <form action="{{ route('admin.banner.update', $image) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" name="id" id="" value="{{ $image->id }}">
                <div class="row">
                  <div class="mb-3 col-4">
                    <label for="image" class="form-label">image</label>
                    <img src="{{ asset('images/banner/' . $image->image_url) }}" class="w-25" alt="">
                    <input type="file" class="form-control" id="image" name="image_url"
                        value="{{ $image->image_url }}">
                </div>
                    <div class="mb-3 col-4">
                      <div class="pt-5 mt-3">
                        <label for="" class="form-label">name</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ $image->name }}" disabled>
                      </div>
                    </div>
                    
                    <div class="col-4">
                      <div class="pt-5 mt-5">
                    <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                  </div>
                </div>
            </form>
        @endforeach
            </tbody>
        </table>
    </div>
@stop
