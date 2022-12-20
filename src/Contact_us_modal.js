import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Contact_us_modal(props) {
    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h4>Send us a message</h4>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your email :</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                    <Form.Label>Your phone number :</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Your message :</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder='Type your message'/>
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default Contact_us_modal