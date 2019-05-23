import React, { Component } from 'react';
import {Table, Icon, Segment } from 'semantic-ui-react'
import Events from "../Components/Events"
import Classes from '../Components/Classes'
import Calendar from '../Components/Calendar'


class Schedule extends Component {

  render() {
    return (
      <div>
      <Table celled structured color='teal' inverted>
    <Table.Header>
      <Table.Row id="openPlay">
        <Table.HeaderCell rowSpan='2'>Deal</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'></Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>People</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>Activities</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Ruby</Table.HeaderCell>
        <Table.HeaderCell>JavaScript</Table.HeaderCell>
        <Table.HeaderCell>Python</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Alpha Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>2</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 2</Table.Cell>
        <Table.Cell textAlign='right'>12</Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 3</Table.Cell>
        <Table.Cell textAlign='right'>21</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      </Table.Body>
</Table>
  <br></br>
    <br></br>
      <br></br>
        <br></br>
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
