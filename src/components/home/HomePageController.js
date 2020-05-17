import React, {useState} from 'react';
import HomeSlider from './HomeSlider';
import BikeCategoriesList from './BikeCategoriesList';
import {withFirestore} from 'react-redux-firebase';
import BikeDetails from '../bikes/BikeDetails';


function HomePageController(props){

  const [selectedBike, setSelectedBike] = useState(null);

  const handleChangingSelectedBike = (id) => {
    props.firestore.get({collection: 'bikes', doc: id}).then((bike) => {
      const firestoreBike = {
        model: bike.get('model'),
        brand: bike.get('brand'),
        color: bike.get('color'),
        size: bike.get('size'),
        price: bike.get('price'),
        category: bike.get('category'),
        availability: bike.get('availability'),
        quantity: bike.get('quantity'),
        bestSeller: bike.get('bestSeller'),
        newArrival: bike.get('newArrival'),
        details: bike.get('details'),
        imageUrl: bike.get('imageUrl'),
        id: bike.id
      }
      setSelectedBike(firestoreBike);
    })
  }

  console.log(selectedBike);

  const setCurrentlyVisibleState = () => {  
  if (selectedBike != null){
      return (
        <BikeDetails
          bike = {selectedBike}
        />
      )
    } else {
      return (
        <BikeCategoriesList
          onBikeSelection = {handleChangingSelectedBike}
        />
      )
    }
  }  

  const visibleState = setCurrentlyVisibleState();

  return(
    <React.Fragment>
      <HomeSlider/>
      {visibleState}
    </React.Fragment>
  )
}

export default withFirestore(HomePageController);