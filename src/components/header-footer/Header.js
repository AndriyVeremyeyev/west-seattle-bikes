import React from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import PropTypes from 'prop-types';

function Header(props){

  const {userSignInStatus, userEmail} = props;

  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log('Successfully signed out!');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  const setVisibility = () => {
    if (userSignInStatus) {
      <Link to="/">
        <button 
          type="button" 
          className="btn btn-secondary" 
          onClick={() => doSignOut()}
        >Sign Out</button>
      </Link>
    } else {
      <React.Fragment>
        <Link to="/register">
          <button type="button" className="btn btn-secondary">Register</button>
        </Link>
        <Link to="/signin">
          <button type="button" className="btn btn-secondary" >Sign In</button>
        </Link>
        <Link style={linkStyle} to="/signin">Sign In</Link>  
        <Link to="/register">Register</Link>
      </React.Fragment>
    }
  }

  return(
    <React.Fragment>
      <Link to='/'>
        <button type="button" className="btn btn-secondary">Home</button>
      </Link>
      <Link to='/bikes'>
        <button type="button" className="btn btn-secondary">Bikes</button>
      </Link>
      <Link to='/parts'>
        <button type="button" className="btn btn-secondary">Parts</button>
      </Link>
      {setVisibility}
      <h1>West Seattle Bikes</h1>
      <h1>Welcome, {userEmail}</h1>
    </React.Fragment>
  )
}

Header.propTypes = {
  userSignInStatus: PropTypes.bool,
  userEmail: PropTypes.string
}

export default Header;