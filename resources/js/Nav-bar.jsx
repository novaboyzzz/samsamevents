// React import
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
// SCSS import
import '../scss/Nav_bar.scss';

// Component import
import myImage from '../../public/images/logo.png';
import NavBarArrow from './nav_bar-arrow';

// Create arrays


// Create function
function Nav_bar() {
  // Change with scroll
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/categories');
      setData(response.data);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  useEffect(() => {
    fetchData(); // Fetch the category data when the component mounts
  }, []);
  const myRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        myRef.current.style.top = '0px';
      } else {
        myRef.current.style.top = '2.5rem';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Change with viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia('(min-width: 768px)');
      setViewportWidth(mq.matches ? window.innerWidth : 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fullPageMenu = useRef(null);

  const openMenu = () => {
    fullPageMenu.current.style.height = "100%";
  }

  const closeMenu = () => {
    fullPageMenu.current.style.height = "0";
  }
  // Return the HTML
  if (viewportWidth < 768) {
    // Render mobile view
    return (
      <>
        <header ref={myRef} className="nav-bar nav-bar--phone">
          <div className="hamburger-menu" onClick={openMenu}>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <a href="/">
            <img src={myImage} alt="samsamevents" className="logo" />
          </a>
        </header>
        <div className='full-page-menu' ref={fullPageMenu}>
          <div className='list'>
            {data && data.map((category) => (
              <div className="list__item" key={name}>
                <h3>
                  <a href="">{category.name}</a>
                </h3>
              </div>
            ))}
          </div>
          <div className='close-menu' onClick={closeMenu}></div>
        </div>
      </>
    );
  } else {
    // Render desktop view
    return (
      <>
        <header ref={myRef} className="nav-bar nav-bar--desktop">
          <ul className="item-list">
            <li className="item-list__item">
              <h3>shop</h3>
              <div className="nav-bar-arrow">
                <NavBarArrow />
              </div>
              <div className="drop-down">
                {data && data.map((category) => (
                  <div className="drop-down__item" key={category.name}>
                    <h3>
                      <a href={`/category/${encodeURIComponent(category.id)}`}>{category.name}</a>
                    </h3>
                  </div>
                ))}
              </div>
            </li>
            <li className="item-list__item">
              <h3>
                <a href="">about</a>
              </h3>
            </li>
            <li className="item-list__item">
              <h3>
                <a href="">contact</a>
              </h3>
            </li>
          </ul>
          <a href="/">
            <img src={myImage} alt="samsamevents" className="logo" />
          </a>
        </header>
      </>
    );
  }
}

export default Nav_bar;
