
//react import
import React, {useState} from "react";
import { useParams } from 'react-router-dom';

//scss import
import "../scss/product-body.scss";

//component import
import product1 from "../../public/images/products/Levend_Sjoelen.png"
import product2 from "../../public/images/products/Levend_Sjoelen-2.png"

//create arrays
const productArray = [
  product1,
  product2,
]

//create function
function Product_body() {
  const { name } = useParams();
  const [imgSrc, setImgSrc] = useState(productArray[0]);

  const MakeView = () => {
    const target = event.target;
    const holder = target.parentNode;
    const children = holder.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.filter = "none";
    }
    target.style.filter = "opacity(50%)";
    const src = target.src;
    setImgSrc(src);
  };

  return(
    <>
      <div className="product-wrapper">
        <div className="product-wrapper__left">
          <div className="product-main-view">
            <img src={imgSrc}/>
          </div>
          <div className="product-other-views">
            {productArray.slice(0,5).map((product) => (
            <img src={product} onClick={MakeView}/>
            ))}
          </div>
        </div>
        <div className="product-wrapper__right">
          <div className="title-bar">
            { name }
          </div>
          <div className="price-bar">
            €100,-
          </div>
          <div className="description-bar">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="cart-button">
            in winkelwagen
          </div>
        </div>
      </div>
    </>
  );
}

//export function
export default Product_body;
