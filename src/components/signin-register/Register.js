import React from 'react';
import firebase from 'firebase/app';
import { useHistory } from 'react-router-dom';

function Register(props){

  let history = useHistory();

  const formStyle = {
    width: "200px",
  };

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
    </React.Fragment>
  )
}

export default Register;