import React from 'react'
import {useState,useContext} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { LoginContext } from './Context';
import Axios from 'axios';

function Post_job_modal(props) {
  const [tuition_type,set_tuition_type]=useState('home tutoring')
  const [curriculum,set_curriculum]=useState('english medium')
  const [tutoring_time,set_tutoring_time]=useState('')
  const [no_of_days,set_no_of_days]=useState('')
  const [student_gender,set_student_gender]=useState('male')
  const [tutor_gender,set_tutor_gender]=useState('male')
  const [grade,set_grade]=useState(0)
  const [subjects,set_subjects]=useState('')
  const [salary,set_salary]=useState(0)
  const [location,set_location]=useState('')
  const {loggedin,set_logged_in}=useContext(LoginContext)

  const handle_submit=()=>{
    Axios.post('http://localhost:3005/post_job',{
      guardian_email: loggedin.user_email,
      tuition_type:tuition_type,
      curriculum:curriculum,
      tutoring_time:tutoring_time,
      no_of_days:no_of_days,
      student_gender:student_gender,
      tutor_gender:tutor_gender,
      grade:grade,
      subjects:subjects,
      salary:salary,
      location:location
    }).then(()=>
    {
      console.log("heyyyy it's the axios then")
    })
    props.onHide()
  }
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Make a post for searching a tutor
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Fill up the details</h4>
      <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>Select type of tuition</Form.Text>
      <Form.Select aria-label="Default select example" className="mb-2" onChange={(e)=>{set_tuition_type(e.target.value)}}>
                <option value="home tutoring">Home tutoring</option>
                <option value="online tutoring">Online tutoring</option>
      </Form.Select>
      <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>Select curriculum</Form.Text>
      <Form.Select aria-label="Default select example" className="mb-2" onChange={(e)=>{set_curriculum(e.target.value)}} >
                <option value="english medium">English medium</option>
                <option value="english version">English version</option>
                <option value="bangla version">Bangla version</option>
      </Form.Select>
      <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>Select tutoring time</Form.Text>
      <FloatingLabel controlId="floatingInput" label="Tutoring time" className="mb-3" onChange={(e)=>{set_tutoring_time(e.target.value)}}>
            <Form.Control type="time"  />
      </FloatingLabel>
      <Form.Group className="mb-2" controlId="No_of_days">
          <Form.Label style={{paddingLeft:'5px'}}>No. of days per week</Form.Label>
          <Form.Control type="number" placeholder="e.g 3" onChange={(e)=>{set_no_of_days(e.target.value)}}/>
      </Form.Group>
      <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>Student gender</Form.Text>
      <Form.Select aria-label="Default select example" className="mb-2" onChange={(e)=>{set_student_gender(e.target.value)}} >
                <option value="male">Male</option>
                <option value="female">Female</option>
      </Form.Select>
      <Form.Text style={{color:'black',fontSize:'16px',paddingLeft:'5px'}}>Preferred tutor gender</Form.Text>
      <Form.Select aria-label="Default select example" className="mb-2" onChange={(e)=>{set_tutor_gender(e.target.value)}}>
                <option value="male">Male</option>
                <option value="female">Female</option>
      </Form.Select>
      {/* <FloatingLabel controlId="Subjects" label="Physics,Chemistry,Maths" className="mb-2">
                <Form.Control type="text" placeholder="abc" />
      </FloatingLabel> */}
      <Form.Group className="mb-2" controlId="Grade">
          <Form.Label style={{paddingLeft:'5px'}}>Grade of Student</Form.Label>
          <Form.Control type="number" placeholder="e.g 3" onChange={(e)=>{set_grade(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label style={{paddingLeft:'5px'}}>Subjects</Form.Label>
          <Form.Control type="email" placeholder="Physics,Chemistry,Maths" onChange={(e)=>{set_subjects(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="Salary">
          <Form.Label style={{paddingLeft:'5px'}}>Salary</Form.Label>
          <Form.Control type="number" placeholder="e.g 5000" onChange={(e)=>{set_salary(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="Location">
          <Form.Label style={{paddingLeft:'5px'}}>Location</Form.Label>
          <Form.Control type="text" placeholder="Uttara sector 13,Dhaka" onChange={(e)=>{set_location(e.target.value)}}/>
      </Form.Group>
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
export default Post_job_modal
