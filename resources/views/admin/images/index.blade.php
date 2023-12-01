@extends('admin.layouts.app')
@section('content')

    <div>
        <h1>index</h1>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                <a href="{{ route('admin.images.create') }}" class="btn btn-success">create</a>
                @foreach ($images as $image)
                    <tr>
                        <td style="width:100px"> {{ $image->name }}</td>
                        <td><img src="{{ asset('images/' . $image->image_url) }}" alt="" style="width: 100px"></td>
                        <td><a class="btn btn-primary" href="{{ route('admin.images.edit',$image->id) }}">edit</a></td>
                        <td><form method="post" action="{{ route('admin.images.destroy',$image) }}">
                            @csrf
                            @method('DELETE')
                        
                            <button class="btn btn-danger" type="submit">Delete</button>
                        </form></td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@stop
