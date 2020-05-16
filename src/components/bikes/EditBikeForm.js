import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';

function EditBikeForm(props){

  const firestore = useFirestore();

  const formStyle = {
    width: "300px",
  };

  const [checkBoxBestSellerSelected, setCheckBoxBestSellerSelected] = useState(false);
  const [checkBoxNewArrivalSelected, setCheckBoxNewArrivalSelected] = useState(false);

  const {onEditBike, bike} = props;

  const onCheckBoxBestSellerChangeStatus = () => {
    setCheckBoxBestSellerSelected(true);
  }

  const onCheckBoxNewArrivalChangeStatus = () => {
    setCheckBoxNewArrivalSelected(true);
  }

  function editBikeInFirestore(event){
    event.preventDefault();
    onEditBike();

    const propertiesToUpdate = {
      model: event.target.model.value,
      brand: event.target.brand.value,
      color: event.target.color.value,
      size: event.target.size.value,
      price: Math.round(parseFloat(event.target.price.value)*100)/100,
      category: event.target.category.value,
      availability: event.target.availability.value,
      quantity: parseInt(event.target.quantity.value),
      bestSeller: checkBoxBestSellerSelected,
      newArrival: checkBoxNewArrivalSelected,
      details:  event.target.details.value
    }

    return firestore.update({collection: 'bikes', doc: bike.id}, propertiesToUpdate)
  }

  return( 
    <React.Fragment>
      <div  className="container">
        <form  onSubmit={editBikeInFirestore}>
          <div className="form-group">
            <label htmlFor="model">
              Model: 
            </label>
            <input
              className="form-control"
              style={formStyle}
              type='text'
              name='model'
              defaultValue={bike.model}
              required
            /> 
          </div>
          <div className="form-group">
            <label htmlFor="brand">
              Brand: 
            </label>
            <input
              className="form-control"
              style={formStyle}
              type='text'
              name='brand'
              defaultValue={bike.brand}
              required
            /> 
          </div>
          <div className="form-group">
            <label htmlFor="color">
              Color: 
            </label>
            <input
              className="form-control"
              style={formStyle}
              type='text'
              name='color'
              defaultValue={bike.color}
              required
            /> 
          </div>
          <div className="form-group">
            <label htmlFor="size">
              Size: 
            </label>
            <div>
              <select
              className="form-control"
              style={formStyle} 
              id="size" 
              name="size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="availability">
              Availability: 
            </label>
            <select 
              className="form-control"
              style={formStyle}
              id="availability" 
              name="availability">
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
              className="form-control"
              style={formStyle}
              type='number'
              step='.01'
              name='price'
              defaultValue={bike.price}
              required
            /> 
          </div>
          <div className="form-group">
            <label htmlFor="category">
              Category: 
            </label>
            <select
              className="form-control"
              style={formStyle}  
              id="category" 
              name="category">
              <option value="Road">Road</option>
              <option value="Mountain">Mountain</option>
              <option value="Cyclocross">Cyclocross</option>
              <option value="Commuter/Urban">Commuter/Urban</option>
            </select>
          </div>          
          <div className="form-group">
            <label htmlFor="quantity">
              Quantity: 
            </label>
            <input
              className="form-control"
              style={formStyle}
              type='number'
              step='1'
              name='quantity'
              defaultValue={bike.quantity}
              required
            /> 
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox" 
              id="bestSeller" 
              name="bestSeller" 
              value={checkBoxBestSellerSelected} 
              onClick={() => onCheckBoxBestSellerChangeStatus()}
            />
            <label className="form-check-label" htmlFor="bestSeller">
              BestSeller 
            </label>
          </div>
          <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox" 
                id="newArrival" 
                name="newArrival" 
                value={checkBoxNewArrivalSelected} 
                onClick={() => onCheckBoxNewArrivalChangeStatus()}
              />
            <label
              className="form-check-label" 
              htmlFor="newArrival">
              New Arrival 
            </label>
          </div>         
          <div className="form-group">
            <label htmlFor="details">
              Details: 
            </label>
            <textarea
              className="form-control"
              rows="10"
              style={formStyle}
              type='textarea'
              name='details'
              defaultValue={bike.details}
              required
            /> 
          </div>                    
          <button type='submit'>Add Bike</button>      
        </form>
      </div>
    </React.Fragment>
  )  
}

EditBikeForm.propTypes = {
  onEditBike: PropTypes.func,
  bike: PropTypes.object
}

export default EditBikeForm;