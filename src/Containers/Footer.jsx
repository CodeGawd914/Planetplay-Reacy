import React, { Component } from 'react';
import {Grid, Image, List,Icon, Header, Container } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logoLong.jpg'
import planet from '../images/Planet.png'
import rocket from '../images/Rocket.png'
import ufo from '../images/UFO.png'



class Footer extends Component {

  render() {
    return (
      <footer id="footer" className="w3-container w3-padding-64 w3-center w3-text-pink w3-opacity w3-xlarge" >
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column   width={6}>
              <Image className="" centered size='big' src={ufo}/>
          </Grid.Column>
          <Grid.Column  width={4}>
            <Image className="" centered size='big' src={rocket}/>
          </Grid.Column>
          <Grid.Column  width={6}>
            <Image className="" centered size='big' src={planet} />
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
          <List.Item as={Link} to="/AboutUs#about">About Us </List.Item>
          <List.Item as={Link} to="/AboutUs#Policies">Policies</List.Item>
          <List.Item as={Link} to="/Waiver#wave">Waiver </List.Item>
          <List.Item as={Link} to="/Schedule#openPlay">Schedule</List.Item>
          <List.Item as={Link} to="/Schedule#openPlay">Open Play</List.Item>
          <List.Item as={Link} to="/Schedule#Events">Special Events</List.Item>
          <List.Item as={Link} to="/Schedule#classes">Classes</List.Item>
          <List.Item as={Link} to="/Schedule#calendar">Calendar</List.Item>
         </List>
       </Grid.Column>
       <Grid.Column className='footer3'>
         <List>
          <List.Item as={Link} to='/BdayParties#para'>Birthday Parties</List.Item>
          <List.Item as={Link} to="/BdayParties#Packages">Packages</List.Item>
          <List.Item as={Link} to="/BdayParties#Add">Add-ons</List.Item>
          <List.Item as={Link} to="/Attractions#attract">Attractions</List.Item>
          <List.Item as={Link} to="/Attractions#Jungle">Jungle gym</List.Item>
          <List.Item as={Link} to="/Attractions#Bounce">Bounce House</List.Item>
          <List.Item as={Link} to="/Attractions#Arcade">Arcade</List.Item>
          <List.Item as={Link} to="/Attractions#Trading">Galaxy Trading</List.Item>
         </List>
       </Grid.Column>
       <Grid.Column className='footer3'>
        <List>
         <List.Item as={Link} to="/Attractions#Toddler">Toddler Area</List.Item>
         <List.Item as={Link} to="/Attractions#Cosmic">Cosmic Cafe</List.Item>
         <List.Item as={Link} to="/Contact#start">Connect with us</List.Item>
         <List.Item> <a href="https://www.facebook.com/planetplayny" target="_blank">Facebook</a></List.Item>
         <List.Item> <a href="https://www.instagram.com/planetplayny" target="_blank">Instagram</a></List.Item>
         <List.Item as={Link} to='/Schedule#Sss'>Sensitive Space Hours</List.Item>
         <List.Item as={Link} to="/home">Planet Play Home</List.Item>
        </List>
        </Grid.Column>
       <Grid.Column className='footer3 smooth w3-text-white neon1h'>
       <Header icon textAlign='center' className='w3-text-white'>
     <Header.Content className='w3-text-white'>418 Bedford Avenue Bellmore, NY 11710</Header.Content>
     <Header.Content className='w3-text-white'>516-369-3260</Header.Content>
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
