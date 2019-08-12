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
        <h1 className='w3-text-white neon1'>Cosmic Cafe</h1>
      </div>
      <br></br>
      <p>Cosmic Cafe is a space for caregivers to sit, relax, and enjoy a treat or two, while their children play. Choose from a selection of carefully brewed coffees, espressos or teas. Our menu changes from day to day but it typically includes a variety of baked goods, healthy snack options, and some guilty pleasures! We are a nut-free facility, so everything here is free of peanuts and tree nuts.</p>
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
