import React, {useState} from 'react';
import BikeCard from './BikeCard';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function BikesList(props){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])
  const bikes = useSelector(state => state.firestore.ordered.bikes);


  const {onBikeSelection, onAddBiketoCard} = props;

  const [roadCategoryOnlyVisible, setRoadCategoryOnlyVisible] = useState(false);
  const [mountainCategoryOnlyVisible, setMountainCategoryOnlyVisible] = useState(false);
  const [urbanCategoryOnlyVisible, setUrbanCategoryOnlyVisible] = useState(false);
  const [thousandPriceOnlyVisible, setThousandPriceOnlyVisible] = useState(false);
  const [threeThousandPriceOnlyVisible, setThreeThousandPriceOnlyVisible] = useState(false);
  const [fiveThousandPriceOnlyVisible, setFiveThousandPriceOnlyVisible] = useState(false);
  const [moreFiveThousandPriceOnlyVisible, setMoreFiveThousandPriceOnlyVisible] = useState(false);
  const [smallSizeOnlyVisible, setSmallSizeOnlyVisible] = useState(false);
  const [mediumSizeOnlyVisible, setMediumSizeOnlyVisible] = useState(false);
  const [largeSizeOnlyVisible, setLargeSizeOnlyVisible] = useState(false);
  const [xlargeSizeOnlyVisible, setXlargeSizeOnlyVisible] = useState(false);

  const pageStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 5fr',
    gap: '30px'
  }

  const bikeListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
  }

  const handleRoadCategory = () => {
    setRoadCategoryOnlyVisible(!roadCategoryOnlyVisible);
  }
  const handleMountainCategory = () => {
    setMountainCategoryOnlyVisible(!mountainCategoryOnlyVisible);
  }
  const handleUrbanCategory = () => {
    setUrbanCategoryOnlyVisible(!urbanCategoryOnlyVisible);
  }
  const handleThousandPrice = () => {
    setThousandPriceOnlyVisible(!thousandPriceOnlyVisible);
  }
  const handleThreeThousandPrice = () => {
    setThreeThousandPriceOnlyVisible(!threeThousandPriceOnlyVisible);
  }
  const handleFiveThousandPrice = () => {
    setFiveThousandPriceOnlyVisible(!fiveThousandPriceOnlyVisible);
  }
  const handleMoreFiveThousandPrice = () => {
    setMoreFiveThousandPriceOnlyVisible(!moreFiveThousandPriceOnlyVisible);
  }
  const handleSmallSize = () => {
    setSmallSizeOnlyVisible(!smallSizeOnlyVisible);
  }
  const handleMediumSize = () => {
    setMediumSizeOnlyVisible(!mediumSizeOnlyVisible);
  }   
  const handleLargeSize = () => {
    setLargeSizeOnlyVisible(!largeSizeOnlyVisible);
  }   
  const handleXlargeSize = () => {
    setXlargeSizeOnlyVisible(!xlargeSizeOnlyVisible);
  }   

  const bikeCard = (bike) => {
    return (<BikeCard
      whenAddToCardClicked = {onAddBiketoCard}
      whenBikeClicked = {onBikeSelection}
      model = {bike.model}
      brand = {bike.brand}
      color = {bike.color}
      size = {bike.size}
      price = {bike.price}
      category = {bike.category}
      availability = {bike.availability}
      quantity = {bike.quantity}
      bestSeller = {bike.bestSeller}
      newArrival = {bike.newArrival}
      details = {bike.details}
      imageUrl = {bike.imageUrl}
      id = {bike.id}
      key = {bike.id}
    />
    )
  }

  const visibleState = () => {
    let updatedBikesList = [];
    const roadCategory = bikes.filter(x => x.category === 'Road');
    const mountainCategory = bikes.filter(x => x.category === 'Mountain');
    const urbanCategory = bikes.filter(x => x.category === 'Commuter/Urban');
    const thousandPrice = bikes.filter(x => x.price <= 1000);
    const threeThousandPrice = bikes.filter(x => (x.price > 1000 && x.price<=3000));
    const fiveThousandPrice = bikes.filter(x => (x.price > 3000 && x.price<=5000));
    const moreFiveThousandPrice = bikes.filter(x => x.price > 5000);
    const smallSize = bikes.filter(x => x.size === 'Small');
    const mediumSize = bikes.filter(x => x.size === 'Medium');
    const largeSize = bikes.filter(x => x.size === 'Large');
    const xlargeSize = bikes.filter(x => x.size === 'X-Large');
    if (roadCategoryOnlyVisible){
      updatedBikesList = updatedBikesList.concat(roadCategory);
    } 
    if (mountainCategoryOnlyVisible){
      updatedBikesList = updatedBikesList.concat(mountainCategory);
    }
    if (urbanCategoryOnlyVisible){
      updatedBikesList = updatedBikesList.concat(urbanCategory);
    }
    if (thousandPriceOnlyVisible){
      updatedBikesList = updatedBikesList.concat(thousandPrice);
    }
    if (threeThousandPriceOnlyVisible){
      updatedBikesList = updatedBikesList.concat(threeThousandPrice);
    }
    if (fiveThousandPriceOnlyVisible){
      updatedBikesList = updatedBikesList.concat(fiveThousandPrice);
    }
    if (moreFiveThousandPriceOnlyVisible){
      updatedBikesList = updatedBikesList.concat(moreFiveThousandPrice);
    }
    if (smallSizeOnlyVisible){
      updatedBikesList = updatedBikesList.concat(smallSize);
    }
    if (mediumSizeOnlyVisible){
      updatedBikesList = updatedBikesList.concat(mediumSize);
    }
    if (largeSizeOnlyVisible){
      updatedBikesList = updatedBikesList.concat(largeSize);
    }
    if (xlargeSizeOnlyVisible){
      updatedBikesList = updatedBikesList.concat(xlargeSize);
    }            
    if (updatedBikesList.length === 0){
      return  (
        bikes.map(bike => bikeCard(bike))
      )
    } else {
      return (
        updatedBikesList.map(bike => bikeCard(bike))
      )
    }
  }

  if (isLoaded(bikes)){
    return(
      <React.Fragment>
        <div style={pageStyle}>
          <div>
            <p>Filter by:</p>
            <p>Category:</p>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={handleRoadCategory}/>
              <label className="custom-control-label" htmlFor="customCheck1" > Road</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleMountainCategory}/>
              <label className="custom-control-label" htmlFor="customCheck1" > Mountain</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleUrbanCategory}/>
              <label className="custom-control-label" htmlFor="customCheck1" > Commuter/Urban</label>
            </div>
            <p>Price:</p>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={handleThousandPrice}/>
              <label className="custom-control-label" htmlFor="customCheck1">0-1000$</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleThreeThousandPrice}/>
              <label className="custom-control-label" htmlFor="customCheck1" >1000.00-3000.00$</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleFiveThousandPrice}/>
              <label className="custom-control-label" htmlFor="customCheck1" >3000.00-5000.00$</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleMoreFiveThousandPrice}/>
              <label className="custom-control-label" htmlFor="customCheck1" >>5000.00$</label>
            </div>
            <p>Size:</p>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={handleSmallSize}/>
              <label className="custom-control-label" htmlFor="customCheck1">Small</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleMediumSize}/>
              <label className="custom-control-label" htmlFor="customCheck1" >Medium</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleLargeSize}/>
              <label className="custom-control-label" htmlFor="customCheck1" >Large</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleXlargeSize}/>
              <label className="custom-control-label" htmlFor="customCheck1" >X-Large</label>
            </div>                           
          </div>
          <div style={bikeListStyle}>
            {visibleState()}
          </div>
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

BikesList.propTypes = {
  onBikeSelection: PropTypes.func,
  onAddBiketoCard: PropTypes.func
}


export default BikesList;