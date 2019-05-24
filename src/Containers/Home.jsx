import React from 'react';
import logo from '../images/logoLong.jpg'
import {Image,Grid, Segment, Button, Card} from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import BlurAdd from '../Components/blurAdd'


const Home = (props) => {

  return (
    <React.Fragment>
    {props.user=== '' ? <BlurAdd email={props.user} onSubmit={props.onSubmit} l/> : null }
    <div id='home' className="smooth">
    <Image centered src={logo} size='huge'/>
    <h1 className='w3-text-white  KGN neon3'>
      Hello Whats poppin video area
      </h1>

      <Grid stackable columns={3}>
        <Grid.Column textAlign='center'>
          <Segment size='large' id='card1' textAlign='center'><br></br><br></br><h1 className='neonRed smooth16'>Cosmic Cafe</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card2' textAlign='center'><br></br><br></br><h1 className='neonGreen smooth16'>Jungle Gym</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column as={Link} to='/Attractions'>
          <Segment size="large" id='card3' textAlign='center'><br></br><br></br><h1 className='neonPink smooth16'>Arcade</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card8' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>Sensitive Space</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card5' textAlign='center'><br></br><br></br><h1 className='neonLime smooth16'>Party Packages</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card6' textAlign='center'><br></br><br></br><h1 className='neonSilver smooth16'>Class Schedule</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large'id='card7' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>Open Play</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card9' textAlign='center'><br></br><br></br><h1 className='neonAqua smooth16'>Toddler Time</h1><br></br><br></br></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment size='large' id='card4' textAlign='center'><br></br><br></br><h1 className='neon3 smooth16'>VIP Club</h1><br></br><br></br></Segment>
        </Grid.Column>
      </Grid>
    </div>
      </React.Fragment>
  );
}

export default Home ;
