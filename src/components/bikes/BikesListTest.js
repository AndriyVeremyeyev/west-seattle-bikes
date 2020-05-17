import React, {useState} from 'react';
import BikeCard from './BikeCard';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

function BikesListTest(props){

  useFirestoreConnect([
    {collection: 'bikes'}
  ])
  const bikes = useSelector(state => state.firestore.ordered.bikes);

  const {onBikeSelection} = props;

  const [roadCategoryOnlyVisible, setRoadCategoryOnlyVisible] = useState(false);
  const [mountainCategoryOnlyVisible, setMountainCategoryOnlyVisible] = useState(false);
  const [thousandPriceOnlyVisible, setThousandPriceOnlyVisible] = useState(false);
  const [threeThousandPriceOnlyVisible, setThreeThousandPriceOnlyVisible] = useState(false);
  const [fiveThousandPriceOnlyVisible, setFiveThousandPriceOnlyVisible] = useState(false);
  const [moreFiveThousandPriceOnlyVisible, setMoreFiveThousandPriceOnlyVisible] = useState(false);

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

  const bikeCard = (bike) => {
    return (<BikeCard
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
    const thousandPrice = bikes.filter(x => x.price <= 1000);
    const threeThousandPrice = bikes.filter(x => (x.price > 1000 && x.price<=3000));
    const fiveThousandPrice = bikes.filter(x => (x.price > 3000 && x.price<=5000));
    const moreFiveThousandPrice = bikes.filter(x => x.price > 5000);
    if (roadCategoryOnlyVisible){
      updatedBikesList = updatedBikesList.concat(roadCategory);
    } 
    if (mountainCategoryOnlyVisible){
      updatedBikesList = updatedBikesList.concat(mountainCategory);
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
    console.log(updatedBikesList);
    console.log(bikes);
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
              <input type="checkbox" className="custom-control-input" id="customCheck2" onChange={handleMountainCategory}/>
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

BikesListTest.propTypes = {
  onBikeSelection: PropTypes.func,
}


export default BikesListTest;