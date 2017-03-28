import React from 'react';
import { Modal, Button } from 'react-bootstrap/lib/';

const PokemonModal = ({toggleModal, showModal, pokemon}) => {
  return (
    <div>
    <Button
         bsStyle="primary"
         bsSize="large"
         onClick={() => this.setState({ show: true})}
       >
         Launch contained modal
       </Button>

       <Modal
         show={this.state.show}
         onHide={close}
         container={this}
         aria-labelledby="contained-modal-title"
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={close}>Close</Button>
         </Modal.Footer>
       </Modal>
  )
}

export default PokemonModal
