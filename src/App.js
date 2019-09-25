import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Components
import Home from './components/Home';
import UploadedImages from './components/UploadedImages';

// CSS
import './App.css';
import themeFile from './util/theme';
import M from 'materialize-css/dist/js/materialize.min.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = 'FIREBASE_API_HERE';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/images' component={UploadedImages} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
