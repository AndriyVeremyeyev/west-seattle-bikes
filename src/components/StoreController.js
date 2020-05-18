import React from 'react';
import Header from './header-footer/Header';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import PartsPageController from './parts/PartsPageController';
import Footer from './header-footer/Footer';
import {Switch, Route} from 'react-router-dom';

function StoreController(){

  return(
    <React.Fragment>
      <Header/>
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
      <Footer/>
    </React.Fragment>
  )
}

export default StoreController;