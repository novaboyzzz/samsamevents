//react import
import React, { useState, useEffect } from "react";
import axios from 'axios';

//scss import
import "../scss/Category.scss";

//component import
import Arrow from "../js/regular-arrow";

//create arrays

//create function
function Category() {
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

  return (
    <>
      <div className="category-wrapper">
        <div className="title-wrapper">
          <h1 className="title">
            <span className="title__left">
              kies een category
            </span>
            <a href="/category">
              <span className="title__right">
                Alle categorieën
                <Arrow color="red" className="arrow" />
              </span>
            </a>
          </h1>
        </div>
        <div className="category-wrapper__block-grid">
          {data && data.map(category => (
            <div className="block" key={category.id}>
              <div className="block__image">
                <img src={category.img} alt={category.name} />
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
export default Category;
