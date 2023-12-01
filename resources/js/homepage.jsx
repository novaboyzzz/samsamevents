//react import
import React, { useState, useEffect } from 'react';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Storefront from './storefront';
import Category from './category';
import About from './about_me';
import Product_slider from './product-slider';
import Footer from './footer';

//scss import
import "../scss/Homepage.scss";
import LoadingScreen from './loading';

//create function
function Homepage() {
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate a delay of 2 seconds before setting isLoading to false
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
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
            <Product_slider/>
            <About />
            <Footer/>
            </>
          )}
        </div>
    );
}

export default Homepage;
