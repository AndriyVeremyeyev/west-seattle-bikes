import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';
import firebase from '../../firebase';
import ProgressBar from 'react-bootstrap/ProgressBar';

function NewBikeForm(props){

  const firestore = useFirestore();

  const formStyle = {
    width: "400px",
  };
  const imageLoaderStyle = {
    marginTop: '50px',
    marginBottom: '50px'
  }

  const [checkBoxBestSellerSelected, setCheckBoxBestSellerSelected] = useState(false);
  const [checkBoxNewArrivalSelected, setCheckBoxNewArrivalSelected] = useState(false);
  const [files, setFiles] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const {onNewBikeCreation} = props;

  const onCheckBoxBestSellerChangeStatus = () => {
    setCheckBoxBestSellerSelected(true);
  }

  const onCheckBoxNewArrivalChangeStatus = () => {
    setCheckBoxNewArrivalSelected(true);
  }

  const handleChange = (files) => {
    setFiles(files);
  }

  const handleUpload = () => {
    if (files !== null){
      const image = files[0];
      const uploadTask = firebase.storage().ref(`bikes/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100);
        setProgress(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase.storage().ref('bikes').child(image.name).getDownloadURL().then(url => {
          setUrl(url);
        })
      });
    }
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
        category: event.target.category.value,
        availability: event.target.availability.value,
        quantity: parseInt(event.target.quantity.value),
        bestSeller: checkBoxBestSellerSelected,
        newArrival: checkBoxNewArrivalSelected,
        details:  event.target.details.value,
        imageUrl: url,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return( 
    <React.Fragment>
      <div style={imageLoaderStyle}>
        <input 
            type='file' 
            onChange={(e) =>{handleChange(e.target.files)}}
        />
        <br/>
        <br/>
        <ProgressBar now={progress}/>
        <br/>
        <button className="ui button" onClick={handleUpload}>Upload Image</button>
        <img src={url} width="400" alt=""/>
      </div>
      <form  onSubmit={addBikeToFirestore}>
        <div className="form-group">
          <label htmlFor="model">
            Model: 
          </label>
          <input
            className="form-control"
            style={formStyle}
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
            className="form-control"
            style={formStyle}
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
          <input
            className="form-control"
            style={formStyle}
            type='text'
            name='color'
            placeholder='Gloss Black'
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
            placeholder='499.99$'
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
            placeholder='2'
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