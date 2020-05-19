import React, {useState} from 'react';
// import HomeSlider from './HomeSlider';
import BikeCategoriesList from './BikeCategoriesList';
import PartsList from './PartsList';
import {withFirestore} from 'react-redux-firebase';
import BikeDetails from '../bikes/BikeDetails';


function HomePageController(props){

  const [homeSelectedBike, setHomeSelectedBike] = useState(null);

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
      setHomeSelectedBike(firestoreBike);
    })
  }

  const setCurrentlyVisibleState = () => {  
  if (homeSelectedBike != null){
      return (
        <BikeDetails
          bike = {homeSelectedBike}
        />
      )
    } else {
      return (
        <React.Fragment>
          {/* <HomeSlider/> */}
          <BikeCategoriesList
            onBikeSelection = {handleChangingSelectedBike}
          />
          <PartsList/>
      </React.Fragment>
      )
    }
  }  

  const visibleState = setCurrentlyVisibleState();

  return(
    <React.Fragment>
      {visibleState}
    </React.Fragment>
  )
}

export default withFirestore(HomePageController);