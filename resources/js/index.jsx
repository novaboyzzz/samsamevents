//react import
import React from 'react';
import ReactDOM from 'react-dom/client';

//component import
import Ann_bar from './ann-bar';

//scss import
import "../sass/index.scss";

//create function
function App() {
    return (
        <>
            <Ann_bar />
        </>
    );
}
export default App;

//load function
window.onload = function() {
    const rootElement = document.getElementById('root');
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  };
