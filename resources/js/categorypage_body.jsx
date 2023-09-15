
//react import
import React, { useState, useEffect } from "react";
import axios from 'axios';
//scss import
import "../scss/Category-body.scss";


//create function
function Category_body() {
  
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.post('/api/categories');
      setData(response.data);
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
        <div className="category-body__main">
        {data && data.map(category => (
            <div className="block" key={category.id}>
              <div className="block__image">
                <img src={`/images/category/${category.img}`} alt={category.name}/>
              </div>
              <div className="block__title">
                <h3>{category.name}</h3>
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
