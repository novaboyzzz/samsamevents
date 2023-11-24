@extends('admin.layouts.app')
@section('content')
    <div>
        <h1>index</h1>
    </div>
    <div>
        <form action="{{ route('admin.categories.store') }}" method="POST" enctype="multipart/form-data">
          @csrf
            <div class="mb-3">
              <label for="" class="form-label">name</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">image</label>
                <input type="file" class="form-control" id="image" name="image">
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
@stop