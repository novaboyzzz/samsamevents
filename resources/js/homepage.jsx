//react import
import React from 'react';
import ReactDOM from 'react-dom/client';

//component import
import Ann_bar from './ann-bar';
import Nav_bar from './nav-bar';
import Storefront from './storefront';

//scss import
import "../scss/Homepage.scss";

//create function
function App() {
    return (
        <>
            <Ann_bar />
            <Nav_bar />
            <Storefront />
        </>
    );
}

//load function
document.addEventListener('DOMContentLoaded', function () {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
});
