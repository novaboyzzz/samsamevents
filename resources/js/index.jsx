//react import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    createBrowserRouter, 
    RouterProvider 
} from "react-router-dom";

import App from './homepage';

const router = createBrowserRouter([
    {    
    path: "/", 
    element: <App />,
    },
])


//load function
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router}/>
    );
});
