import React from 'react';
import PropTypes from 'prop-types';

function BikeDetails(props){

  const{bike, onClickingEdit, onClickingDelete} = props;

  const imageStyle = {
    width: '600px'
  }
  const textStyle = {
    fontSize: '16px'
  }
  console.log(bike);


  return(
    <React.Fragment>
      <h1>Bike Details</h1>
      <img style={imageStyle} src={bike.imageUrl} alt='bike'/>
      <div style={textStyle}>
        <p>{bike.model}</p>
          <p>{bike.brand}</p>
          <p>{bike.price}</p>
          <p>Size: {bike.size}</p>
          <p>Color: {bike.color}</p>
          <p>Category: {bike.category}</p>
          <p>Availability: {bike.availability}</p>
          <p>Quantity {bike.quantity}pc</p>
          <p>{bike.details}$</p>
      </div>
      <button className="btn btn-info" onClick = {() => onClickingEdit()}>Edit Bike</button>
      <button className="btn btn-info"  onClick = {() => onClickingDelete(bike.id)}>Remove Bike</button>
    </React.Fragment>
  )
}


BikeDetails.propTypes = {
  bike: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}


export default BikeDetails;