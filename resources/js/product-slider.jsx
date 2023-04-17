//react import
import React from "react";

//scss import
import "../scss/Category.scss";

//component import

//create arrays

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
              <div className="arrow"></div>
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
