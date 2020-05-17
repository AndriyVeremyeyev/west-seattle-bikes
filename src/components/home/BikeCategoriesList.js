import React from 'react';
import BikeCard from '../bikes/BikeCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import PropTypes from 'prop-types';

function BikeCategoriesList(props){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])

  const {onBikeSelection} = props;

  const bikeListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '30px'
  }

  const bikes = useSelector(state => state.firestore.ordered.bikes);

  let bestSellerBikes;
  let newArrivalBikes;

  if (isLoaded(bikes)){
    bestSellerBikes = bikes.filter (x => x.bestSeller === true);
    newArrivalBikes = bikes.filter (x => x.newArrival === true);
  }

  const bikeCard = (bike) => {
    return (<BikeCard
      whenBikeClicked = {onBikeSelection}
      model = {bike.model}
      brand = {bike.brand}
      color = {bike.color}
      size = {bike.size}
      price = {bike.price}
      category = {bike.category}
      availability = {bike.availability}
      quantity = {bike.quantity}
      bestSeller = {bike.bestSeller}
      newArrival = {bike.newArrival}
      details = {bike.details}
      imageUrl = {bike.imageUrl}
      id = {bike.id}
      key = {bike.id}
    />
    )
  }

  console.log(bestSellerBikes);
  console.log(newArrivalBikes);

  if (isLoaded(bikes)){
    return(
      <React.Fragment>
        <h1>Best Sellers</h1>
        <div style={bikeListStyle}>
          {bestSellerBikes.map(bike => bikeCard(bike))}
        </div>
        <h1>New Arrival</h1>
        <div style={bikeListStyle}>
          {newArrivalBikes.map(bike => bikeCard(bike))}
        </div>
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

BikeCategoriesList.propTypes = {
  onBikeSelection: PropTypes.func,
}

export default BikeCategoriesList;