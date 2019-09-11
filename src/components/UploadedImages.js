import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery from 'react-photo-gallery';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function UploadedImages() {
  const [list, setList] = useState([]);
  const [textInput, setTextInput] = useState('');
  const allPhotos = [];

  const onChange = e => {
    setTextInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (textInput === 'Love') {
      M.toast({ html: 'Loading Images...' });
      axios
        .get('/images')
        .then(res => {
          M.toast({ html: 'Please Wait' });
          setList(res.data.imageUrl);
        })
        .catch(err => {
          console.log(err);
          M.toast({ html: 'Error check logs or try again later' });
        });
    } else {
      M.toast({ html: 'Wrong password, please try again' });
    }
  };

  const onClick = (e, obj) => {
    window.open(obj.photo.src, '_blank');
  };

  if (list.length > 0 && allPhotos.length === 0) {
    for (let x = 0; x < list.length; x++) {
      allPhotos.push({
        src: list[x],
        width: 1,
        height: 1
      });
    }
  }

  return allPhotos.length ? (
    <div>
      <Gallery photos={allPhotos} direction={'column'} onClick={onClick} />
    </div>
  ) : (
    <div>
      <p>Please Enter Password to View Images</p>
      <form onSubmit={handleSubmit}>
        <div className='input-field'>
          <input
            type='text'
            id='password'
            onChange={onChange}
            value={textInput}
          />
          <label htmlFor='password'>Password</label>
        </div>
        <br />
        <Button type='submit' variant='contained' color='primary'>
          Submit
        </Button>
      </form>
      <br />
      <br />
      <br />
      <Link to='/'>
        <Button color='secondary' variant='outlined'>
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}

export default UploadedImages;
