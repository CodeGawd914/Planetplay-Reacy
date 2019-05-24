import React from 'react';
import { Button, Form, Message, Icon,Input } from 'semantic-ui-react'
import validator from 'validator'
export default class Subscribe extends React.Component {

  state ={
    email:''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
render() {
  console.log(this.state.email);
    return (
      <Form onSubmit={e=>this.props.onSubmit(e,this.state.email)}>
        <Form.Group widths='equal'>
          <Form.Field control={Input} name='email' value={this.state.email} onChange={this.handleChange} label='Email Address' placeholder='Email Address' />
        </Form.Group>
      <Button disabled={!validator.isEmail(this.state.email)}><Icon name='checkmark' /> Join Now</Button>
    </Form>
    );
  }
}
