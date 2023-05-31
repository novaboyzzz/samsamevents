<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
 <body>
   
    <form action="{{route('products.store')}}" method="post">
        @csrf
        <div class="mb-3">
            <label for="name" class="form-label">name</label>
            <input type="text" class="form-control" id="name" name="name">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">price</label>
            <input type="text" class="form-control" id="name" name="price">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">discription</label>
            <input type="text" class="form-control" id="name" name="discription">
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">img_url</label>
            <input type="text" class="form-control" id="name" name="main_img">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</body>
</html>