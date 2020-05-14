import React from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';

function NewBikeForm(props){

// availability: "in stock", "in retail store", "ships to retail store"
  const firebase = useFirestore();

  return(
    <React.Fragment>
      <h1>New Bike Form</h1>
    </React.Fragment>
  )
}

export default NewBikeForm;