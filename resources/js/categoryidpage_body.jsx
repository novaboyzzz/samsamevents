
//react import
import React, { useState, useEffect } from "react";
import axios from 'axios';
//scss import
import "../scss/Category-body.scss";


//create function
function Category_body() {
  
  const [prodData, setProdData] = useState();
  const [catData, setCatData] = useState();
  const categoryId = window.location.pathname.split('/').pop();

  const fetchData = async () => {
    try {
      const prodResponse = await axios.post('/api/products');
      const catResponse = await axios.post('/api/categories');
      const filteredProdData = prodResponse.data.filter(item => item.category_id == categoryId);
      const filteredCatData = catResponse.data.filter(item => item.id == categoryId); // Corrected variable name
      console.log(filteredProdData);
      console.log(filteredCatData);
      setProdData(filteredProdData);
      setCatData(filteredCatData);
    } catch (error) {
      console.error(error); // Handle any errors
    }
  };
  useEffect(() => {
    fetchData(); // Fetch the category data when the component mounts
  }, []);

  return(
    <>
      <div className="category-body">
        <div className="category-body__title">
        {catData && catData.map(cat => (
          <h3>
            Alle {cat.name}:
          </h3>
        ))}
        </div>
        <div className="category-body__main">
        {prodData && prodData.map(product => (
          <div className="block" key={product.id}>
            <div className="block__image">
              <img src={`/images/product/${product.image_1}`} alt={product.name}/>
            </div>
            <div className="block__title">
              <h3>{product.name}</h3>
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
