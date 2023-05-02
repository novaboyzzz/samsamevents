
//react import
import React from "react";

//scss import
import "../scss/Category-body.scss";

//component import
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
function Category_body() {
  return(
    <>
      <div className="category-body">
        <div className="category-body__main">
            {images.map((image, index) => (
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
            ))}
        </div>
      </div>
    </>
  );
}

//export function
export default Category_body;
