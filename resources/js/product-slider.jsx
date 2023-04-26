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
      console.log(index)
    } else {
      setIndex(-productArray + 1)
    }
  };
  
  const handleDecrement = () => {
    if(index <= -1){
      setIndex((prevIndex) => prevIndex + 1);
      console.log(index)
    } else {
      setIndex(0)
    }
  };

  return(
    <>
    <div className="product_slider">
      <div className="product_slider__title-bar">
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
      <div className="product_slider__wrapper">
        <div className="product_slider__wrapper__inner" ref={handleScroll}>
          {products.map((product) => (
            <div className="product_slider__wrapper__inner__block" key={product}>
              <div className="product_slider__wrapper__inner__block__image">
                <img src={product[2]} alt={product[0]}/>           
              </div>
              <div className="product_slider__wrapper__inner__block__name">
                {product[0]}
              </div>
              <div className="product_slider__wrapper__inner__block__price">
                {product[1]}
              </div>
              <div className="product_slider__wrapper__inner__block__cartBtn">
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
