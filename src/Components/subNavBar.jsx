import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {Icon, Menu, Dropdown, Image, Segment } from 'semantic-ui-react'
import logo from '../images/logo-round.jpg'

const SubNavBar = () => {
  return (
    <Menu  className="ui stackable container menu" inverted size='huge'>
      <Link to="/">
          <Menu.Item position='left'>
             <Image src={logo} size='tiny'/>
          </Menu.Item>
      </Link>
          <Menu.Menu position='right'>
            <Dropdown item simple text='About Us'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text="About Us" to='/AboutUs'/>
                <Dropdown.Item as={Link} text='Waiver' to='Waiver'/>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item simple text='Schedule'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} text="Open Play" to='/Schedule#openPlay'/>
                <Dropdown.Item as={Link} text="Special Events" to='/Schedule#Events'/>
                <Dropdown.Item as={Link} text="Classes" to='/Schedule#classes'/>
                <Dropdown.Item as={Link} text="Calandar" to='/Schedule#calendar'/>
                <Dropdown.Item as={Link} text="Sensitive Space Hours" to='/Schedule#Sss'/>
              </Dropdown.Menu>
            </Dropdown>
          <Dropdown as={Link} to='/BdayParties' item text='Birthday Parties'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item as={Link} text='Attractions' to='/Events'/>
              <Dropdown.Item as={Link} text='Classes' to='/Classes'/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Attractions'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item as={Link} text='Attractions' to='/Events'/>
              <Dropdown.Item as={Link} text='Classes' to='/Classes'/>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Connect With Us'>
            <Dropdown.Menu>
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item as={Link} text='Attractions' to='/Events'/>
              <Dropdown.Item as={Link} text='Classes' to='/Classes'/>
            </Dropdown.Menu>
          </Dropdown>


          </Menu.Menu>
        </Menu>
  )
}

export default SubNavBar
