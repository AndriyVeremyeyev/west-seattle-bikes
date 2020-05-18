import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Register(props){

  let history = useHistory();

  const {onCLickGoogleSignin} = props;

  const formStyle = {
    width: "200px",
  };

  const googleStyle={
    marginTop: '20px'
  }

  function doSignUp(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: username,
        }).then(function() {
          console.log("Username added:", user.displayName);
        }).catch(function(error) {
          console.log(error);
        });
      console.log('successfully signed up!');
      history.push('/signin');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Register</h1>
      <form onSubmit={doSignUp}>
        <div className="form-group">
          <input
            style={formStyle}
            className="form-control"
            type='text'
            name='username'
            placeholder='username'
            required
          />
        </div>
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
        <button className="btn btn-info" type='submit'>Register</button>
      </form>
      {/* <div style={googleStyle} onClick = {() => onCLickGoogleSignin()}id="my-signin2"></div> */}
      <button className="btn btn-info" style={googleStyle} onClick = {() => onCLickGoogleSignin()}>Sign In with Google</button>
    </React.Fragment>
  )
}

Register.propTypes = {
  onCLickGoogleSignin: PropTypes.func
}

export default Register;