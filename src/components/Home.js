import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Home pic
import weddingPhoto2 from '../images/weddingHomePhoto2.jpg';

// Material-UI
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Home extends Component {
  handleFile = e => {
    const totalFiles = e.target.files.length;
    for (let x = 0; x < totalFiles; x++) {
      let image = e.target.files[x];
      let formData = new FormData();
      formData.append('image', image, image.name);
      axios
        .post('/image', formData)
        .then(() => {
          M.toast({ html: 'Upload Successful', classes: 'rounded' });
        })
        .catch(err => {
          console.log(err);
          M.toast({ html: 'Error Uploading' });
        });
    }
  };

  handleEdit = () => {
    const fileInput = document.getElementById('imageInput');
    // Opens file selection and when user selects a file, triggers handleImageChange
    fileInput.click();
  };

  render() {
    return (
      <div className='row photoContainer'>
        <div className='col s12 m6'>
          <h1 className='title'>
            Cynthia and John
            <br />
            September 12, 2019
          </h1>

          <div className='row'>
            <img
              src={weddingPhoto2}
              alt='weddingPhotoHome'
              id='weddingPhotoHome2'
            />
            <br />
            <br />
            <br />

            <Button
              variant='contained'
              color='primary'
              onClick={this.handleEdit}
            >
              Upload Images&nbsp;
              <CloudUploadIcon />
            </Button>
          </div>
        </div>

        <div className='col s12 m6'>
          <div className='row homeContainer'>
            <div className='theButtons'>
              <br />
              Password Protected Images
              <br />
              <br />
              <input
                type='file'
                id='imageInput'
                onChange={this.handleFile}
                hidden='hidden'
              />
              <Link to='/images' style={{ textDecoration: 'none' }}>
                <Button variant='contained' color='secondary' className='pulse'>
                  See images
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
