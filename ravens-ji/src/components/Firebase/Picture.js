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
  handleUploadStart = () => { this.setState({ isUploading: true, progress: 0 })};
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  /////Upload

  handleUploadSuccess = async filename => {
    alert("Your Pic's has been uplaoded")
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
        <Col lg="12" sm="12">
          <FormGroup>
            <Input
            style={{backgroundColor:"white" }}
              defaultValue=""
              value={this.state.name}
              onChange={this.handleChangename}
              name="uname"
              placeholder="First enter your Team Number then Upload your Pic's"
              type="text"
              required
            ></Input>
          </FormGroup>
        </Col>
        <br />
        <label style={{ backgroundColor: 'purple', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer',marginRight: 50,marginLeft:50 }}>
          Upload your #TeamRocket Pic's
    <FileUploader
            hidden
            accept="image/*"
            filename = {this.state.name}
            storageRef={firebase.storage().ref("#TeamRocket/")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            disabled={this.state.name === "" ? true : false }
            multiple
          />
        </label>
        <label style={{ backgroundColor: 'purple', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer',marginRight: 50,marginLeft:50 }}>
          Upload your #Rouxcool Pic's 
    <FileUploader
            hidden
            accept="image/*"
            filename = {this.state.name}
            storageRef={firebase.storage().ref("#Rouxcool/")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            disabled={this.state.name === "" ? true : false }
            multiple
          />
        </label>
        <label style={{ backgroundColor: 'purple', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer',marginRight: 50,marginLeft:50 }}>
          Upload your #Dresseurs Pic's 
    <FileUploader
            hidden
            accept="image/*"
            filename = {this.state.name}
            storageRef={firebase.storage().ref("#Dresseurs/")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            disabled={this.state.name === "" ? true : false }
            multiple
          />
        </label>
        <br />
        <br />
        <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <img key={i} 
                        width="75" 
                        height="75"
                        src={downloadURL} 
                    />;
          })}
        </div>
        </div>
    );
  }
}

export default Picture;