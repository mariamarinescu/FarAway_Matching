import React from 'react'

import React from "react";
import {Link} from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import {Button} from 'react-bootstrap';
// import Card from '../Card.component';
import axios from 'axios';


class Home extends React.Component {
constructor(props) {
  super(props) 
  this.state = {
    name: ""
  }
}

fetchCharacter = () => {
  axios.get('https://melroune.github.io/starwars-api/api')
  .then((res) => {
    console.log(JSON.parse(res));

  })


}

componentDidMount() {
  this.fetchCharacter();
}
  render() {
        return(
            <div>
              {/* <Card name={}/>  */}
                
            </div>
        )
      }
    
}

export default Home;
