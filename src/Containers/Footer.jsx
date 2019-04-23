import React, { Component } from 'react';
import {Grid, Image, List,Icon, Header, Container } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from '../images/logoLong.jpg'




class Footer extends Component {

  render() {
    return (
      <footer id="footer" className="w3-container w3-padding-64 w3-center w3-opacity w3-xlarge" >
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
              <Image className="" centered size='small' src='http://www.clker.com/cliparts/p/i/0/Y/B/m/large-yellow-star-md.png' />
          </Grid.Column>
          <Grid.Column>
            <Image className="" centered size='small' src='http://www.pngall.com/wp-content/uploads/2/Rocket-PNG-Download-Image.png' />
          </Grid.Column>
          <Grid.Column>
            <Image className="" centered size='small' src='http://clipart-library.com/data_images/26276.png' />
          </Grid.Column>
        </Grid.Row>






      <Grid.Row columns={5}>
        <Grid.Column width={2}>
        <Link to="./Cosmic">
          <Icon name='calendar' size='large' />
        </Link>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='envelope' size='large' />
        </Grid.Column>
        <Grid.Column width={8}>
         <Image centered src={logo} size='large'/>
        </Grid.Column>
        <Grid.Column width={2}>
          <a href="https://www.facebook.com/planetplayny" target="_blank">
          <Icon name="facebook" size='large'/></a>
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='calendar' size='large' />
        </Grid.Column>
      </Grid.Row>






      <Grid.Row columns={4}>
       <Grid.Column className='footer3' >
         <List>
          <List.Item as={Link} to="">About Us </List.Item>
          <List.Item as={Link} to="">Policies </List.Item>
          <List.Item as={Link} to="">Waiver </List.Item>
          <List.Item as={Link} to="">Schedule</List.Item>
          <List.Item as={Link} to="">Open Play</List.Item>
          <List.Item as={Link} to="">Special Events</List.Item>
          <List.Item as={Link} to="">Classes</List.Item>
          <List.Item as={Link} to="">Calandar</List.Item>
         </List>
       </Grid.Column>
       <Grid.Column className='footer3'>
         <List>
          <List.Item as={Link} to='/'>Birthday Parties</List.Item>
          <List.Item as={Link} to="">Packages</List.Item>
          <List.Item as={Link} to="">Add-ons</List.Item>
          <List.Item as={Link} to="">Attractions</List.Item>
          <List.Item as={Link} to="">Jungle gym</List.Item>
          <List.Item as={Link} to="">Bounce House</List.Item>
          <List.Item as={Link} to="">Arcade</List.Item>
          <List.Item as={Link} to="">Galaxy Trading</List.Item>
         </List>
       </Grid.Column>
       <Grid.Column className='footer3'>
        <List>
         <List.Item as={Link} to="">Toddler Area</List.Item>
         <List.Item as={Link} to="">Cosmic Cafe</List.Item>
         <List.Item as={Link} to="">Connect with us</List.Item>
         <List.Item as={Link} to="">Facebook</List.Item>
         <List.Item as={Link} to="">Instagram</List.Item>
         <List.Item as={Link} to="">Sensitive Space Hours</List.Item>
         <List.Item as={Link} to="">Planet Play Home</List.Item>
        </List>
        </Grid.Column>
       <Grid.Column className='footer3 neonSilver'>
       <Header icon textAlign='center'>
     <Header.Content>418 Bedford Avenue Bellmore, NY 11710</Header.Content>
     <Header.Content>516-369-3260</Header.Content>
     <br></br>
     <Header.Content>Hours</Header.Content>
   </Header>
   <Container>Saturday & Sunday 10am - 9pm</Container>
   <Container>Monday & Wednesday 10am - 7pm</Container>
   <Container>Thursday Closed</Container>
   <Container>Friday 10am - 8pm</Container>
       </Grid.Column>
      </Grid.Row>
      </Grid>
      </footer>
    );
  }

}

export default Footer;
