import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  // const {whenBikeClicked, model, brand, color, size, price, quantity, details, id, imageUrl} = props;
  const {whenBikeClicked, model, brand, price, id, imageUrl} = props;

  const imageStyle = {
    width: '300px'
  }

  return(
    <React.Fragment>
      <div onClick = {() => whenBikeClicked(id)}>
        <h1>Bike Card</h1>
        <img style={imageStyle} src={imageUrl} alt=""/>
        <p>{model}</p>
        <p>{brand}</p>
        <p>{price.toFixed(2)}$</p>
      </div>
    </React.Fragment>
  )
}

BikeCard.propTypes = {
  whenBikeClicked: PropTypes.func,
  model: PropTypes.string,
  brand: PropTypes.string,
  // color: PropTypes.string,
  // size: PropTypes.string,
  price: PropTypes.number,
  // category: PropTypes.string,
  // availability: PropTypes.string,
  // quantity: PropTypes.number,
  // bestSeller: PropTypes.bool,
  // newArrival: PropTypes.bool,
  // details: PropTypes.string,
  imageUrl: PropTypes.string
}

export default BikeCard;