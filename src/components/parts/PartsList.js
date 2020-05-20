import React from 'react';
import PartCard from './PartCard';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import PropTypes from 'prop-types';

function PartsList(props){

  useFirestoreConnect([
    {collection: 'parts'}
  ])
  const parts = useSelector(state => state.firestore.ordered.parts);

  const {onAddParttoCard} = props;

  const partsListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '30px'
  }

  const partCard = (part) => {
    return (<PartCard
      whenAddToCardClicked = {onAddParttoCard}
      name = {part.name}
      brand = {part.brand}
      price = {part.price}
      category = {part.category}
      availability = {part.availability}
      quantity = {part.quantity}
      details = {part.details}
      imageUrl = {part.imageUrl}
      id = {part.id}
      key = {part.id}
    />
    )
  }

  if (isLoaded(parts)){
    return(
      <React.Fragment>
        <h1>Parts Store</h1>
        <div style={partsListStyle}>
          {parts.map(part => partCard(part))}
        </div>
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

PartsList.propTypes = {
  onAddParttoCard: PropTypes.func
}

export default PartsList;