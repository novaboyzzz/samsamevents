//react import
import React from 'react';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Category_body from './categorypage_body';
import Footer from './footer';

//scss import

//create function
function Categorypage() {
  return(
    <>
    <Ann_bar />
    <Nav_bar />
    <Category_body />
    <Footer />
    </>
  );
}

export default Categorypage;
