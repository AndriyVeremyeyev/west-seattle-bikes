import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

  // const {whenBikeClicked, model, brand, color, size, price, quantity, details, id, imageUrl} = props;
  const {whenBikeClicked, whenAddToCardClicked, model, brand, price, id, imageUrl} = props;

  const imageStyle = {
    width: '250px'
  }
  const imageBlockStyle = {
    height: '160px'
  }
  const buttonsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }

  return(
    <React.Fragment>
      <div>
        <div style={imageBlockStyle}>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <h3>{model}</h3>
        <p>{brand}</p>
        <p>{price.toFixed(2)}$</p>
        <div style={buttonsStyle}>
          <div>
          <button onClick = {() => whenBikeClicked(id)}>View Product</button>
          </div>
          <div>
          <button onClick = {() => whenAddToCardClicked(id)}>Add to Card</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

BikeCard.propTypes = {
  whenAddToCardClicked: PropTypes.func,
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