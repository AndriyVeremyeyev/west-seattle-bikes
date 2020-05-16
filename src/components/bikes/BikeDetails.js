import React from 'react';
import PropTypes from 'prop-types';

function BikeDetails(props){

  const{bike, onClickingEdit, onClickingDelete} = props;

  const imageStyle = {
    width: '600px'
  }
  console.log(bike);


  return(
    <React.Fragment>
      <h1>Bike Details</h1>
      <img style={imageStyle} src={bike.imageUrl} alt='bike'/>
        <p>{bike.model}</p>
        <p>{bike.brand}</p>
        <p>{bike.price}$</p>
        <p>{bike.category}$</p>
        <p>{bike.availability}$</p>
        <p>{bike.quantity}$</p>
        <p>{bike.bestSeller}$</p>
        <p>{bike.newArrival}$</p>
        <p>{bike.details}$</p>
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