import React from 'react';
import './Footer.css'


const Footer = () => {
  return (
    <footer>
      <div className="container-fluid customFooter">
        <div className="row">

          <div className="col">
            <h5>Contact Us</h5>
            <address>
              Plot 55 ABCD & 56 D, Kandivali Industrial Estate,
              Charkop, Kandivali (W), Mumbai – 400 067.
           
              <i className="fa-solid fa-envelope"></i>{" "}
              customercare@biryanihouse.in
           
            
              <i className="fa-solid fa-headset"></i>{" "}
              8080801984
            </address>
          </div>

          <div className="col verticalLine">

          <h5>Quick Links</h5>
            <a href="#" className="customNavLink">
              Home
            </a>
           
            <a href="#" className="customNavLink"> About Us </a>
            
            <a href="#" className="customNavLink">Contact Us </a>
          </div>

          <div className="col verticalLine">
            <h5>Others</h5>
           
            <a href="#" className="customNavLink">Artist Collaboration</a>
           
            <a href="#" className="customNavLink">Store Locator</a>
          
            <a href="#" className="customNavLink">Legal</a>
           
            <a href="#" className="customNavLink">Nutritional Info</a>
            
            <a href="#" className="customNavLink">Careers</a>
          
            <a href="#" className="customNavLink">Blogs</a>
          </div>

          <div className="col verticalLine">
            <h5>Follow Us</h5>
           
            <a href="#" className="customNavLink">Instagram</a>
           
            <a href="#" className="customNavLink">Facebook</a>
      
            <a href="#" className="customNavLink">WhatsApp</a>
          </div>

        </div>

        <div className="container d-flex justify-content-center mt-4">

          <div className="socialIcons">
            <a href="#" className="socialIcon">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>

          <div className="socialIcons">
            <a href="#" className="socialIcon">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div></div>
      </div>
    </footer>
  );
};

export default Footer;