import React from "react";
import firebase from "firebase/app";
import PropTypes from 'prop-types';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import PurchaseCard from './PurchaseCard';

function Signin(props){

  const auth = firebase.auth();

  const {handleRemoveBikeFromCart, onCLickGoogleSignin, thisUserId, thisUserName, thisUserEmail} = props;

  useFirestoreConnect([
    {collection: 'purchases', where: ['owner', '==', thisUserId] }
  ])

  const purchases = useSelector(state => state.firestore.ordered.purchases);
  
  const formStyle = {
    width: "200px",
  };
  const googleStyle={
    marginTop: '20px'
  }

  const purchaseCard = (purchase) => {
    return (<PurchaseCard
      onCLickRemove = {handleRemoveBikeFromCart}
      name = {purchase.name}
      brand = {purchase.brand}
      price = {purchase.price}
      quantity = {purchase.quantity}
      imageUrl = {purchase.imageUrl}
      id = {purchase.id}
      key = {purchase.id}
    />
    )
  }

  function doSignIn(event){
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
    }).catch((error) => {
      console.log(error.message);
    });
  }

  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>Sign In</h1>
        <form onSubmit={doSignIn}>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='text'
              name='email'
              placeholder='email'
              required 
            />
          </div>
          <div className="form-group">
            <input
              style={formStyle}
              className="form-control"
              type='password'
              name='password'
              placeholder='password'
              required 
            />
          </div>
          <button className="btn btn-info" type='submit'>Sign in</button>
        </form>
        <div style={googleStyle} onClick = {() => onCLickGoogleSignin()}id="my-signin2"></div>
        <button className="btn btn-info" style={googleStyle} onClick = {() => onCLickGoogleSignin()}>Sign in with Google</button>
      </React.Fragment>
    )
  } else if (isLoaded(purchases)) {
      return (
        <React.Fragment>
          <h3>User Information:</h3>
          <p>Name: {thisUserName}</p>
          <p>E-mail: {thisUserEmail}</p>
          <div style={googleStyle}>
            <h4>Shopping Cart:</h4>
            {purchases.map(purchase => purchaseCard(purchase))}
          </div>
        </React.Fragment>
      )
  } else {
    return (
      <p>Is loading ...</p>
    )
  } 
}

Signin.propTypes = {
  handleRemoveBikeFromCart: PropTypes.func,
  onCLickGoogleSignin: PropTypes.func,
  thisUserId: PropTypes.string,
  thisUserEmail: PropTypes.string,
  thisUserName: PropTypes.string
}


export default Signin;