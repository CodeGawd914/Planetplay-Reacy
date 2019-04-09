import React, { Component } from 'react';
import {Grid, Image, Card, Icon} from 'semantic-ui-react'
import logo from '../images/logo-round.jpg'

class Cosmic extends Component {


  render() {
    const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)
    return (
      <React.Fragment className="cards">
      <div>
        <h1 className='w3-text-white neon1'>Welcome to Cosmic Cafe</h1>
      </div>
      <br></br>
      <Grid>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card
          color='red'
          image={"https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"}
          header='Cosmic Pie'
          meta=''
          description='Pizza from out of this world'
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card
          color='red'
          image={"https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"}
          header='Cosmic Pie'
          meta=''
          description='Pizza from out of this world'
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card
          color='red'
          image={"https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"}
          header='Cosmic Pie'
          meta=''
          description='Pizza from out of this world'
          />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={4}>
        <Card
          color='red'
          image={"https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg"}
          header='Cosmic Pie'
          meta=''
          description='Pizza from out of this world'
          />
        </Grid.Column>
      </Grid>
      </React.Fragment>







    );
  }

}

export default Cosmic ;
