// React import
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

// SCSS import
import "../scss/product-slider.scss";

// Component import
import Arrow from '../js/regular-arrow';

// Create function
function Product_slider() {
  const [slideOffset, setSlideOffset] = useState(0);
  const sliderRef = useRef(null);
  const sliderBlock = useRef(null); // Fix: Initialize with null
  let marginLeft;

  const [data, setData] = useState([]);

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

  const handleSlide = (direction, event) => {
    const slider = sliderRef.current;
    const sliderWidth = slider.offsetWidth;
    const numVisibleSlides = 1;
    const slideWidth = sliderWidth / numVisibleSlides;
    const maxOffset = (data.length - numVisibleSlides) * slideWidth + (marginLeft * (data.length - numVisibleSlides));

    if (direction === "left") {
      setSlideOffset((prevOffset) =>
        Math.max(0, prevOffset - slideWidth - marginLeft)
      );
    } else if (direction === "right") {
      setSlideOffset((prevOffset) =>
        Math.min(maxOffset, prevOffset + slideWidth + marginLeft)
      );
    } else if (direction === "scroll") {
      const scrollDirection = event.deltaX < 0 ? "left" : "right";
      if (index >= -data.length + 2) {
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        setIndex(-data.length + 1);
      }
    }
  }

  const handleDecrement = () => {
    if (index <= -1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0);
    }
  };

  const handleScrollLeft = () => {
    const now = Date.now();
    if (now - lastScrollTime > 500) {
      setLastScrollTime(now);
      handleDecrement();
    }
  };

  useEffect(() => {
    const element = sliderBlock.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      marginLeft = computedStyle.getPropertyValue("margin-left");
      marginLeft = parseFloat(marginLeft);
      const slider = sliderRef.current;
      slider.style.transition = "transform .8s";
      slider.style.transform = `translateX(-${slideOffset}px)`;
    }
  }, [slideOffset]);

  return (
    <>
      <div className="product-slider">
        <div className="product-slider__title-bar">
          <h2>populaire producten</h2>
          <div className="arrow-holder">
            <button
              className="arrow-holder__left"
              onClick={() => handleSlide("left")}
            >
              <Arrow color="black" />
            </button>
            <button
              className="arrow-holder__right"
              onClick={() => handleSlide("right")}
            >
              <Arrow color="black" />
            </button>
          </div>
        </div>
        <div
          className="slider-wrapper"
          ref={sliderRef}
          onWheel={(e) => handleSlide("scroll", e)}
        >
          <div className="slider-wrapper__inner">
            {data && data.map((product, idx) => (
              <div className="slider-block" key={product} ref={sliderBlock}>
                <a href={`/product/${encodeURIComponent(product.id)}`}>
                  <div className="slider-block__image">
                    <img src={`/images/product/${product.image_1}`} alt={product.id} />
                  </div>
                  <div className="slider-block__name">
                    {product.name}
                  </div>
                </a>
                <div className="slider-block__price">
                  {product.price}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Export function
export default Product_slider;