import React, { Component } from 'react';
import Cosmic from '../Containers/Cosmic'
import {Segment} from 'semantic-ui-react'

class Attractions extends Component {

  render() {
    return (
      <React.Fragment>
      <div id="attract">
      <h1 className=" neon3h smooth w3-text-white">Attractions</h1>
        <p className="KGN">
        Planet Play is not your typical indoor play space. We don’t focus on only one type of play, we focus on ALL types of play! From jungle gyms to games, Planet Play offers fun and activities like you’ve never seen before!
        </p>
      </div>
      <br></br><br></br>
      <div id='Jungle'>
      <Segment  color='blue' inverted attached>
        <h1> Jungle Gym</h1>
        <h2> Photos</h2>
        <p>Our 700 square foot, two story jungle gym will catch your eye as soon as you enter Planet Play. Children will be amazed as they enter and realize just how much there is for them to do. Some of the things they will find inside include; racing slides, swirly slides, ball blaster area, plank bridge, ribbon tunnel, scaling ladder, rocket ship tunnel ladder, and more!</p>
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
      <div id='VR Pods'>
      <Segment  color='blue' inverted attached>
        <h1> Vr Pods</h1>
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
