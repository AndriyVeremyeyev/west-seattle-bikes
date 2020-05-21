import React from 'react';
import {NavLink} from 'react-router-dom';
import firebase from '../../firebase';
import PropTypes from 'prop-types';
import './css/Header.css'

function Header(props){

  const {userSignInStatus} = props;

  function doSignOut(){
    firebase.auth().signOut().then(function(){
      console.log('Successfully signed out!');
    }).catch((error) => {
      console.log(error.message);
    })
  }

  const setVisibility = () => {
    if (userSignInStatus) {
      return (
        <React.Fragment>
          <NavLink  to="/signin">My cabinet</NavLink>
          <NavLink exact={false} onClick={() => doSignOut()} to='vasya'>Sign Out</NavLink>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        <NavLink  to="/signin">Sign In</NavLink>
      </React.Fragment>
      )
    }
  }

  return(
    <React.Fragment>
      <div className="header">
        <a href="#default" className="logo">West Seattle Bikes</a>
        <div className="header-right">
          <NavLink exact={true} to='/'>Home</NavLink>
          <NavLink to='/bikes'>Bikes</NavLink>
          <NavLink to='/parts'>Parts</NavLink>
          <NavLink to='/accessories'>Accessories</NavLink>
          <NavLink to='/news'>News</NavLink>
          {setVisibility()}
        </div>
      </div>
    </React.Fragment>
  )  
}

Header.propTypes = {
  userSignInStatus: PropTypes.bool,
  userName: PropTypes.string,
}

export default Header;