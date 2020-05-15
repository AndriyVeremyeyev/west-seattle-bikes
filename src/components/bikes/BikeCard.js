import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  const {whenBikeClicked, model, brand, color, size, price, quantity, details, id, imageUrl} = props;

  return(
    <React.Fragment>
      <div onClick = {() => whenBikeClicked(id)}>
        <h1>Bike Card</h1>
        <img src={imageUrl}></img>
        <p>{model}</p>
        <p>{brand}</p>
        <p>{color}</p>
        <p>{size}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{details}</p>
      </div>
    </React.Fragment>
  )
}

BikeCard.propTypes = {
  whenBikeClicked: PropTypes.func,
  model: PropTypes.string,
  brand: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.string,
  quantity: PropTypes.number,
  bestSeller: PropTypes.bool,
  newArrival: PropTypes.bool,
  details: PropTypes.string,
  imageUrl: PropTypes.string
}

export default BikeCard;