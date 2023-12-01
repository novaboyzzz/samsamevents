@extends('admin.layouts.app')
@section('content')

    <div>
        <h1>index</h1>
        <a href="{{ route('admin.products.create') }}" class="btn btn-success">create</a>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>products</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($products as $product)
                    <tr>
                        <td style="width:100px"> {{ $product->name }}</td>
                        <td><img src="{{ asset('images/product/' . $product->image_1) }}" alt="" style="width: 100px"></td>
                        
                       
                        <td><img src="{{ asset('images/product/' . $product->image_2) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_3) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_4) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_5) }}" alt="" style="width: 100px"></td>
                        <td><a class="btn btn-primary" href="{{ route('admin.products.edit',$product->id) }}">edit</a></td>
                        <td><form method="post" action="{{ route('admin.products.destroy',$product) }}">
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
