@extends('admin.layouts.app')
@section('content')
    <div>
        <h1>index</h1>
    </div>
    <div>
        @foreach ($images as $image)
            <form action="{{ route('admin.about-us.update', $image) }}" method="POST" enctype="multipart/form-data">
                @csrf
                @method('PUT')
                <input type="hidden" name="id" id="" value="{{ $image->id }}">
                <div class="row">
                  <div class="mb-3 col-4">
                    <label for="image" class="form-label">image</label>
                    <img src="{{ asset('images/aboutus/' . $image->image_url) }}" class="w-25" alt="">
                    <input type="file" class="form-control" id="image" name="image_url"
                        value="{{ $image->image_url }}">
                </div>
                    <div class="mb-3 col-4">
                      <div class="pt-5 mt-3">
                        <label for="" class="form-label">name</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ $image->name }}" disabled>
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="pt-5 mt-5">
                        <label>main</label>
                        <input type="radio" name="main" class="radio main-radio form-check-input" value="{{ $image->id }}" @if($image->main) checked @endif>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="pt-5 mt-5">
                    <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                  </div>
                </div>
            </form>
        @endforeach
    </div>

@stop
@section('js')
<script>
  $(document).ready(function() {
      $('.main-radio').change(function() {
          
          $('.main-radio').not(this).prop('checked', false);
      });
  });
</script>
@stop