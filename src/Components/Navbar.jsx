import React from 'react'
import {Icon, Menu, Dropdown ,Segment } from 'semantic-ui-react'
import SubNavBar from './subNavBar'
const NavBar = () => {
  return (
    <div className="ui stackable container menu" >

    <Segment attached id='topNav' textAlign='center'>
    <a href="https://www.facebook.com/planetplayny" target="_blank">
      <Icon className="facebook"/></a>
    <a href="https://www.instagram.com/planetplayny" target="_blank">
      <Icon className="instagram"/></a>
    Phone Number Here</Segment>
    <Segment attached className="smooth" id='bottomNav'><SubNavBar/></Segment>
    </div>
  )
}

export default NavBar
