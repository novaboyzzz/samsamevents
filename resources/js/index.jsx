//react import
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    createBrowserRouter, 
    RouterProvider 
} from "react-router-dom";

import Homepage from './homepage';
import Productpage from './productpage';
import Categorypage from './categorypage';
import Categoryidpage from './categoryidpage';

const router = createBrowserRouter([
    {    
    path: "/", 
    element: <Homepage />,
    },
    {    
    path: "/product/:name", 
    element: <Productpage />,
    },
    {    
    path: "/category", 
    element: <Categorypage />,
    },
    {    
    path: "/category/:id", 
    element: <Categoryidpage />,
    },
    // {    
    // path: "/admin", 
    // element: <Admin />,
    // },
])


//load function
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.createRoot(document.getElementById("root")).render(
      <RouterProvider router={router}/>
    );
});
