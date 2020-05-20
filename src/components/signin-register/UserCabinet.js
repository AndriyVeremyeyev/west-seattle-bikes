import React from 'react';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import PurchaseCard from './PurchaseCard';

function UserCabinet(props){

  const {handleRemoveBikeFromCart, thisUserId, thisUserName, thisUserEmail} = props;

  useFirestoreConnect([
    {collection: 'purchases', where: ['owner', '==', thisUserId] }
  ])

  const purchases = useSelector(state => state.firestore.ordered.purchases);
  
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

  if (isLoaded(purchases)){
    return(
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
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

UserCabinet.propTypes = {
  handleRemoveBikeFromCart: PropTypes.func,
  thisUserId: PropTypes.string,
  thisUserEmail: PropTypes.string,
  thisUserName: PropTypes.string
}

export default UserCabinet;