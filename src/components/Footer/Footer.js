import { useState } from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaDhl,
  FaFighterJet,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

import guyInAHat from "../../assets/img/guyInAHat.jpeg";

import "./Footer.css";

const Footer = () => {
  const [photosList, setPhotosList] = useState([
    { image: guyInAHat },
    { image: guyInAHat },
    { image: guyInAHat },
    { image: guyInAHat },
    { image: guyInAHat },
  ]);

  return (
    <div className="footer_main_container">
      <h2 className="footer_title">FOLLOW US ON INSTAGRAM</h2>
      <div className="footer_container">
        <div className="pictures_container">
          {photosList.map((photo, index) => (
            <div key={index} className="picture_container">
              <img src={photo.image} alt={`image ${index}`} />
              <FaInstagram className="instagram_icon" />
            </div>
          ))}
        </div>
        <div className="usefulInfo_container">
          <div className="shop_description">
            <h2>KAIRA</h2>
            <p>
              Gravida massa volutpat aenean odio. Amet, turpis erat nullam
              fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit
              ac sit suscipit hendrerit.
            </p>
            <div className="icons_container">
              <FaInstagram className="icons instagram" />
              <FaFacebookF className="icons facebook" />
              <FaLinkedinIn className="icons linkedIn" />
              <FaTwitter className="icons twitter" />
              <FaYoutube className="icons youtube" />
            </div>
          </div>
          <div className="quick_links_container">
            <div className="links_inner_container">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/about">ABOUT</a>
                </li>
                <li>
                  <a href="*">SERVICES</a>
                </li>
                <li>
                  <a href="*">HOME</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contactUs_container">
            <div className="contact_inner_container">
              <h3>CONTACT US</h3>
              <div className="contact_email_container">
                <p>Do you have any questions or suggestions?</p>
                <p className="contact_email">kairafashionstore@gmail.com</p>
              </div>
              <div className="contact_number_container">
                <p>Do you need a support? Give us a call.</p>
                <p className="contact_phone">+61 777 777 77</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright_container">
          <div className="ship_payment_container">
            <div className="ship_container">
              <p>We ship with:</p>
              <FaDhl className="cr_icons" />
              <FaFighterJet className="cr_icons" />
            </div>
            <div className="payment_container">
              <p>Payment options:</p>
              <FaCcVisa className="pm_icons" />
              <FaCcMastercard className="pm_icons" />
              <FaCcPaypal className="pm_icons" />
            </div>
          </div>

          <div className="copyright">
            <p>
              &copy; Copyright 2024 Kaira. All rights reserved. Design by{" "}
              {<b className="boldText">TemplateJungle</b>}; Coded by{" "}
              {<b className="boldText">Azat and Abylai</b>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
