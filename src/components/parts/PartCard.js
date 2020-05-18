import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  const {name, brand, price, category, imageUrl} = props;

  const imageStyle = {
    width: '150px'
  }
  const imageBlockStyle = {
    height: '180px'
  }

  return(
    <React.Fragment>
      <div>
        <div style={imageBlockStyle}>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <h4>{name}</h4>
        <p>{brand}</p>
        <p>{price.toFixed(2)}$</p>
        <p>{category}</p>
      </div>
    </React.Fragment>
  )
}

BikeCard.propTypes = {
  whenBikeClicked: PropTypes.func,
  model: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  imageUrl: PropTypes.string
}

export default BikeCard;