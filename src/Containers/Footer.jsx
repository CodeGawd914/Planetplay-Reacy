
import React, { Component } from 'react';
import {Grid,Segment, Image, List,Icon, Header, Container } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/logoLong.jpg'
import planet from '../images/Planet.png'
import rocket from '../images/Rocket.png'
import ufo from '../images/UFO.png'
import star from '../images/StarBorder.png'



class Footer extends Component {

  render() {
    return (
      <React.Fragment>
    <span className="myClass" style={{width: '100%',float : 'left', paddingRight : '5px'}} > <img src={star}/> <img src={star}/><img src={star}/></span>


      <footer id="footer" className="w3-container w3-text-pink w3-padding-64 w3-center w3-xlarge" >
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
        <br></br><br></br><br></br><br></br>
          <Icon name='calendar' size='large' />
        </Link>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
          <Icon name='envelope' size='large' />
        </Grid.Column>
        <Grid.Column width={8}>
         <Image centered src={logo} size='large'/>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
          <a href="https://www.facebook.com/planetplayny" target="_blank">
          <Icon name="facebook" size='large'/></a>
        </Grid.Column>
        <Grid.Column width={2}>
        <br></br><br></br><br></br><br></br>
          <a href="https://www.instagram.com/planetplayny" target="_blank">
          <Icon name="instagram" size='large'/></a>
        </Grid.Column>
      </Grid.Row>






      <Grid.Row className='w3-text-pink' relaxed='very' columns={4}>
       <Grid.Column className='KGN' >
         <List>
          <Link to="/AboutUs#about"><List.Item>About Us </List.Item> </Link>
          <Link to="/AboutUs#Policies"><List.Item>Policies</List.Item></Link>
          <Link to="/Waiver#wave"><List.Item>Waiver</List.Item></Link>
          <Link to="/Schedule#openPlay"><List.Item>Schedule</List.Item></Link>
          <Link to="/Schedule#openPlay"><List.Item>Open Play</List.Item></Link>
          <Link to="/Schedule#Events"><List.Item>Special Events</List.Item></Link>
          <Link to="/Schedule#classes"><List.Item>Classes</List.Item></Link>
          <Link to="/Schedule#calendar"><List.Item>Calendar</List.Item></Link>
         </List>
       </Grid.Column>
       <Grid.Column className='KGN'>
         <List>
         <Link to="/BdayParties#para"><List.Item>Birthday Parties</List.Item></Link>
         <Link to="/BdayParties#Packages"><List.Item>Packages</List.Item></Link>
         <Link to="/BdayParties#Add"><List.Item>Add-ons</List.Item></Link>
         <Link to="/Attractions#attract"><List.Item>Attractions</List.Item></Link>
         <Link to="/Attractions#Jungle"><List.Item>Jungle Gym</List.Item></Link>
         <Link to="/Attractions#Bounce"><List.Item>Bounce House</List.Item></Link>
         <Link to="/Attractions#Arcade"><List.Item>Arcade</List.Item></Link>
         <Link to="/Attractions#Trading"><List.Item>Galaxy Trading</List.Item></Link>
         </List>
       </Grid.Column>
       <Grid.Column className='KGN'>
        <List>
         <Link to="/Attractions#Toddler"><List.Item>Toddler Area</List.Item></Link>
         <Link to="/Attractions#Cosmic"><List.Item>Cosmic Cafe</List.Item></Link>
         <Link to="/Contact#start"><List.Item>Connect With Us</List.Item></Link>
         <List.Item> <a href="https://www.facebook.com/planetplayny" target="_blank">Facebook</a></List.Item>
         <List.Item> <a href="https://www.instagram.com/planetplayny" target="_blank">Instagram</a></List.Item>
         <Link to="/Schedule#Sss"><List.Item>Sensitive Space Hours</List.Item></Link>
         <Link to="/home"><List.Item>Planet Play Home</List.Item></Link>
        </List>
        </Grid.Column>
       <Grid.Column className='footer3 smooth w3-text-white neon1h'>
        <List>
        <List.Item textAlign='center' className='w3-text-white'> 418 Bedford Avenue Bellmore, NY 11710</List.Item>
        <List.Item>516-369-3260</List.Item>
      <br></br>
        <List.Item>Hours</List.Item>
     <br></br>
        <List.Item>Saturday & Sunday 10am - 9pm</List.Item>
        <List.Item>Monday & Wednesday 10am - 7pm</List.Item>
        <List.Item>Thursday Closed</List.Item>
        <List.Item>Friday 10am - 8pm</List.Item>
        </List>
       </Grid.Column>
      </Grid.Row>
      </Grid>
      </footer>
    </React.Fragment>
    );
  }

}

export default Footer;
