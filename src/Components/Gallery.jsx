import React, { Component } from 'react';
import { Card, Icon, Image, Grid} from 'semantic-ui-react'


class Gallery extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=8481222760.9298471.64348a605e254531851e508b3df34e9b')
    .then(res => res.json())
    .then((data) => this.setState({data: data.data}))
  }

  render() {
    console.log('tester',this.state);

    let list = this.state.data.map(data => <Grid.Column>
      <Card key={data.id}>
      <a href="https://www.instagram.com/planetplayny" target="_blank">
        <Image src={data.images.standard_resolution.url} /></a>
      </Card>
      </Grid.Column>
    )
    return (
      <div className='grid'>
      <Grid columns={3} divided>
      {list}
      </Grid>
      </div>
    );
  }

}

export default Gallery;
