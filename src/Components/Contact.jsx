import React, { Component } from 'react';
import {Header, Container, Icon, Form, Input, TextArea, Checkbox, Button, List} from 'semantic-ui-react'
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
      <div id='start' className="w3-text-white smooth neon1q">
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
        <Form.Field control={Input} name='email' value={this.state.email} onChange={this.handleChange} label='Email Address' placeholder='Email Address' />
      </Form.Group>
      <Form.Field control={TextArea} name='comment' value={this.state.comment} onChange={this.handleChange} label='Comments & Questions' placeholder='Tell us what you think' />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
    <Gallery/>
    </div>
  </div>
    );
  }

}

export default Contact;
