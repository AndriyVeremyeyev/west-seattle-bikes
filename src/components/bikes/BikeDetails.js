import React from 'react';
import PropTypes from 'prop-types';
// import FileUploader from '../test/FileUploader'
// import FileUploader2 from '../test/FileUploader2'

function BikeDetails(props){

  const{bike, onClickingEdit, onClickingDelete} = props;

  const imageStyle = {
    width: '600px'
  }
  console.log(bike);


  return(
    <React.Fragment>
      {/* <FileUploader/> */}
      {/* <FileUploader2/> */}
      <h1>Bike Details</h1>
      <img style={imageStyle} src={bike.imageUrl} alt='bike'/>
        <p>{bike.model}</p>
        <p>{bike.brand}</p>
        <p>{bike.price}$</p>
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