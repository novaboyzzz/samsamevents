@extends('admin.layouts.app')
@section('content')
    <div>
        <h1>index</h1>
    </div>
    <div>
        <form action="{{ route('products.update',$product) }}" method="POST" enctype="multipart/form-data">
          @csrf
          @method('PUT')
            <div class="mb-3">
              <label for="" class="form-label">name</label>
              <input type="text" class="form-control" id="name" name="name" value="{{ $product->name }}">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">description</label>
              <input type="text" class="form-control" id="name" name="description" value="{{ $product->description }}">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">price</label>
              <input type="number" class="form-control" id="name" name="price" value="{{ $product->price }}">
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
            <div class="mb-3">
                <label for="image" class="form-label">image</label>
                <img src="{{ asset('images/product/' . $product->image_1) }}" alt="" width="100">
                <input type="file" class="form-control" id="image" name="image_1">
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">image 2</label>
                <img src="{{ asset('images/product/' . $product->image_2) }}" alt="" width="100">
                <input type="file" class="form-control" id="image" name="image_2">
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">image 3</label>
                <img src="{{ asset('images/product/' . $product->image_3) }}" alt="" width="100">
                <input type="file" class="form-control" id="image" name="image_3">
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">image 4</label>
                <img src="{{ asset('images/product/' . $product->image_4) }}" alt="" width="100">
                <input type="file" class="form-control" id="image" name="image_4">
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">image 5</label>
                <img src="{{ asset('images/product/' . $product->image_5) }}" alt="" width="100">
                <input type="file" class="form-control" id="image" name="image_5">
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </div>
@stop