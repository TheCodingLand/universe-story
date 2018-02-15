import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';


import TimeLine from './Timeline'
let video = "https://www.youtube.com/watch?v=h8hXvxQl5n4"
class App extends Component {
  render() {
    return (
      <div>
      <Reboot />
      <TimeLine />
     
    </div>
    );
  }
}


export default App;
