//react import
import React from 'react';
import ReactDOM from 'react-dom/client';

//component import
import Ann_bar from './Ann-bar';
import Nav_bar from './Nav-bar';

//scss import
import "../scss/index.scss";

//create function
function App() {
    return (
        <>
            <Ann_bar />
            <Nav_bar />
        </>
    );
}

//load function
window.onload = function() {
    const rootElement = document.getElementById('root');
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  };
