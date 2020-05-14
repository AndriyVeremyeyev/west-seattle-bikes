import React from 'react';
import BikeCard from './BikeCard';
// import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function BikesList(){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])

  const bikes = useSelector(state => state.firestore.ordered.bikes);

  if (isLoaded(bikes)){
    return(
      <React.Fragment>
        <h1>Bikes List</h1>
        {bikes.map((bike) => {
          return <BikeCard
            model = {bike.model}
            brand = {bike.brand}
            color = {bike.color}
            size = {bike.size}
            price = {bike.price}
            availability = {bike.availability}
            quantity = {bike.quantity}
            bestSeller = {bike.bestSeller}
            newArrival = {bike.newArrival}
            details = {bike.details}
            id = {bike.id}
            key = {bike.id}
          />
        })}
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

export default BikesList;