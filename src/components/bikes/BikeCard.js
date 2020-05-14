import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  return(
    <React.Fragment>
      <h1>Bike Card</h1>

    </React.Fragment>
  )
}

BikeCard.propTypes = {
  model: PropTypes.string,
  brand: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.string,
  quantity: PropTypes.number,
  bestSeller: PropTypes.bool,
  newArrival: PropTypes.bool,
  details: PropTypes.string
}

export default BikeCard;