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

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });
  return (
    <div className='container'>
      <Router>
        <Header userSignInStatus={isSignedIn} userName={userName}/>
        <StoreController userSignInStatus={isSignedIn} userName={userName} userEmail={userEmail}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
