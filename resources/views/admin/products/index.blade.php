@extends('admin.layouts.app')
@section('content')

    <div>
        <h1>index</h1>
        <a href="{{ route('products.create') }}" class="btn btn-success">create</a>
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
                @foreach ($products as $product)
                    <tr>
                        <td style="width:100px"> {{ $product->name }}</td>
                        <td><img src="{{ asset('images/product/' . $product->image_1) }}" alt="" style="width: 100px"></td>
                        
                       
                        <td><img src="{{ asset('images/product/' . $product->image_2) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_3) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_4) }}" alt="" style="width: 100px"></td>
                        <td><img src="{{ asset('images/product/' . $product->image_5) }}" alt="" style="width: 100px"></td>
                        {{-- <td><a href="{{ route('products.edit',$product->id) }}">edit</a></td> --}}
                        <td><form method="post" action="{{ route('products.destroy',$product) }}">
                            @csrf
                            @method('DELETE')
                        
                            <button type="submit">Delete</button>
                        </form></td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@stop
