import React from 'react';
import PropTypes from 'prop-types'

function PartCard(props){

  const {name, whenAddToCardClicked, brand, id, price, category, imageUrl} = props;

  const imageStyle = {
    width: '150px'
  }
  const imageBlockStyle = {
    height: '180px'
  }
  const nameStyle={
    height: '45px',
  }

  return(
    <React.Fragment>
      <div>
        <div style={imageBlockStyle}>
          <img style={imageStyle} src={imageUrl} alt=""/>
        </div>
        <div style={nameStyle}>
          <h4>{name}</h4>
        </div>
        <p>{brand}</p>
        <p>{price.toFixed(2)}$</p>
        <p>{category}</p>
        <button className="btn btn-secondary" onClick = {() => whenAddToCardClicked(id)}>Add to Card</button>
      </div>
    </React.Fragment>
  )
}

PartCard.propTypes = {
  whenAddToCardClicked: PropTypes.func,
  model: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,
  imageUrl: PropTypes.string,
  id: PropTypes.string
}

export default PartCard;