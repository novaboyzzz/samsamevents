@extends('admin.layouts.app')
@section('content')
    <div>
        <h1>index</h1>
    </div>
    <div>
        <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data">
          @csrf
            <div class="mb-3">
              <label for="" class="form-label">name</label>
              <input type="text" class="form-control" id="name" name="name">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">price</label>
              <input type="text" class="form-control" id="name" name="price">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">description</label>
              <input type="text" class="form-control" id="name" name="description">
            </div>
            <div class="mb-3">
                <label for="image_1" class="form-label">image</label>
                <input type="file" class="form-control" id="image_1" name="image_1">
              </div>
            <div class="mb-3">
                <label for="image_2" class="form-label">image</label>
                <input type="file" class="form-control" id="image_2" name="image_2">
              </div>
            <div class="mb-3">
                <label for="image_3" class="form-label">image</label>
                <input type="file" class="form-control" id="image_3" name="image_3">
              </div>
            <div class="mb-3">
                <label for="image_4" class="form-label">image</label>
                <input type="file" class="form-control" id="image_4" name="image_4">
              </div>
            <div class="mb-3">
                <label for="image_5" class="form-label">image</label>
                <input type="file" class="form-control" id="image_5" name="image_5">
              </div>
            <div class="mb-3">
                <label for="categorie_id" class="form-label">categorie</label>
                <select type="file" class="form-control" id="categorie_id" name="category_id">
                  <option  disabled value="">make a choice</option>
                  @foreach ($categories as $category)
                    <option value="{{ $category->id }}">{{ $category->name }}</option>
                  @endforeach
                </select>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
@stop