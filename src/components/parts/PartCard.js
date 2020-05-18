import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  const {name, brand, price, details, id, imageUrl} = props;

  const imageStyle = {
    width: '250px'
  }
  const imageBlockStyle = {
    height: '160px'
  }

  return(
    <React.Fragment>
      <div>
        <div style={imageBlockStyle}>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <h3>{name}</h3>
        <p>{brand}</p>
        <p>{price.toFixed(2)}$</p>
        <p>{details}</p>
      </div>
    </React.Fragment>
  )
}

BikeCard.propTypes = {
  whenBikeClicked: PropTypes.func,
  model: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  details: PropTypes.string,
  imageUrl: PropTypes.string
}

export default BikeCard;