import React, { Component } from 'react';
import Cosmic from '../Containers/Cosmic'
import {Segment} from 'semantic-ui-react'

class Attractions extends Component {

  render() {
    return (
      <React.Fragment>
      <div id="attract">
        <p className='gilroy w3-text-green neonRedh'>
        Planet Play is not your typical indoor play space. We don’t focus on only one type of play, we focus on ALL types of play! From jungle gyms to games, Planet Play offers fun and activities like you’ve never seen before!
        </p>
      </div>
      <br></br><br></br>
      <div id='Jungle'>
      <Segment  color='blue' inverted attached>
        <h1> Jungle Gym</h1>
        <h2> Photos</h2>
        <p>Descirption</p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Bounce'>
      <Segment  color='blue' inverted attached>
        <h1> Bounce House</h1>
        <h2> Photos</h2>
        <p>Descirption</p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Arcade'>
      <Segment  color='blue' inverted attached>
        <h1> Arcade </h1>
        <h2> Photos </h2>
        <p> Descirption </p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Trading'>
      <Segment  color='blue' inverted attached>
        <h1> Galaxy Trading </h1>
        <h2> Photos </h2>
        <p>Descirption</p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Toddler'>
      <Segment  color='blue' inverted attached>
        <h1> Toddler Area</h1>
        <h2> Photos</h2>
        <p>Descirption</p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Cosmic'>
        <Cosmic/>
      </div>
      </React.Fragment>
    );
  }

}

export default Attractions;
