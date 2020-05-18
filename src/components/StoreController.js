import React from 'react';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import PartsPageController from './parts/PartsPageController';
import {Switch, Route} from 'react-router-dom';
import SignIn from './signin-register/SignIn';
import Register from './signin-register/Register';
import PropTypes from 'prop-types';

function StoreController(props){

  const {googleSignin} = props;

  return(
    <React.Fragment>
      <Switch>
        <Route path="/signin">
          <SignIn
            onCLickGoogleSignin = {googleSignin}
          />
        </Route>
        <Route path="/register">
          <Register
            onCLickGoogleSignin = {googleSignin}
          />
        </Route>
        <Route path="/bikes">
          <BikesPageController/>
        </Route>
        <Route path="/parts">
          <PartsPageController/>
        </Route>
        <Route path="/">
          <HomePageController/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

StoreController.propTypes = {
  googleSignin: PropTypes.func
}

export default StoreController;