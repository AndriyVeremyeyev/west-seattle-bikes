import React from 'react';
import BikeCard from './BikeCard';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function BikesList(props){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])

  const {onBikeSelection} = props;

  const bikeListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }

  const bikes = useSelector(state => state.firestore.ordered.bikes);

  if (isLoaded(bikes)){
    return(
      <React.Fragment>
        <div style={bikeListStyle}>
          {bikes.map((bike) => {
            return <BikeCard
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
          })}
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

BikesList.propTypes = {
  onBikeSelection: PropTypes.func,
}


export default BikesList;