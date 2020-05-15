import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';

function NewBikeForm(props){

  const firestore = useFirestore();

  const formStyle = {
    width: "300px",
  };

  const [checkBoxBestSellerSelected, setCheckBoxBestSellerSelected] = useState(false);
  const [checkBoxNewArrivalSelected, setCheckBoxNewArrivalSelected] = useState(false);

  const {onNewBikeCreation} = props;

  const onCheckBoxBestSellerChangeStatus = () => {
    setCheckBoxBestSellerSelected(true);
  }

  const onCheckBoxNewArrivalChangeStatus = () => {
    setCheckBoxNewArrivalSelected(true);
  }

  function addBikeToFirestore(event){
    event.preventDefault();
    onNewBikeCreation();
    return firestore.collection('bikes').add(
      {
        model: event.target.model.value,
        brand: event.target.brand.value,
        color: event.target.color.value,
        size: event.target.size.value,
        price: Math.round(parseFloat(event.target.price.value)*100)/100,
        availability: event.target.availability.value,
        quantity: parseInt(event.target.quantity.value),
        bestSeller: checkBoxBestSellerSelected,
        newArrival: checkBoxNewArrivalSelected,
        details:  event.target.details.value
      }
    );
  }

  return(
    <React.Fragment>
      <form onSubmit={addBikeToFirestore}>
        <div className="form-group">
          <label htmlFor="model">
            Model: 
          </label>
          <input
            style={formStyle}
            className="form-control"
            type='text'
            name='model'
            placeholder='Dolce'
            required
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="brand">
            Brand: 
          </label>
          <input
            style={formStyle}
            className="form-control"
            type='text'
            name='brand'
            placeholder='Specialized'
            required
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="color">
            Color: 
          </label>
          <select id="color" name="color">
            <option value="Satin">Satin</option>
            <option value="Cast Berry">Cast Berry</option>
            <option value="Black">Black</option>
            <option value="Mint">Mint</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="size">
            Size: 
          </label>
          <select id="size" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="X-Large">X-Large</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="availability">
            Availability: 
          </label>
          <select id="availability" name="availability">
            <option value="In stock">In stock</option>
            <option value="In retail store">In retail store</option>
            <option value="Ships to retail store">Ships to retail store</option>
            <option value="Not available">Not available</option>
          </select>
        </div>          
        <div className="form-group">
          <label htmlFor="price">
            Price: 
          </label>
          <input
            style={formStyle}
            className="form-control"
            type='number'
            step='.01'
            name='price'
            placeholder='499.99$'
            required
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="quantity">
            Quantity: 
          </label>
          <input
            style={formStyle}
            className="form-control"
            type='number'
            step='1'
            name='quantity'
            placeholder='2'
            required
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="bestSeller">
            BestSeller: 
          </label>
          <input type="checkbox" id="bestSeller" name="bestSeller" value={checkBoxBestSellerSelected} onClick={() => onCheckBoxBestSellerChangeStatus()}/>
        </div>
        <div className="form-group">
          <label htmlFor="newArrival">
            New Arrival: 
          </label>
          <input type="checkbox" id="newArrival" name="newArrival" value={checkBoxNewArrivalSelected} onClick={() => onCheckBoxNewArrivalChangeStatus()}/>
        </div>         
        <div className="form-group">
          <label htmlFor="details">
            Details: 
          </label>
          <textarea
            style={formStyle}
            className="form-control"
            type='textarea'
            name='details'
            placeholder='Whether you are new to riding or just looking for a bike that can do it all with aplomb, you will feel right at home with the Dolce.'
            required
          /> 
        </div>                    
        <button type='submit'>Add Bike</button>      
      </form>
    </React.Fragment>
  )  
}

NewBikeForm.propTypes = {
  onNewBikeCreation: PropTypes.func
}

export default NewBikeForm;