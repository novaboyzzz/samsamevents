import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import "../scss/product-slider.scss";
import Arrow from '../js/regular-arrow';

function Product_slider() {
  const [data, setData] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef();
  const blockRef = useRef();

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/products');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlide = (direction) => {
    const blockAmount = sliderRef.current.childNodes.length;
    const blockWidth = blockRef.current.offsetWidth;
    const blockMargin = sliderRef.current.offsetWidth / 20;
    
    if(direction == "right"){
      if(slideIndex+1 < blockAmount){
        setSliderPosition((prevPosition) => prevPosition + blockWidth + blockMargin);
        setSlideIndex((prevCount) => prevCount + 1);
      }
    }else if (direction == "left"){
      if(slideIndex > 0){
        setSliderPosition((prevPosition) => prevPosition - (blockWidth + blockMargin));
        setSlideIndex((prevCount) => prevCount - 1);
      }
    }
  };

  return (
    <>
      <div className="product-slider">
        <div className="product-slider__title-bar">
          <h2>populaire producten</h2>
          <div className="arrow-holder">
            <button className="arrow-holder__left" onClick={() => handleSlide('left')}>
              <Arrow color="black" />
            </button>
            <button className="arrow-holder__right" onClick={() => handleSlide('right')}>
              <Arrow color="black" />
            </button>
          </div>
        </div>
        <div className="slider-wrapper">
          <div
            className="slider-wrapper__inner"
            style={{
              transform: `translateX(-${sliderPosition}px)`, // Assuming each block has a width of 300px
            }}
            ref={sliderRef}
          >
            {data &&
              data.map((product) => (
                <div className="slider-block" key={product.id} ref={blockRef}>
                  <a href={`/product/${encodeURIComponent(product.id)}`}>
                    <div className="slider-block__image">
                      <img src={`/images/product/${product.image_1}`} alt={product.id} />
                    </div>
                    <div className="slider-block__name">{product.name}</div>
                  </a>
                  <div className="slider-block__price">{product.price}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product_slider;
