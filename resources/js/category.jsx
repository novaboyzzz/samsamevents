//react import
import React from "react";

//scss import
import "../scss/Category.scss";

//component import
import Arrow from "../js/regular-arrow";
import stImage1 from "../../public/images/category/challengekussens.png";
import stImage2 from "../../public/images/category/springkussens.png";
import stImage3 from "../../public/images/category/stormbaan.png";

//create arrays
const CategoryNames = ['challenge kussens', 'spring kussens', 'stormbaan'];
const images = [stImage1, stImage2, stImage3];

//create function
function Category() {
  return(
    <>
      <div className="category_wrapper">
        <div className="category_wrapper__title_wrapper">
          <h1 className="category_wrapper__title_wrapper__title">
            <span className="category_wrapper__title_wrapper__title__left">
              kies een category
            </span>
            <span className="category_wrapper__title_wrapper__title__right">
              Alle categorieën
              <Arrow color="red"/>
            </span>
          </h1>

          {/* end category_wrapper__title_wrapper */}
        </div>
        <div className="category_wrapper__block_grid">
          {images.map((image, index) => (
            <div className="category_wrapper__block_grid__block" key={image}>
              <div className="category_wrapper__block_grid__block__image">
                <img src={image} alt={image} />

                {/* end category_wrapper__block_grid__block__image */}
              </div>
              <div className="category_wrapper__block_grid__block__title">
                <h3>
                  {CategoryNames[index % CategoryNames.length]}
                </h3>

                {/* end category_wrapper__block_grid__block__title */}
              </div>
              
              {/* end category_wrapper__block_grid__block */}
            </div>
          ))}

          {/* end category_wrapper__block_grid */}
        </div>

          {/* end category_wrapper */}
      </div>
    </>
  );
}

//export function
export default Category;
