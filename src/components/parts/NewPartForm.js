import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';
import firebase from '../../firebase';
import ProgressBar from 'react-bootstrap/ProgressBar';

function NewPartForm(props){

  const firestore = useFirestore();

  const formStyle = {
    width: "400px",
  };
  const imageLoaderStyle = {
    marginTop: '50px',
    marginBottom: '50px'
  }

  const [files, setFiles] = useState(null);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const {onNewPartCreation} = props;

  const handleChange = (files) => {
    setFiles(files);
  }

  const handleUpload = () => {
    const image = files[0];
    const uploadTask = firebase.storage().ref(`parts/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100);
      setProgress(progress)
    },
    (error) => {
      console.log(error);
    },
    () => {
      firebase.storage().ref('parts').child(image.name).getDownloadURL().then(url => {
        setUrl(url);
      })
    });
  }

  function addPartToFirestore(event){
    event.preventDefault();
    onNewPartCreation();

    return firestore.collection('parts').add(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        price: Math.round(parseFloat(event.target.price.value)*100)/100,
        category: event.target.category.value,
        availability: event.target.availability.value,
        quantity: parseInt(event.target.quantity.value),
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
      <form  onSubmit={addPartToFirestore}>
        <div className="form-group">
          <label htmlFor="name">
            Name: 
          </label>
          <input
            className="form-control"
            style={formStyle}
            type='text'
            name='name'
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
            <option value="Brakes/Levers/Pads">Brakes/Levers/Pads</option>
            <option value="Cassettes/Freewheels">Cassettes/Freewheels</option>
            <option value="Cranksets">Cranksets</option>
            <option value="Derailleurs">Derailleurs</option>
            <option value="Handlebars">Handlebars</option>
            <option value="Pedals">Pedals</option>
            <option value="Saddles">Saddles</option>
            <option value="Groupsets">Groupsets</option>
            <option value="Other">Other</option>
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
        <button type='submit'>Add Part</button>      
      </form>
    </React.Fragment>
  )  
}

NewPartForm.propTypes = {
  onNewPartCreation: PropTypes.func
}

export default NewPartForm;