import React, {useState} from 'react';
import PropTypes from 'prop-types'
import {useFirestore} from 'react-redux-firebase';
import firebase from '../../firebase';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AddNewsForm(props){

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

  const {onNewsCreation} = props;

  const handleChange = (files) => {
    setFiles(files);
  }

  const handleUpload = () => {
    if (files !== null){
      const image = files[0];
      const uploadTask = firebase.storage().ref(`news/${image.name}`).put(image);
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100);
        setProgress(progress)
      },
      (error) => {
        console.log(error);
      },
      () => {
        firebase.storage().ref('news').child(image.name).getDownloadURL().then(url => {
          setUrl(url);
        })
      });
    }
  }

  function addNewsToFirestore(event){
    event.preventDefault();
    onNewsCreation();

    return firestore.collection('news').add(
      {
        title: event.target.title.value,
        body: event.target.body.value,
        author: event.target.author.value,
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
      <form onSubmit={addNewsToFirestore}>
        <div className="form-group">
          <label htmlFor="title">
            Title: 
          </label>
          <input
            className="form-control"
            style={formStyle}
            type='text'
            name='title'
            placeholder='Dolce'
            required
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="author">
            Author: 
          </label>
          <input
            className="form-control"
            style={formStyle}
            type='text'
            name='author'
            placeholder='David'
            required
          /> 
        </div>     
        <div className="form-group">
          <label htmlFor="body">
            Body: 
          </label>
          <textarea
            className="form-control"
            rows="10"
            style={formStyle}
            type='textarea'
            name='body'
            placeholder='Whether you are new to riding or just looking for a bike that can do it all with aplomb, you will feel right at home with the Dolce.'
            required
          /> 
        </div>                    
        <button type='submit'>Add News</button>      
      </form>
    </React.Fragment>
  )  
}

AddNewsForm.propTypes = {
  onNewsCreation: PropTypes.func
}

export default AddNewsForm;