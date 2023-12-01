
//react import
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

//scss import
import "../scss/product-body.scss";

//component import

//create arrays

//create function
function Product_body() {

  const [data, setData] = useState();
  const [ImgSrc, setImgSrc] = useState();

  const fetchData = async () => {
    try {
      const productId = window.location.pathname.split('/').pop();
      const response = await axios.post(`/api/products/${productId}`);
      setData(response.data);
      
      setImgSrc('/images/product/'+response.data.image_1);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  useEffect(() => {
    fetchData(); // Fetch the category data when the component mounts
    
  }, []);

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
  return (
    <>
      <div className="product-wrapper">
        <div className="product-wrapper__left">
          <>
            {data && (
              <div className="product-main-view">
                <img src={ImgSrc} alt={data.name} />
              </div>
            )}
            {data && (
              <div className="product-other-views">
                <img src={`/images/product/${data.image_1}`} alt={data.name} onClick={MakeView} />
                {data.image_2 && (
                  <img src={`/images/product/${data.image_2}`} alt={data.name} onClick={MakeView} />
                )}
                {data.image_3 && (
                  <img src={`/images/product/${data.image_3}`} alt={data.name} onClick={MakeView} />
                )}
                {data.image_4 && (
                  <img src={`/images/product/${data.image_4}`} alt={data.name} onClick={MakeView} />
                )}
                {data.image_5 && (
                  <img src={`/images/product/${data.image_5}`} alt={data.name} onClick={MakeView} />
                )}


              </div>
            )}
          </>
        </div>
        <div className="product-wrapper__right">
          <>
            {data && (
              <div className="title-bar">
                {data.name}
              </div>
            )}
            {data && (
              <div className="price-bar">
                Price: ${data.price}
              </div>
            )}

            {data && (
              <div className="description-bar">
                {data.description}
              </div>
            )}
            
          </>
        </div>
      </div >
    </>
  );
}

//export function
export default Product_body;
