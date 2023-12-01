import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Storefront from './storefront';
import Category from './category';
import About from './about_me';
import Product_slider from './product-slider';
import Footer from './footer';
import LoadingScreen from './loading';

//scss import
import "../scss/Homepage.scss";

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL below with your actual API endpoint for image data
        const response = await axios.post('/api/images/banner');
        setImageData(response.data);
      } catch (error) {
        console.error(error); // Handle any errors
      }finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Ann_bar />
          <Nav_bar />
          <Storefront imageData={imageData} />
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
