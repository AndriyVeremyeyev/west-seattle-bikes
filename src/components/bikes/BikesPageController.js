import React, {useState} from 'react';
import BikesList from './BikesList';
import BikeDetails from './BikeDetails';
import NewBikeForm from './NewBikeForm';
import EditBikeForm from './EditBikeForm';
import {withFirestore} from 'react-redux-firebase';

function BikesPageController(){

  const [addBikeFormVisible, setAddBikeFormVisible] = useState(false); 
  const [editBikeFormVisible, setEditBikeFormVisible] = useState(false);
  const [selectedBike, setSelectedBike] = useState(null);

  const handleToggleAddBikeForm = () => {
    if (selectedBike != null){
      setAddBikeFormVisible(false);
      setEditBikeFormVisible(false);
      setSelectedBike(null);
    } else {
      setAddBikeFormVisible(!addBikeFormVisible);
    }
  }

  const handleToggleEditBikeForm = () => {
    setEditBikeFormVisible(true);
    setAddBikeFormVisible(false);
  }

  const handleAddingNewBikeToList = () => {
    setAddBikeFormVisible(false);
  }

  const handleEditingBikeInList = () => {
    setAddBikeFormVisible(false);
    setEditBikeFormVisible(false);
    setSelectedBike(null);
  }

  const handleChangingSelectedBike = (id) => {
    props.firestore.get({collection: 'bikes', doc: id}).then((bike) => {
      const firestoreBike = {
        model: bike.get('model'),
        brand: bike.get('brand'),
        color: bike.get('color'),
        size: bike.get('size'),
        price: bike.get('price'),
        availability: bike.get('availability'),
        quantity: bike.get('quantity'),
        bestSeller: bike.get('bestSeller'),
        newArrival: bike.get('newArrival'),
        details: bike.get('details'),
        id: bike.id
      }
      setSelectedBike(firestoreBike);
      setAddBikeFormVisible(false);
    })
  }

  const handleDeletingBike = (id) => {
    props.firestore.delete({collection: 'bikes', doc: id})
    setSelectedBike(null);
    setAddBikeFormVisible(false);
  }

  const setCurrentlyVisibleState = () => {  
    if (editBikeFormVisible){    
      return {
        component: 
          <EditBikeForm 
            bike = {selectedBike}
            onEditBike = {handleEditingBikeInList}
          />,
        buttonText: "Back to bikes"}     
    } else if (selectedBike != null){
      return {
        component: 
          <BikeDetails
            bike = {selectedBike}
            onClickingDelete = {handleDeletingBike}
            onClickingEdit = {handleToggleEditBikeForm}
          />,
        buttonText: "Back to bikes"
      }
    } else if (addBikeFormVisible){
      return {
        component: 
          <NewBikeForm
            onNewBikeCreation = {handleAddingNewBikeToList}
          />,
        buttonText: "Back to bikes"
      }
    }  else {
      return {
        component: 
        <BikesList
          onBikeSelection = {handleChangingSelectedBike}
        />,
        buttonText: "Add Bike"
      }
    }
  }  

  const visibleState = setCurrentlyVisibleState();

  return(
    <React.Fragment>
      <h1>BikesPageController</h1>
      <button onClick={handleToggleAddBikeForm}>{visibleState.buttonText}</button>
      {visibleState.component}
    </React.Fragment>
  )
}

export default withFirestore(BikesPageController);