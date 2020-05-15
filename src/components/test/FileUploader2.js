import React, {Component} from 'react'
import firebase from '../../firebase';
// import { storage } from 'firebase';


export class FileUploader2 extends Component {

  constructor(props){
    super(props);
    this.state={
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
    .handleChange
    .bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]){
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }

  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
    (snapshot) => {
      // progress function
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100);
      this.setState({progress}); 
    },
    (error) => {
      // error function
      console.log(error);
    },
    () => {
      // complete function
      firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
        console.log();
        this.setState({url});
      })
    });
  }

  render() {
    return (
      <div>
        <progress value={this.state.progress} max='100'/>
        <input type='file' onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <br/>
        <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt='Uploaded images'/>
      </div>
    )
  }

}

export default FileUploader2;