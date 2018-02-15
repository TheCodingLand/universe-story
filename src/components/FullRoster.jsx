
import PlayerAPI from '../api'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
// The FullRoster iterates over all of the players and creates
// a link to their profile page.




class FullRoster extends Component {
  render() {
      return(
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)   
}

}


export default FullRoster