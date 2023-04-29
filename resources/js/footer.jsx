//react import
import React from "react";

//scss import
import '../scss/Footer.scss';

//component import
import instagram from '../../public/images/socials/instagram.png';
import facebook from '../../public/images/socials/facebook.png';
import linkedin from '../../public/images/socials/linkedin.png';

//create function
function Footer() {
  return(
    <>
      <div className="footer">
        <div className="socials">
          <div className="socials__follow">
            volg ons hier
          </div>
          <div className="socials__links">
            <img src={instagram}/>
            <img src={facebook}/>
            <img src={linkedin}/>
          </div>
        </div>
        <div className="contact">
          <div className="contact__left">
            <h2>
              samsamevents
            </h2>
            <h3>
              Adres: Elsa Brandströmstraat 214
            </h3>
            <h3>
              Postcode: 2037LX Haarlem
            </h3>
            <h3>
              Tel: +31 6 51857479
            </h3>
            <h3>
              E-mail: info@samsamevents.nl
            </h3>
            <h3>
              KVK: 85946710
            </h3>
          </div>
          <div className="contact__right">
            <h2>
              contact
            </h2>
            <h3>
              Elsa Brandströmstraat
            </h3>
            <h3>
              samsamevent@gmail.nl
            </h3>
            <h3>
              +31 6 51857479
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

//export function
export default Footer;
