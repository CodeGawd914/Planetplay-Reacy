import React, { Component } from 'react'
import NewsLetter from './newsLetter'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';

export default class BlurAdd extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount(){
    if (this.props.email === ''){
      this.setState({modalOpen:true})
    }
    }


  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='PlanetPlay' />
        <Modal.Content>
          <NewsLetter  onSubmit={this.props.onSubmit}/>
        </Modal.Content>
      </Modal>
    )
  }
}
