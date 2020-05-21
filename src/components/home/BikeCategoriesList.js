import React from 'react';
import BikeCard from '../bikes/BikeCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function BikeCategoriesList(props){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])

  const {onBikeSelection} = props;

  const bikeListStyle = {
    marginTop: '50px',
    marginBottom: '50px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '30px'
  }
  const sectionStyle={
    backgroundColor: '#F5F5F5',
    height: '100px',
    paddingLeft: '20px',
    paddingTop: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
  const buttonSection={
    paddingLeft: '350px',
    paddingTop: '25px'
  }

  const bikes = useSelector(state => state.firestore.ordered.bikes);

  let bestSellerBikes;
  let newArrivalBikes;

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

  if (isLoaded(bikes)){
    bestSellerBikes = bikes.filter (x => x.bestSeller === true);
    newArrivalBikes = bikes.filter (x => x.newArrival === true);
    return(
      <React.Fragment>
        <div style={sectionStyle}>
          <div>
           <h2>Best Sellers</h2>
          </div>
          <div style={buttonSection}>
            <Link to='/bikes'>
              <button className="btn btn-default">See More</button>
            </Link>
          </div>
        </div>
        <div style={bikeListStyle}>
          {bestSellerBikes.map(bike => bikeCard(bike))}
        </div>
        <div style={sectionStyle}>
          <div>
           <h2>New Arrivals</h2>
          </div>
          <div style={buttonSection}>
            <Link to='/bikes'>
              <button className="btn btn-default">See More</button>
            </Link>
          </div>
        </div>
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