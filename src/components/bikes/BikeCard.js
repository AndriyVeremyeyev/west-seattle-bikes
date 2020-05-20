import React from 'react';
import PropTypes from 'prop-types'

function BikeCard(props){

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
          <button className="btn btn-secondary" onClick = {() => whenBikeClicked(id)}>View Product</button>
          </div>
          <div>
          <button className="btn btn-secondary" onClick = {() => whenAddToCardClicked(id)}>Add to Card</button>
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
  id: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string
}

export default BikeCard;