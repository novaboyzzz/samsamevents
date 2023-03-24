//react import
import React from 'react';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Storefront from './storefront';
import Category from './category';

//scss import
import "../scss/Homepage.scss";

//create function
function App() {
    return (
        <>
            <Ann_bar />
            <Nav_bar />
            <Storefront />
            <Category />
        </>
    );
}

export default App;
