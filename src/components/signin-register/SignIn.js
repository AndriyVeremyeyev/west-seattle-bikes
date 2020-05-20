import React from "react";
import firebase from "firebase/app";
import PropTypes from 'prop-types';
import {isLoaded} from 'react-redux-firebase';
import UserCabinet from './UserCabinet';

function Signin(props){

  const auth = firebase.auth();

  const {handleRemoveBikeFromCart, onCLickGoogleSignin, thisUserId, thisUserName, thisUserEmail} = props;
  
  const formStyle = {
    width: "200px",
  };
  const googleStyle={
    marginTop: '20px'
  }

  const doSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  } else if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='text'
              name='email'
              placeholder='email'
              required 
            />
          </div>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='password'
              name='password'
              placeholder='password'
              required 
            />
          </div>
          <button className="btn btn-info" type='submit'>Sign in</button>
        </form>
        <div style={googleStyle} onClick = {() => onCLickGoogleSignin()}id="my-signin2"></div>
        <button className="btn btn-info" style={googleStyle} onClick = {() => onCLickGoogleSignin()}>Sign in with Google</button>
      </React.Fragment>
    )
  } else {
    return (
      <UserCabinet
        handleRemoveBikeFromCart = {handleRemoveBikeFromCart}
        thisUserName = {thisUserName}
        thisUserEmail = {thisUserEmail}
        thisUserId = {thisUserId}
      />
    )
  }
}

Signin.propTypes = {
  handleRemoveBikeFromCart: PropTypes.func,
  onCLickGoogleSignin: PropTypes.func,
  thisUserId: PropTypes.string,
  thisUserEmail: PropTypes.string,
  thisUserName: PropTypes.string
}


export default Signin;