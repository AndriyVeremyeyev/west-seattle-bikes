// import React, {useState} from 'react';
import React from 'react';
import Header from './header-footer/Header';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import Footer from './header-footer/Footer';
import {Switch, Route} from 'react-router-dom';

function StoreController(){

  // const [bikesPageVisible, setBikesPageVisible] = useState(false);
  // const [homePageVisible, setHomePageVisible] = useState(true);

  // const handleToggleBikesPage = () => {
  //   setBikesPageVisible(true);
  //   setHomePageVisible(false);
  // }

  // const handleToggleHomePage = () => {
  //   setHomePageVisible(true);
  //   setBikesPageVisible(false);
  // }

  // const setVisiblePage = () => {
  //   if (bikesPageVisible){
  //     return (
  //       <BikesPageController/>
  //     )
  //   } else if (homePageVisible){
  //     return (
  //       <HomePageController/>
  //     )
  //   }
  // }

  // return(
  //   <React.Fragment>
  //     <Header
  //       onHomeClick = {handleToggleHomePage}
  //       onBikesClick = {handleToggleBikesPage}
  //     />
  //     {setVisiblePage()}
  //     <Footer/>
  //   </React.Fragment>
  // )

  return(
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/bikes">
          <BikesPageController/>
        </Route>
        <Route path="/">
          <HomePageController/>
        </Route>
        {/* <Route path="/" component={HomePageController}/>
        <Route path="/bikes" component={BikesPageController}/> */}
      </Switch>
      <Footer/>
    </React.Fragment>
  )
}

export default StoreController;