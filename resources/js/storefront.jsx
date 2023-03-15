//react import
import React from "react";

//scss import
import Slider from "react-slick";
import "../scss/Storefront.scss";

//component import
import stImage1 from "../../public/images/storefront_1.png";
import stImage2 from "../../public/images/storefront_2.png";
import stImage3 from "../../public/images/storefront_3.png";
import stImage4 from "../../public/images/storefront_4.png";
const images = [stImage1, stImage2, stImage3, stImage4];

//create function
function Storefront() {
  //slider settings
  const settings = {
    autoplaySpeed: 6000,
    slidesToScroll: 1,
    centermode: true,
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 2000,
  };
  //create html
  return (
    <div className="storefront_wrapper">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image}>
            <img src={image} alt="samsamevents"/>
          </div>
        ))}
      </Slider>
      <div className="storefront_wrapper__inside">
        <h1>
            samsamevents
        </h1>
      </div>
    </div>
  );
}

//export function
export default Storefront;
