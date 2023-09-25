
//react import
import React, { useState, useEffect  } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

//scss import
import "../scss/product-body.scss";

//component import

//create arrays

//create function
function Product_body() {
  
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const productId = window.location.pathname.split('/').pop();
      const response = await axios.post('/api/products/${product_id}');
      setData(response.data);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  useEffect(() => {
    fetchData(); // Fetch the category data when the component mounts
  }, []);

  // const { name } = useParams();
  // const [imgSrc, setImgSrc] = useState(productArray[0]);

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
        {data && data.map(product => (
          <>
            <div className="product-main-view">
              <img src={product.image_1} alt={product.name} />
            </div>
            <div className="product-other-views">
              <img src={product.image_1} alt={product.name} onClick={MakeView} />
              <img src={product.image_2} alt={product.name} onClick={MakeView} />
              <img src={product.image_3} alt={product.name} onClick={MakeView} />
              <img src={product.image_4} alt={product.name} onClick={MakeView} />
              <img src={product.image_5} alt={product.name} onClick={MakeView} />
            </div>
          </>
        ))}
      </div>
      <div className="product-wrapper__right">
        {data && data.map(product => (
          <>
            <div className="title-bar">
              {product.name}
            </div>
            <div className="price-bar">
              {product.price}
            </div>
            <div className="description-bar">
              {product.description}
            </div>
            <div className="cart-button">
              in winkelwagen
            </div>
          </>
        ))}
      </div>
    </div>
    </>
  );
}

//export function
export default Product_body;
