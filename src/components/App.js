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
      setIsSignedIn(true);
    }).catch(function(error) {
      console.log(error);
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
