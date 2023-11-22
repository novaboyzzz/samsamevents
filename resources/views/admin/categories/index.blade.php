@extends('admin.layouts.app')
@section('content')

    <div>
        <h1>index</h1>
        <a href="{{ route('categories.create') }}" class="btn btn-success">create</a>
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
                @foreach ($categories as $category)
                    <tr>
                        <td style="width:100px"> {{ $category->name }}</td>
                         <td><img src="{{ asset('images/category/' . $category->img) }}" alt="" style="width: 100px"></td>
                        <td><a class="btn btn-primary" href="{{ route('categories.edit',$category->id) }}">edit</a></td>
                        <td><form method="post" action="{{ route('categories.destroy',$category) }}">
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
