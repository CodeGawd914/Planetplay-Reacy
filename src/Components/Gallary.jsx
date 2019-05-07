import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


class Gallary extends Component {
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

    let list = this.state.data.map(data =>
      <Card key={data.id}>
      <Image src={data.images.standard_resolution.url} />
      <Card.Content>
      <Card.Header>{data.caption.text}</Card.Header>
    </Card.Content>
      </Card>
    )
    return (
      <div className='grid'>
      {list}
      </div>
    );
  }

}

export default Gallary;
