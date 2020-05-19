import React, {useState} from 'react';
import PartsList from './PartsList';
import NewPartForm from './NewPartForm';
import {withFirestore} from 'react-redux-firebase';
import PropTypes from 'prop-types';

function PartsPageController(props){

  const [addPartFormVisible, setAddPartFormVisible] = useState(false);

  const {handleAddingPartToCart} = props;

  const handleToggleAddPartForm = () => {
    setAddPartFormVisible(!addPartFormVisible);
  }

   const handleAddingNewPartToList = () => {
    setAddPartFormVisible(false);
  }

  const setCurrentlyVisibleState = () => {  
     if (addPartFormVisible){
      return {
        component: 
          <NewPartForm
            onNewPartCreation = {handleAddingNewPartToList}
          />,
        buttonText: "Back to parts"
      }
    }  else {
      return {
        component: <PartsList
        onAddParttoCard = {handleAddingPartToCart}
        />,
        buttonText: "Add Part"
      }
    }
  }  

  const visibleState = setCurrentlyVisibleState();

  return(
    <React.Fragment>
      <h1>PartsPageController</h1>
      <button type="button" className="btn btn-secondary" onClick={handleToggleAddPartForm}>{visibleState.buttonText}</button>
      {visibleState.component}
    </React.Fragment>
  )
}

PartsPageController.propTypes = {
  handleAddingPartToCart: PropTypes.func
}

export default withFirestore(PartsPageController);