//react import
import React, { useState, useEffect } from 'react';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Storefront from './storefront';
import Category from './category';
import About from './about_me';
import Product_slider from './product-slider';

//scss import
import "../scss/Homepage.scss";
import LoadingScreen from './loading';

//create function
function App() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a delay of 2 seconds before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }, []);
    return (
        <div>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
            <Ann_bar />
            <Nav_bar />
            <Storefront />
            <Category />
            <About />
            <Product_slider/>
            </>
          )}
        </div>
    );
}

export default App;
