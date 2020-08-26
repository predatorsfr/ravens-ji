import React, { Component } from 'react';

import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase';

import {
  FormGroup,
  Input,
  Col,
} from "reactstrap";



////Listing File in storage

var firebaseConfig = {
  apiKey: "AIzaSyC0Fmg1icbvKxuuPMvi7p4yqSNrEoUu5wc",
  authDomain: "ravens-ji.firebaseapp.com",
  databaseURL: "https://ravens-ji.firebaseio.com",
  projectId: "ravens-ji",
  storageBucket: "ravens-ji.appspot.com",
  messagingSenderId: "507314827738",
  appId: "1:507314827738:web:2e49f89f87a3aaa16510e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



class Picture extends Component {

  state = {
    filetype: "Picture", //A MODIFIER
    name: "",
    filenames: [],
    downloadURLs: [],
    isUploading: false,
    progress: 0,
    avatarURL: "",
    view: "",
  };

  ////USER

  handleChangename = event => this.setState({ name: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  /////Upload

  handleUploadSuccess = async filename => {
    const downloadURL = await firebase
      .storage()
      .ref(this.state.name + "/") // user / filetype
      .child(filename)
      .getDownloadURL();
 
    this.setState(oldState => ({
      filenames: [...oldState.filenames, filename],
      downloadURLs: [...oldState.downloadURLs, downloadURL],
      uploadProgress: 100,
      isUploading: false
    }));
  };


  //pathReference = firebase.storage.ref('images/');

  render() {
    console.log(this.state.username)
    return (
      <div>
        <Col lg="3" sm="6">
          <FormGroup>
            <Input
              defaultValue=""
              value={this.state.name}
              onChange={this.handleChangename}
              name="uname"
              placeholder="Team Name"
              type="text"
            ></Input>
          </FormGroup>
        </Col>
        <br />
        <label style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer' }}>
          Upload your Pic's
    <FileUploader
            hidden
            accept="image/*"
            storageRef={firebase.storage().ref(this.state.name + "/")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            multiple
          />
        </label>
        <br />
        <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <img key={i} src={downloadURL} />;
          })}
        </div>
      </div>
    );
  }
}

export default Picture;