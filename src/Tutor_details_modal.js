import React from 'react'
import {useState,useContext} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { LoginContext } from './Context';
import Axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tutor_details_modal(props) {
    // const {modal_tutor}=props
    const {tutor_id,name,number,email,ssc_school,ssc_group,ssc_gpa,hsc_school,hsc_group,hsc_gpa,uni_name,cgpa}=props.modal_tutor
    const {page}=props

    const handle_select_tutor=()=>{
        Axios.post('http://localhost:3005/post_selected_tutor',{
            job_id : props.job_id,
            tutor_email : email
        }).then(()=>
        {
            console.log("heyyyy it's the axios then")
        })
        props.onHide()
    }
    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter"centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            {name} <span style={{opacity:'0.7'}}>(Tutor id : {tutor_id})</span>
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container style={{fontSize:'18px'}}>
                <Row className='mb-5 mt-3'>
                    <Col><span style={{opacity:'0.7'}}>Phone number : </span><br/>{number}</Col>
                    <Col><span style={{opacity:'0.7'}}>Email : </span><br/> {email}</Col>
                    <Col><span style={{opacity:'0.7'}}>SSC school :</span><br/> {ssc_school}</Col>
                    <Col><span style={{opacity:'0.7'}}>SSC group : </span><br/> {ssc_group}</Col>
                </Row>
                <Row className='mb-5'>
                    <Col><span style={{opacity:'0.7'}}>SSC gpa : </span><br/> {ssc_gpa}</Col>
                    <Col><span style={{opacity:'0.7'}}>HSC school : </span><br/> {hsc_school}</Col>
                    <Col><span style={{opacity:'0.7'}}>HSC group : </span><br/> {hsc_group}</Col>
                    <Col><span style={{opacity:'0.7'}}>HSC gpa : </span><br/> {hsc_gpa}</Col>
                </Row>
                <Row>
                    <Col><span style={{opacity:'0.7'}}>University name : </span><br/> {uni_name}</Col>
                    <Col><span style={{opacity:'0.7'}}>Cgpa: </span><br/> {cgpa}</Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
        {page=='admin_page' &&
            <Button onClick={handle_select_tutor}>Select tutor</Button>
        }
        </Modal.Footer>
    </Modal>
    )
}
export default Tutor_details_modal