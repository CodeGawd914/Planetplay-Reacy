import React from 'react'
import {Icon, Menu, Dropdown ,Segment, Button } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';
import SubNavBar from './subNavBar'
const NavBar = () => {
  return (
    <React.Fragment className="ui stackable container menu" >

    <Segment attached id='topNav' textAlign='center'>
    <Menu  borderless fluid className="ui stackable container menu" inverted>
      <Menu.Item position="center">
      <a href="https://www.facebook.com/planetplayny" target="_blank">
        <Icon className="facebook"/></a>
      <a href="https://www.instagram.com/planetplayny" target="_blank">
        <Icon className="instagram"/></a>
      516 315 2628
      </Menu.Item>
      <Menu.Item position='right'>
        <Button as={Link} to='/Schedule#openPlay' id='card5'> <p className='neon1'>Book Your Party Now</p></Button>
      </Menu.Item>
    </Menu>
     </Segment>
    <Segment attached className="smooth" id='bottomNav'><SubNavBar/></Segment>
    </React.Fragment>
  )
}

export default NavBar
