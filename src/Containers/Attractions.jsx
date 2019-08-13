import React, { Component } from 'react';
import Cosmic from '../Containers/Cosmic'
import {Segment, Image, Grid } from 'semantic-ui-react'
import jungle1 from "../images/vr1.png"
import jungle2 from '../images/vr2.png'
import jungle3 from '../images/jungle3.png'
import jungle4 from '../images/jungle4.png'
import arcade1 from '../images/arcade1.jpg'
import bounce1 from '../images/bounce1.jpg'
import vr1 from '../images/VRreal.png'
import toddler1 from '../images/toddler1.jpg'

class Attractions extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
      <h1 id="attract" className=" neon3h smooth w3-text-white">Attractions</h1>
        <p className="KGN">
        Planet Play is not your typical indoor play space. We don’t focus on only one type of play, we focus on ALL types of play! From jungle gyms to games, Planet Play offers fun and activities like you’ve never seen before!
        </p>
      </div>
      <br></br><br></br>
      <div>
        <h1 id='Jungle'> Jungle Gym</h1>
      <Segment id='card3' attached>
        <Grid columns={4}>
          <Grid.Column>
            <Image src={jungle1}/>
          </Grid.Column>
          <Grid.Column>
            <Image src={jungle2}/>
          </Grid.Column>
          <Grid.Column>
            <Image src={jungle3}/>
          </Grid.Column>
          <Grid.Column>
            <Image src={jungle4}/>
          </Grid.Column>
        </Grid>

      </Segment>
      <p className='KGN'>Our 700 square foot, two story jungle gym will catch your eye as soon as you enter Planet Play. Children will be amazed as they enter and realize just how much there is for them to do. Some of the things they will find inside include; racing slides, swirly slides, ball blaster area, plank bridge, ribbon tunnel, scaling ladder, rocket ship tunnel ladder, and more!</p>
      </div>

      <br></br><br></br><br></br><br></br>

      <div>
        <h1 id='VR Pods'> Vr Pods</h1>
      <Segment id='card6'  attached>
        <Grid>
        <Grid.Column>
          <Image centered size={"big"} src={vr1}/>
        </Grid.Column>
        </Grid>
      </Segment>
        <p className='KGN'>Our Virtual Reality Pods combined with the virtual reality headset creates a completely immersive virtual reality adventure unlike anything you have ever experienced. With over 100 virtual reality experiences built in there is an experience for every age group and interest.
        </p>
      </div>
      <br></br><br></br><br></br><br></br>
      <div>
      <h1 id='Arcade'> Arcade </h1>
      <Segment id='card8' attached>
        <Grid>
        <Grid.Column>
          <Image centered size={"huge"} src={arcade1}/>
        </Grid.Column>
         </Grid>
      </Segment>
      <p className='KGN'> Planet Play has 30 arcade games that are sure to entertain the entire family. From the classics like skeeball to the new galactic space basketball, the choice is yours! Plus, no more annoying tokens to carry around and worry about losing. We have a cashless system that makes playing a breeze! The best part is, if you don’t use all of your points during today’s visit, you can simply save your card for another time.  And don’t forget to stop by and cash in your tickets for an awesome prize or two! Our redemption center is jam packed with goodies for families to choose from.
      </p>
      </div>
      <br></br><br></br><br></br><br></br>
      <div>
      <h1 id='Bounce'> Bounce House</h1>
      <Segment id='card2' attached>
        <Grid>
        <Grid.Column>
          <Image centered size={"big"} src={bounce1}/>
        </Grid.Column>
        </Grid>
      </Segment>
      <p className='KGN'>Who doesn’t love a bounce house? Kids will laugh and get their exercise for the day, while they bounce around in our custom made piece.</p>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Trading'>
      <Segment id='card7' attached>
        <h1> Galaxy Trading </h1>
        <h2> Photos </h2>
        <p className='KGN'>Descirption</p>
      </Segment>
      </div>
      <br></br><br></br><br></br><br></br>
      <div id='Toddler'>

      <h1> Toddler Area</h1>
      <Segment id='card4' attached>
      <Grid>
        <Grid.Column>
          <Image centered size={"big"} src={toddler1}/>
        </Grid.Column>
      </Grid>
      </Segment>
      <p className='KGN'>Descirption</p>
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
