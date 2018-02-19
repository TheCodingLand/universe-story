

import 'core-js/fn/array/includes';
import 'core-js/es6/set';
//import 'core-js/fn/array/map';
import 'core-js/es6/map';
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import Reboot from 'material-ui/Reboot';
import { purple, red } from 'material-ui/colors';
import 'typeface-roboto'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import amber from 'material-ui/colors/amber';
import indigo from 'material-ui/colors/indigo';
import store from './Store'
import { Provider } from "react-redux"


const theme = createMuiTheme({
  typography: {
    fontWeightLight: 200,
    fontWeightRegular: 200,
    fontWeightMedium: 300
  },
  palette: {
    background: {
      paper: "#000015",
      default: "#000015"
    },

    type: 'dark',
    primary: {
      ...indigo,

      A900: '#000051',
    },
    secondary: {
      ...amber,
      A700: '#FFAB00',
    },
    error: red,
  },
  overrides: {
    MuiStepIcon : {
      // Name of the styleSheet
      completed: {
        color: '#FFAB00',
      },
      active: {
        color: '#FFAB00',
      },
    },
    MuiStepPosition: {
      // Name of the styleSheet
      completed: {
        color: '#FFAB00',
      },
      active: {
        color: '#FFAB00',
        
      },
      text:{
        fill:'#000'
      }
      
    }


   
  
}

}
);


ReactDOM.render(<Provider store={store}><MuiThemeProvider theme={theme}>
  <BrowserRouter><App /></BrowserRouter> </MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();


