import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import {Table, Icon, Segment, Image, Button } from 'semantic-ui-react'
import Events from "../Components/Events"
import Classes from '../Components/Classes'
import Calendar from '../Components/Calendar'
import header from '../images/Header.jpeg'


class Schedule extends Component {

  render() {
    return (
      <div>
        <div>
            <Image style={{width:1000, height: 240}} src={header}  verticalAlign='top'/>
        </div>
        <br></br><br></br>
      <Table id="card3" unstackable>
     <Table.Header>
       <Table.Row >
         <Table.HeaderCell id="card3" >Open Play Schedule</Table.HeaderCell>

       </Table.Row>
     </Table.Header>

     <Table.Body>
       <Table.Row>
         <Table.Cell>Mini Milky Way</Table.Cell>
         <Table.Cell>Up to 6 years old</Table.Cell>
         <Table.Cell textAlign='right'>Schedule</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>All Age Astronauts</Table.Cell>
         <Table.Cell>For all ages</Table.Cell>
         <Table.Cell textAlign='right'>Schedule</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>Sensitive Space</Table.Cell>
         <Table.Cell>For all ages</Table.Cell>
         <Table.Cell textAlign='right'>Schedule</Table.Cell>
       </Table.Row>
     </Table.Body>
   </Table>
  <br></br>
    <br></br>
    <p>*Schedule is subject to change due to holidays and school breaks. Always check our calendar prior to coming for open play*
 </p>
      <br></br>
      <Table id="card3" unstackable>
     <Table.Header>
       <Table.Row >
         <Table.HeaderCell id="card3" >Open Play Pricing</Table.HeaderCell>

       </Table.Row>
     </Table.Header>

     <Table.Body>
       <Table.Row>
         <Table.Cell>Regular Admission</Table.Cell>
         <Table.Cell>$20 per child, includes a $5 arcade card</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>Crawlers</Table.Cell>
         <Table.Cell>$13</Table.Cell>
       </Table.Row>
       <Table.Row>
         <Table.Cell>Adults</Table.Cell>
         <Table.Cell>Free*</Table.Cell>
       </Table.Row>
     </Table.Body>
   </Table>
        <br></br>
        <div>
          <h1>BUY A PLANET PASS AND SAVE!</h1>
            <h2>$200</h2>
              <p>Purchase your Planet Pass and receive 12 admissions for the price of 10,  plus a $50 arcade card</p>
                <Button as={Link} to='/Schedule#openPlay' id='card5'> <p className='neon1'>Book Your Party Now</p></Button>
        </div>
<br></br><br></br>
        <div>
        <h1 className='smooth w3-text-white'> Mini MilkyWay Playtime</h1>
        <p className="w3-left-align KGN">
           At Planet Play, offers 2 hours where children 6 years of age and younger can have the facility to themselves to play, climb, explore and more! Our youngest cadets will be full of smiles while they socialize and get some exercise.
          <br></br>
        <p className='w3-center'><i>Please be advised that we will not allow children over the age of 6 in the facility at this time,</i>
        </p>
        </p>
    <br></br>
        <h1 className='smooth w3-text-white'> Mini MilkyWay Playtime</h1>
        <p className="w3-left-align KGN">
    All Age Astronauts Playtime: All Age Astronauts offers 2 hours where children of all ages can come and play in our facility. With a variety of attractions, we have something for everyone. A toddler section, arcade, bounce house, and jungle gym, are sure to keep your entire family entertained!
        </p>
    <br></br><br></br>
    <h1 className='smooth w3-text-white'>Sensitive Space Playtime</h1>
      <p className="w3-left-align KGN"> Sensitive Space offers 2 hours where peers with similar abilities can engage in functional play, have fun, and just be themselves without judgement. Children of all ages can strengthen their social skills and explore in sensory fun, whether it’s climbing through our 700 square foot jungle gym, or bouncing on our inflatable. Noise reduction headphones will be offered along with lower music, dimmed lights, and no loud ball blaster. Experienced staff will help to engage our special children and their siblings to have a BLAST in our clean and safe environment!
        </p>
        </div>
          <br></br><br></br>
    <div id='Events'>
    <Events/>
    </div>
    <br></br>
      <br></br>
        <br></br>
          <br></br>
  <div id='classes'>
  <Classes/>
  </div>
    <br></br>
      <br></br>
        <br></br>
          <br></br>
  <div id='calendar'>
  <Segment  color='blue' inverted attached>
    <Calendar/>
  </Segment>
  </div>
  <br></br>
    <br></br>
      <br></br>
        <br></br>
  <div id='Sss'>
  <Segment color='green' inverted >
  <h1> Testing for non attached segment</h1>
  </Segment>
  </div>
      </div>
    );
  }

}

export default Schedule;
