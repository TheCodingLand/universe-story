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

const theme = createMuiTheme({
    typography: {
   fontWeightLight: 200,
   fontWeightRegular: 200,
   fontWeightMedium: 300},
  
  
    palette: {
      type: 'dark',
      primary: {
          ...purple, 

          A900: '#4A148C',
        },
      secondary: {
        ...amber,
        A700: '#FFAB00',
      },
      error: red,
    },
  });
  

ReactDOM.render(<MuiThemeProvider theme={theme}>
<BrowserRouter><App /></BrowserRouter> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();

