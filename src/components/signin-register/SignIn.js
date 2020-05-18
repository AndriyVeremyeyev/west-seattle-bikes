import React from "react";
import firebase from "firebase/app";
import { isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

function Signin(){

  const auth = firebase.auth()
  
  const formStyle = {
    width: "200px",
  };

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='text'
              name='signinEmail'
              placeholder='email' 
            />
          </div>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='password'
              name='signinPassword'
              placeholder='Password' 
            />
          </div>
          <button className="btn btn-info" type='submit'>Sign in</button>
        </form>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>You are already signed in!</h1>
        <Link to="/">Home</Link>
      </React.Fragment>
    )
  }
}

export default Signin;