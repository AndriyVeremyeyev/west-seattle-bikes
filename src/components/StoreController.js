import React, {useState} from 'react';
import Header from './header-footer/Header';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import Footer from './header-footer/Footer';

function StoreController(){

  const [bikesPageVisible, setBikesPageVisible] = useState(false);
  const [homePageVisible, setHomePageVisible] = useState(true);

  const handleToggleBikesPage = () => {
    setBikesPageVisible(true);
    setHomePageVisible(false);
  }

  const handleToggleHomePage = () => {
    setHomePageVisible(true);
    setBikesPageVisible(false);
  }

  const setVisiblePage = () => {
    if (bikesPageVisible){
      return (
        <BikesPageController/>
      )
    } else if (homePageVisible){
      return (
        <HomePageController/>
      )
    }
  }

  return(
    <React.Fragment>
      <h1>Store Controller</h1>
      <Header
        onHomeClick = {handleToggleHomePage}
        onBikesClick = {handleToggleBikesPage}
      />
      {setVisiblePage()}
      <Footer/>
    </React.Fragment>
  )
}

export default StoreController;