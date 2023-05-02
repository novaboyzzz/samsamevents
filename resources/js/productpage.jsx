//react import
import React from 'react';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Product_body from './productpage_body';
import Footer from './footer';

//scss import

//create function
function Productpage() {
  return(
    <>
    <Ann_bar />
    <Nav_bar />
    <Product_body />
    <Footer />
    </>
  );
}

export default Productpage;
