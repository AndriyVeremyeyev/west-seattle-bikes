import React from 'react';
import HomeSlider from './HomeSlider';
import BestSellersList from './BestSellersList';
import NewArrivalsList from './NewArrivalsList';

function HomePageController(){


  return(
    <React.Fragment>
      <h1>HomePageController</h1>
      <HomeSlider/>
      <BestSellersList/>
      <NewArrivalsList/>
    </React.Fragment>
  )
}

export default HomePageController;