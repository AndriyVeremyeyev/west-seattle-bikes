import React, {useState} from 'react';
import StoreController from './StoreController';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './header-footer/Header';
import Footer from './header-footer/Footer';
import firebase from '../firebase';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("New User");
  const [userName, setUserName] = useState("New User");

  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });

  const googleSignin = () => {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  
    firebase.auth().signInWithRedirect(provider);
  }

  return (
    <div className='container'>
      <Router>
        <Header userSignInStatus={isSignedIn} userName={userName}/>
        <button onClick = {() => googleSignin()}>Google Signin</button>
        <StoreController userSignInStatus={isSignedIn} userName={userName} userEmail={userEmail}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
