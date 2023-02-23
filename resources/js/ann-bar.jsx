//react import
import React, { useRef, useEffect } from 'react';

//scss import
import '../scss/Ann_bar.scss';

//create function
function Ann_bar() {

    //change with scroll
    const myRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                myRef.current.style.height = '0';
                myRef.current.style.padding = '0';
            }else{
                myRef.current.style.height = '1.3rem';
                myRef.current.style.padding = '.7rem 0';
            }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    //return the html
    return (
        <>
            <div ref={myRef} className="ann_bar">
                <h3 className="ann_bar__content">
                    het beste feest met een springkussen
                </h3>
            </div>
        </>
    );
}

export default Ann_bar;
