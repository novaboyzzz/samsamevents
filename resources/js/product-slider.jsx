//react import
import React, { useState, useEffect,useRef  } from "react";
import axios from 'axios';
//scss import
import "../scss/product-slider.scss";

//component import
import Arrow from '../js/regular-arrow';



//create function
function Product_slider() {
  
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/products');
      setData(response.data);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  useEffect(() => {
    fetchData(); // Fetch the category data when the component mounts
  }, []);

  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [index, setIndex] = useState(0);
  const productArray = data ? data.length : 0;
  const handleScroll = useRef(null);

  useEffect(() => {
    const div = handleScroll.current;
    const slideAmount = 32;
    div.style.transform = `translateX(${index * slideAmount}%)`;
  }, [index]);

  const handleIncrement = () => {
    if(index >= -productArray + 2){ 
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex(-productArray + 1)
    }
  };
  
  const handleDecrement = () => {
    if(index <= -1){
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0)
    }
  };
  
  const handleScrollLeft = () => {
    const now = Date.now();
    if (now - lastScrollTime > 500) {
      setLastScrollTime(now);
      handleDecrement();
    }
  };

  const handleScrollRight = () => {
    const now = Date.now();
    if (now - lastScrollTime > 500) {
      setLastScrollTime(now);
      handleIncrement();
    }
  };

  return(
    <>
    <div className="product-slider">
      <div className="product-slider__title-bar">
        <h2>populaire producten</h2>
        <div className="arrow-holder">
        <button className="arrow-holder__left" onClick={handleDecrement}>
          <Arrow color='black'/>
        </button>
        <button className="arrow-holder__right" onClick={handleIncrement}>
          <Arrow color='black'/>
        </button>
        </div>
      </div>
      <div className="slider-wrapper" onWheel={(event) => event.deltaX > 0 ? handleScrollRight() : handleScrollLeft()}>
        <div className="slider-wrapper__inner" ref={handleScroll}>
        {data && data.map(product => (
            <div className="slider-block" key={product.id}>
            <a href={`/product/${product.id}`}>
              <div className="slider-block__image">
                <img src={`/images/product/${product.image_1}`} alt={product.id}/>           
              </div>
              <div className="slider-block__name">
                {product.name}
              </div>
            </a>
              <div className="slider-block__price">
                {product.price}
              </div>
              <div className="slider-block__cart-button">
                In winkelwagen
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

//export function
export default Product_slider;
