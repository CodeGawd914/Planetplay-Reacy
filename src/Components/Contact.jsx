import React, { Component } from 'react';
import {Header, Container, Icon, Form, Input, TextArea, Checkbox, Button} from 'semantic-ui-react'
import Gallery from './Gallery'

class Contact extends Component {

  state ={
    email:'',
    comment:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitEmail=()=>{

  }

  render() {
    console.log(this.state);
    return (
      <div id='start' className="w3-text-white smooth neon1h">
  <Container>Saturday & Sunday 10am - 9pm</Container>
  <Container>Monday & Wednesday 10am - 7pm</Container>
  <Container>Thursday Closed</Container>
  <Container>Friday 10am - 8pm</Container>
  <Header icon textAlign='center'>
  <Header.Content>418 Bedford Avenue Bellmore, NY 11710</Header.Content>
  <Header.Content>516-369-3260</Header.Content>
  </Header>
    <div>
      <a href="https://www.facebook.com/planetplayny" target="_blank">
      <Icon size='huge' className="facebook"/></a>
      <a href="https://www.instagram.com/planetplayny" target="_blank">
      <Icon size='huge' className="instagram"/></a>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>
    <Form>
      <Form.Group widths='equal'>
        <Form.Field control={Input} name='email' value={this.state.email} onChange={this.handleChange} label='Email Adress' placeholder='Email Adress' />
      </Form.Group>
      <Form.Field control={TextArea} name='comment' value={this.state.comment} onChange={this.handleChange} label='Comments & Questions' placeholder='Tell us what you think' />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
    <br></br>
    <br></br>
    <Gallery/>
    </div>
  </div>
    );
  }

}

export default Contact;
