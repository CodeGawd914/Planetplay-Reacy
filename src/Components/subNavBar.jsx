import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {Icon, Menu, Dropdown, Image, Segment } from 'semantic-ui-react'
import logo from '../images/logo-round.jpg'

const SubNavBar = () => {
  return (
    <Menu borderless fluid className="ui stackable container menu" inverted size='huge'>
      <Link to="/">
          <Menu.Item position='left'>
             <Image src={logo} size='tiny'/>
          </Menu.Item>
      </Link>
          <Menu.Menu position='right' className='smooth'>
            <Dropdown as={Link} item simple text='About Us' to="/AboutUs">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text="About Us" to='/AboutUs'/>
                <Dropdown.Item as={Link} text='Waiver' to='/Waiver'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown  item simple text='Schedule' >
              <Dropdown.Menu >
                <Dropdown.Item as={Link} text="Open Play" to='/Schedule#openPlay'/>
                <Dropdown.Item as={Link} text="Special Events" to='/Schedule#Events'/>
                <Dropdown.Item as={Link} text="Classes" to='/Schedule#classes'/>
                <Dropdown.Item as={Link} text="Calandar" to='/Schedule#calendar'/>
                <Dropdown.Item as={Link} text="Sensitive Space Hours" to='/Schedule#Sss'/>
              </Dropdown.Menu>
            </Dropdown>
          <Dropdown item text='Birthday Parties'>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/BdayParties' text='Birthday Parties'></Dropdown.Item>
              <Dropdown.Item as={Link} text='Packages' to='/BdayParties#Packages'/>
              <Dropdown.Item as={Link} text='Add-ons' to='/BdayParties#AddOns'/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Attractions'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>

              <Dropdown.Item as={Link} text='Attractions' to='/Attractions'/>
              <Dropdown.Item as={Link} text='Jungle Gym' to='/Attractions#Jungle'/>
              <Dropdown.Item as={Link} text='Bounce House' to='/Attractions#Bounce'/>
              <Dropdown.Item as={Link} text='Arcade' to='/Attractions#Arcade'/>
              <Dropdown.Item as={Link} text='Galaxy Trading' to='/Attractions#Trading'/>
              <Dropdown.Item as={Link} text='Toddler Area' to='/Attractions#Toddler'/>
              <Dropdown.Item as={Link} text='Cosmic Cafe' to='/Attractions#Cosmic'/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Connect With Us'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item as={Link} text='Contact Us' to='/Contact'/>
              <Dropdown.Item as={Link} text='Gallery' to='/Gallary'/>
            </Dropdown.Menu>
          </Dropdown>


          </Menu.Menu>
        </Menu>
  )
}

export default SubNavBar
