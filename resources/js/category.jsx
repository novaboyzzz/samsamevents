//react import
import React, { useEffect, useState } from "react";

//scss import
import "../scss/Category.scss";

//component import
import Arrow from "../js/regular-arrow";
import stImage1 from "../../public/images/category/challengekussens.png";
import stImage2 from "../../public/images/category/springkussens.png";
import stImage3 from "../../public/images/category/stormbaan.png";

//create arrays
const CategoryNames = [
  'challenge kussens',
  'spring kussens',
  'stormbaan',
];

const images = [
  stImage1,
  stImage2,
  stImage3,
];

//create function
function Category() {
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

  return(
    <>
      <div className="category-wrapper">
        <div className="title-wrapper">
          <h1 className="title">
            <span className="title__left">
              kies je categorie:
            </span>
            <a href="/category">
              <span className="title__right">
                Alle categorieën
                <Arrow color="red" className="arrow"/>
              </span>
            </a>
          </h1>
        </div>
        <div className="category-wrapper__block-grid">
          {viewportWidth < 768 ? (
            images.map((image, index) => (
              <div className="block" key={image}>
                <div className="block__title">
                  <h3>
                    {CategoryNames[index % CategoryNames.length]}
                  </h3>
                </div>
                <div className="block__image">
                  <img src={image} alt={image} />
                </div>
              </div>
            ))
          ) : 
            images.map((image, index) => (
              <div className="block" key={image}>
                <div className="block__image">
                  <img src={image} alt={image} />
                </div>
                <div className="block__title">
                  <h3>
                    {CategoryNames[index % CategoryNames.length]}
                  </h3>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

//export function
export default Category;
