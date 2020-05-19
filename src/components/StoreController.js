import React from 'react';
import HomePageController from './home/HomePageController';
import BikesPageController from './bikes/BikesPageController';
import PartsPageController from './parts/PartsPageController';
import {Switch, Route} from 'react-router-dom';
import SignIn from './signin-register/SignIn';
import Register from './signin-register/Register';
import PropTypes from 'prop-types';
import {withFirestore} from 'react-redux-firebase';

function StoreController(props){

  const {googleSignin, currentUserId, userName, userEmail} = props;

  const handleAddingBikesToCart = (id) => {
    props.firestore.get({collection: 'bikes', doc: id}).then((bike) => {
      const firestoreBike = {
        name: bike.get('model'),
        brand: bike.get('brand'),
        price: bike.get('price'),
        quantity: 1,
        imageUrl: bike.get('imageUrl'),
        id: bike.id
      }
      props.firestore.collection('purchases').add(
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
            thisUserId = {currentUserId}
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
          <BikesPageController
          handleAddingBikesToCart={handleAddingBikesToCart}
          />
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
  userEmail: PropTypes.string,
  currentUserId: PropTypes.string
}

export default withFirestore(StoreController);