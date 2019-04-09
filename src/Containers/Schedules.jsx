import React, { Component } from 'react';
import {Table, Icon } from 'semantic-ui-react'
import Events from "../Components/Events"



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


  <Events id='Events'/>
  <div id='classes'>
    <h1> Testing for componneteadfsefoseisoegi</h1>
  </div>
  <div id='calendar'>
  <h1> Testing for componneteadfsefoseisoegi</h1>
  </div>
  <div id='Sss'>
  <h1> Testing for componneteadfsefoseisoegi</h1>
  </div>
      </div>
    );
  }

}

export default Schedule;
