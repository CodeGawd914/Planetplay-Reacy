import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { HashLink as Link } from 'react-router-hash-link';

export default class BlurAdd extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  componentDidMount(){
    this.setState({modalOpen:true})
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
          <h3>Click join to become a part of PlanetPLay's mailing list </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button as={Link} to="/Classes" color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Join Now
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
