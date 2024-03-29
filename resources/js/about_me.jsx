//react import
import React, { useEffect, useState } from "react";

//scss import
import "../scss/About_me.scss";

//component import
import about_Image from "../../public/images/about-image.png";

//create function
function About() {
  return (
    <>
      <div className="about-me_wrapper">
        <div className="about-me_wrapper__inner">
          <h2>
            lorem ipsum
          </h2>
          <div className="about-me_wrapper__inner__textholder">
            <img src={about_Image} width="500px" />
            <p>
              dolor sit amet consectetur adipisicing elit. Maxime ollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamquia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

//export function
export default About;
