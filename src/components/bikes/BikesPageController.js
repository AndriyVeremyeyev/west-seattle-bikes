import React from 'react';
import BikesList from './BikesList';
import BikeDetails from './BikeDetails';

function BikesPageController(){

  return(
    <React.Fragment>
      <h1>BikesPageController</h1>
      <BikesList/>
      <BikeDetails/>
    </React.Fragment>
  )
}

export default BikesPageController;