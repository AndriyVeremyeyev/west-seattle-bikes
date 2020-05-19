import React from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import PropTypes from 'prop-types';

function Header(props){

  const {userSignInStatus, userName} = props;

  const buttonsStyle = {
    display: 'flex',
    justifyContent: 'center'
  }

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
          <Link to="/signin">
          <button type="button" className="btn btn-secondary" >My cabinet</button>
          </Link>
          <Link to="/">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={() => doSignOut()}
            >Sign Out</button>
          </Link>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
        <Link to="/register">
          <button type="button" className="btn btn-secondary">Register</button>
        </Link>
        <Link to="/signin">
          <button type="button" className="btn btn-secondary" >Sign In</button>
        </Link>
      </React.Fragment>
      )
    }
  }

  return(
    <React.Fragment>
      <div style={buttonsStyle}>
        <Link to='/'>
          <button type="button" className="btn btn-secondary">Home</button>
        </Link>
        <Link to='/bikes'>
          <button type="button" className="btn btn-secondary">Bikes</button>
        </Link>
        <Link to='/parts'>
          <button type="button" className="btn btn-secondary">Parts</button>
        </Link>
        {setVisibility()}
      </div>
      <h1>West Seattle Bikes</h1>
      <h3>Welcome, {userName}</h3>
    </React.Fragment>
  )
}

Header.propTypes = {
  userSignInStatus: PropTypes.bool,
  userName: PropTypes.string,
}

export default Header;