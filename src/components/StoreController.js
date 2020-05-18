import React from 'react';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import PartsPageController from './parts/PartsPageController';
import {Switch, Route} from 'react-router-dom';
import SignIn from './signin-register/SignIn';
import Register from './signin-register/Register';
import PropTypes from 'prop-types';
// import firebase from '../../firebase';
import {withFirestore} from 'react-redux-firebase';

function StoreController(props){

  const {googleSignin, userName, userEmail} = props;

  const auth = props.firebase.auth();
  const currentUserId = auth.currentUser.uid;

  const handleAddingItemsToCart = (id, event) => {
    event.preventDefault();

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
      firestore.collection('purchases').add(
        {
          owner: currentUserId,
          purchase: firestoreBike
        }
      )
    })
  }


  return(
    <React.Fragment>
      <Switch>
        <Route path="/signin">
          <SignIn
            onCLickGoogleSignin = {googleSignin}
            thisUserName={userName}
            thisUserEmail={userEmail}
          />
        </Route>
        <Route path="/register">
          <Register
            onCLickGoogleSignin = {googleSignin}
          />
        </Route>
        <Route path="/bikes">
          <BikesPageController/>
        </Route>
        <Route path="/parts">
          <PartsPageController/>
        </Route>
        <Route path="/">
          <HomePageController/>
        </Route>
      </Switch>
    </React.Fragment>
  )
}

StoreController.propTypes = {
  googleSignin: PropTypes.func,
  userName: PropTypes.string,
  userEmail: PropTypes.string
}

export default withFireStore(StoreController);