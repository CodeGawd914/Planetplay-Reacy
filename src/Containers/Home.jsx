import React from 'react';
import logo from '../images/logoLong.jpg'
import {Image,Grid, Segment, Button} from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import BlurAdd from '../Components/blurAdd'


const Home = () => {
  const list = ['Cosmic Cafe']
  return (
    <React.Fragment>
    <BlurAdd/>
    <div id='home' className="smooth">
    <Image centered src={logo} size='huge'/>
    <h1 className='w3-text-white neon3'>
      Hello Whats poppin video area
      </h1>

      <Grid doubling columns={3}>
    <Grid.Column textAlign='centered'>
      <Segment id='card1' textAlign='center'><br></br><br></br><h1 className='neonRed smooth16'>Cosmic Cafe</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
  <Segment id='card2' textAlign='center'><br></br><br></br><h1 className='neonGreen smooth16'>Jungle Gym</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column as={Link} to='/Attractions'>
    <Segment id='card3' textAlign='center' ><br></br><br></br><h1 className='neonPink'>Arcade</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
  <Segment id='card4' textAlign='center'><br></br><br></br><h1 className='neonAqua'>Toddler Time</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
    <Segment id='card5' textAlign='center'><br></br><br></br><h1 className='neonLime'>Party Packages</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
    <Segment id='card6' textAlign='center'><br></br><br></br><h1 className='neonSilver'>Class Schedule</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
    <Segment id='card7' textAlign='center'><br></br><br></br><h1 className='neon3'>Open Play</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
  <Segment id='card8' textAlign='center'><br></br><br></br><h1 className='neon3'>Sensitive Space</h1><br></br><br></br></Segment>
    </Grid.Column>
    <Grid.Column>
<Segment id='card9' textAlign='center'><br></br><br></br><h1 className='neon3'>VIP Club</h1><br></br><br></br></Segment>
    </Grid.Column>
  </Grid>
    </div>
      </React.Fragment>
  );
}

export default Home ;
