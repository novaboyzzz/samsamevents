//react import
import React, { useState, useEffect, useRef } from "react";

//scss import
import "../scss/product-slider.scss";

//component import
import product1 from "../../public/images/products/Levend_Sjoelen.png"
import Arrow from '../js/regular-arrow';

//create arrays
const products = [
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
  ['levend sjoelen', '€' + 100 + ',-', product1],
]


//create function
function Product_slider() {
  const [lastScrollTime, setLastScrollTime] = useState(0);
  const [index, setIndex] = useState(0);
  const productArray = products.length;
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
          {products.map((product) => (
            <div className="slider-block" key={product}>
            <a href={`/product/${encodeURIComponent(product[0])}`}>
              <div className="slider-block__image">
                <img src={product[2]} alt={product[0]}/>           
              </div>
              <div className="slider-block__name">
                {product[0]}
              </div>
            </a>
              <div className="slider-block__price">
                {product[1]}
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
