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
  const [currentUserId, setCurrentUserId] = useState(null);

  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
      setIsSignedIn(true);
      setCurrentUserId(user.uid);
    } else {
      setIsSignedIn(false);
    }
  });

  const googleSignin = () => {
    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      // let user = result.user;
      setIsSignedIn(true);
      // ...
    }).catch(function(error) {
      console.log(error);
      // Handle Errors here.
      // let errorCode = error.code;
      // let errorMessage = error.message;
      // The email of the user's account used.
      // let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // let credential = error.credential;
      // ...
    });
  }

  return (
    <div className='container'>
      <Router>
        <Header
          userSignInStatus={isSignedIn} 
          userName={userName}
        />
        <StoreController 
          googleSignin={googleSignin}
          currentUserId={currentUserId} 
          userSignInStatus={isSignedIn} 
          userName={userName} 
          userEmail={userEmail}
        />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
