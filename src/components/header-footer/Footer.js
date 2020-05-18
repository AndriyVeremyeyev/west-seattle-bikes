import React from 'react';
import './css/Footer.css';

function Footer(){

  return(
    <React.Fragment>
      {/* <div className='footer'>
        <a href="https://www.facebook.com/andriy.veremyeyev" className="fa fa-facebook">{" "}</a>
        <a href="https://twitter.com/AVeremyeyev" className="fa fa-twitter">{" "}</a>
        <a href="https://www.linkedin.com/in/andriy-veremyeyev/" className="fa fa-linkedin">{" "}</a>
        <a href="https://www.instagram.com/veremyeyev/" className="fa fa-instagram">{" "}</a>
        <a href="https://www.youtube.com/channel/UCJmOG4W736XzfxSd9YOc3vw?view_as=subscriber" className="fa fa-youtube">{" "}</a>
      </div>
      <h1>Footer</h1> */}
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>Company<span>logo</span></h3>
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
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
            <a href="#"><i className="fa fa-github"></i></a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer;