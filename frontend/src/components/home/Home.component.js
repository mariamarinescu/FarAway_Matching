
import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
// import Card from '../Card.component';
import axios from 'axios';


class Home extends React.Component {

  random = 0;
  counter = 0;

  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: "",
      species: "",
      gender: "",
      skinColor: "",
      hairColor: "",
      eyeColor: "",
      height: "",
      mass: "",
      homeworld: "",
      masters: "",
      bornLocation: "",
      born: "",
      died: "",
      affiliations: [],
      apprentices: [],
      masters: [],
      cybernetics: "",
      image: "",
      wiki: ""
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min))
  }

  componentWillMount() {
    this.fetchCharacter();
  }

  componentDidMount() {
    let temp = this.getRandomInt(1, 88);
    if (temp !== 0) {
      this.setState({
        id: temp
      });
    }

  }
  fetchCharacter = () => {
    if (this.counter === 0) {
      this.counter += 1;
      axios.get(`https://melroune.github.io/starwars-api/api/id/${1}.json`)
        .then((res) => {
          console.log(res.data);
          let elem = res.data
          this.setState({
            id: elem.id,
            name: elem.name,
            species: elem.species,
            gender: elem.gender,
            image: elem.image,
            height: elem.height,
            homeworld: elem.homeworld,
            bornLocation: elem.bornLocation,
            cybernetics: elem.cybernetics,
            eyeColor: elem.eyeColor,
            hairColor: elem.hairColor,
            affiliations: elem.affiliations,
            apprentices: elem.apprentices,
            masters: elem.masters,
            wiki: elem.wiki
          })
        })
    } else if (this.state.id !== 0 && this.counter !== 0) {
      this.counter += 1;
      axios.get(`https://melroune.github.io/starwars-api/api/id/${this.state.id}.json`)
        .then((res) => {
          console.log(res.data);
          let elem = res.data
          this.setState({
            id: elem.id,
            name: elem.name,
            species: elem.species,
            gender: elem.gender
          })
        })
    }

  }

  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="pulsingheart">
            <button className="pulsingheart" ></button>
          </div>
        </div>
        <button class="dislike">
          <i class="fa fa-thumbs-o-down icon" aria-hidden="true"></i>
        </button>
        <button class="glow-on-hover prev" type="button">Prev.</button>
        <button class="glow-on-hover next" type="button">Next</button>

        <Card style={{ width: '18rem' }} className="home-card">
          <Card.Img variant="top" src={this.state.image} />
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Species: {this.state.species}</ListGroupItem>
            <ListGroupItem>Gender: {this.state.gender}</ListGroupItem>
            <ListGroupItem>Born location: {this.state.bornLocation}</ListGroupItem>
            <ListGroupItem>Affiliations: {this.state.affiliations[0]}, {this.state.affiliations[1]}, {this.state.affiliations[2]},...;</ListGroupItem>
            <ListGroupItem>Masters: {this.state.masters[0]},{this.state.masters[1]}</ListGroupItem>
            <ListGroupItem>Apprentices: {this.state.apprentices[0]}, {this.state.apprentices[1]}</ListGroupItem>
            <ListGroupItem>Cybernetics: {this.state.cybernetics}</ListGroupItem>
            <ListGroupItem>Born location: {this.state.bornLocation}</ListGroupItem>


          </ListGroup>
          <Card.Body>
            <Card.Link href={this.state.wiki}>Wiki</Card.Link>
            <Card.Link href="#">More details</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }

}

export default Home;
