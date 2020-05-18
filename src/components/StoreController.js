import React from 'react';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import PartsPageController from './parts/PartsPageController';
import {Switch, Route} from 'react-router-dom';
import SignIn from './signin-register/SignIn';
import Register from './signin-register/Register';

function StoreController(){

  return(
    <React.Fragment>
      <Switch>
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

export default StoreController;