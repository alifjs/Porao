import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useState} from 'react'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function Tutor_signup_modal(props) {
    let navigate = useNavigate();
    const [ssc_school,set_ssc_school]=useState('')
    const [ssc_group,set_ssc_group]=useState('science')
    const [ssc_gpa,set_ssc_gpa]=useState(0)
    const [hsc_school,set_hsc_school]=useState('')
    const [hsc_group,set_hsc_group]=useState('science')
    const [hsc_gpa,set_hsc_gpa]=useState(0)
    const [uni_name,set_uni_name]=useState('')
    const [cgpa,set_cgpa]=useState(0)
    const {tutor_info}=props
    // setInfo({
    //     name:name,
    //     number:number,
    //     email:email,
    //     password:password
    // })
    const handle_submit=()=>{
        Axios.post('http://localhost:3005/tutor_sign_up',{
            name:tutor_info.name,
            number:tutor_info.number,
            email:tutor_info.email,
            password:tutor_info.password,
            ssc_school:ssc_school,
            ssc_group:ssc_group,
            ssc_gpa:ssc_gpa,
            hsc_school:hsc_school,
            hsc_group:hsc_group,
            hsc_gpa:hsc_gpa,
            uni_name:uni_name,
            cgpa:cgpa
        }).then(()=>
        {
          console.log("heyyyy it's the axios then")
        })
        props.onHide()
        navigate('/')
    }
    return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Sign up as a tutor
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Fill up the details in the form</h4>
            <h5 className='ps-1'>SSC</h5>
            <FloatingLabel controlId="SSC_school_name" label="SSC school name" className="mb-2">
                <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{set_ssc_school(e.target.value)}}/>
            </FloatingLabel>
            <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>SSC group</Form.Text>
            <Form.Select aria-label="Default select example" className="mb-2" onChange={(e)=>set_ssc_group(e.target.value)}>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
            </Form.Select>
            <FloatingLabel controlId="SSC_gpa" label="SSC gpa" className="mb-2">
                <Form.Control type="number" placeholder="Password" onChange={(e)=>{set_ssc_gpa(e.target.value)}}/>
            </FloatingLabel>
            {/* HSC */}
            <h5 className='ps-1'>HSC</h5>
            <FloatingLabel controlId="HSC_school_name" label="HSC school name" className="mb-2">
                <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{set_hsc_school(e.target.value)}}/>
            </FloatingLabel>
            <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>HSC group</Form.Text>
            <Form.Select aria-label="Default select example" className="mb-2"  onChange={(e)=>set_hsc_group(e.target.value)}>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
            </Form.Select>
            <FloatingLabel controlId="HSC_gpa" label="HSC gpa" className="mb-2">
                <Form.Control type="number" placeholder="Password" onChange={(e)=>{set_hsc_gpa(e.target.value)}}/>
            </FloatingLabel>
            {/* University */}
            <h5 className='ps-1'>University</h5>
            <FloatingLabel controlId="University_name" label="University name" className="mb-2">
                <Form.Control type="text" placeholder="Password" onChange={(e)=>{set_uni_name(e.target.value)}}/>
            </FloatingLabel>
            <FloatingLabel controlId="Current_cgpa" label="Current cgpa" className="mb-2">
                <Form.Control type="number" placeholder="Password" onChange={(e)=>{set_cgpa(e.target.value)}}/>
            </FloatingLabel>
            <Button variant="primary" type="submit" onClick={handle_submit}>
                Submit
            </Button>

        </Modal.Body>
        <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
    )
}
export default Tutor_signup_modal