import React from 'react';
import Logo from '../../featured/images/Logo/logo_01.jpg'
import './css/Footer.css';

function Footer(){

  return(
    <React.Fragment>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={Logo} alt=''></img>
          <p className="footer-links">
          </p>
          <p className="footer-company-name">West Seattle Bikes © 2020</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p><span>3201 Alki Ave SW</span> Seattle, Washington</p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@wsbikes.com">support@wsbikes.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            We believe that bikes make the world better. We are driven by the idea that something as simple as a bike can help you escape into the wilderness, explore your city, bring a family together, and make your everyday transportation easier. 
          </p>
          <div className="footer-icons">
            <a href="https://www.facebook.com/andriy.veremyeyev"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/AVeremyeyev"><i className="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/andriy-veremyeyev/"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/BelyyBrat"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer;