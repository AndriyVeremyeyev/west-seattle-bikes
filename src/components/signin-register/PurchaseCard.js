import React from 'react';
import PropTypes from 'prop-types'

function PurchaseCard(props){

  const {name, brand, price, quantity, imageUrl} = props;

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
        <p>Quantity: {quantity}pc</p>
      </div>
    </React.Fragment>
  )
}

PurchaseCard.propTypes = {
  whenAddToCardClicked: PropTypes.func,
  whenBikeClicked: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  imageUrl: PropTypes.string
}

export default PurchaseCard;