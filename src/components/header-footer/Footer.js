import React from 'react';
import './Footer.css';

function Footer(){

  return(
    <React.Fragment>
      <h1>Footer</h1>
      <a href="https://www.facebook.com/andriy.veremyeyev" className="fa fa-facebook">{" "}</a>
      <a href="https://twitter.com/AVeremyeyev" className="fa fa-twitter">{" "}</a>
      <a href="https://www.linkedin.com/in/andriy-veremyeyev/" className="fa fa-linkedin">{" "}</a>
      <a href="https://www.instagram.com/veremyeyev/" className="fa fa-instagram">{" "}</a>
      <a href="https://www.youtube.com/channel/UCJmOG4W736XzfxSd9YOc3vw?view_as=subscriber" className="fa fa-youtube">{" "}</a>
    </React.Fragment>
  )
}

export default Footer;