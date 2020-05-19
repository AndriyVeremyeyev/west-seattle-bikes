import React from 'react';
import PropTypes from 'prop-types'

function PurchaseCard(props){

  const {name, brand, price, quantity, imageUrl} = props;

  const imageStyle = {
    height: '150px'
  }
  const itemStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  }

  return(
    <React.Fragment>
      <div style={itemStyle}>
        <div>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <div>
          <h4>{name}</h4>
          <p>{brand}</p>
          <p>{price.toFixed(2)}$</p>
          <p>Quantity: {quantity}pc</p>
        </div>
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