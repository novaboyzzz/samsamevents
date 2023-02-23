//react import
import React, { useRef, useEffect, useState } from 'react'; 

//scss import
import '../scss/Nav_bar.scss';

//component import
import myImage from '../../public/images/logo.png';
import NavBarArrow from './Nav_bar-arrow';

//create function
function Nav_bar() {

    //change with scroll
    const myRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if(window.scrollY > 5){
                    myRef.current.style.top = '0px';
            }else{
                myRef.current.style.top = '2.4rem';
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
            <header ref={myRef} className="nav-bar">
                <ul className='nav-bar__list'>
                    <li className='nav-bar__list__item'>
                        <h3>
                            shop
                        </h3>
                        <div className='arrow'>
                            <NavBarArrow /> 
                        </div>
                        <div className='dropDown'>
                            <div className='dropDown__item'>
                                <h3>
                                    <a href=''>
                                        challengekussens
                                    </a>
                                </h3>
                            </div>
                            <div className='dropDown__item'>
                                <h3>
                                    <a href=''>
                                        springkussens
                                    </a>
                                </h3>
                            </div>
                            <div className='dropDown__item'>
                                <h3>
                                    <a href=''>
                                        stormbanen
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li className='nav-bar__list__item'>
                        <h3>
                            <a href=''>
                                about
                            </a>
                        </h3>
                    </li>
                    <li className='nav-bar__list__item'>
                        <h3>
                            <a href=''>
                                contact
                            </a>
                        </h3>
                    </li>
                </ul>
                <img src={myImage} alt="samsamevents" className='nav-bar__logo'/>
            </header>
        </>
    );
}

//export function
export default Nav_bar;