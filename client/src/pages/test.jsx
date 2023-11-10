import { useState } from 'react';
import ButtonBootstrap from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalBootstrap from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBootstrap variant="primary" onClick={handleShow}>
        Launch demo modal
      </ButtonBootstrap>

      <ModalBootstrap show={show} onHide={handleClose}>
        <ModalBootstrap.Header closeButton>
          <ModalBootstrap.Title>Modal heading</ModalBootstrap.Title>
        </ModalBootstrap.Header>
        <ModalBootstrap.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </ModalBootstrap.Body>
        <ModalBootstrap.Footer>
          <ButtonBootstrap variant="secondary" onClick={handleClose}>
            Close
          </ButtonBootstrap>
          <ButtonBootstrap variant="primary" onClick={handleClose}>
            Save Changes
          </ButtonBootstrap>
        </ModalBootstrap.Footer>
      </ModalBootstrap>
    </>
  );
}

export default Example;