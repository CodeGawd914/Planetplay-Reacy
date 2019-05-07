import React, { Component } from 'react';
import {Header, Container, Icon } from 'semantic-ui-react'
class Contact extends Component {

  render() {
    return (
      <div id='start' className="w3-text-white smooth neon1h">
    <h1> We Are Open </h1>
  <Container>Saturday & Sunday 10am - 9pm</Container>
  <Container>Monday & Wednesday 10am - 7pm</Container>
  <Container>Thursday Closed</Container>
  <Container>Friday 10am - 8pm</Container>
  <Header icon textAlign='center'>
  <Header.Content>418 Bedford Avenue Bellmore, NY 11710</Header.Content>
  <Header.Content>516-369-3260</Header.Content>
  <Container><a href="https://www.facebook.com/planetplayny" target="_blank">
    <Icon className="facebook"/></a>
  <a href="https://www.instagram.com/planetplayny" target="_blank">
    <Icon className="instagram"/></a></Container>
<br></br>
</Header>

  </div>
    );
  }

}

export default Contact;
