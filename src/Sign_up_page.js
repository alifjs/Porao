import React from 'react'
import {useState} from 'react'
// import {Link} from "react-router-dom"

// import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Tutor_signup_modal from './Tutor_signup_modal';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function Sign_up_page() {
    let navigate = useNavigate();
    const [name,set_name]=useState('')
    const [number,set_number]=useState('')
    const [email,set_email]=useState('')
    const [password,set_password]=useState('')
    const [user_type,set_user_type]=useState('')
    const [modalShow, setModalShow] = useState(false);
    const [info,setInfo]=useState({})

    const handle_sign_up=()=>{
        if(user_type=='tutor'){
            setModalShow(true)
            setInfo({
                name:name,
                number:number,
                email:email,
                password:password
            })
        }else if(user_type=='guardian'){
            Axios.post('http://localhost:3005/guardian_sign_up',{
                name:name,
                number:number,
                email:email,
                password:password
              }).then(()=>
              {
                console.log("heyyyy it's the axios then")
              })
            navigate('/')
        }
    }
    return (
    <Container style={{height:"100vh"}}className='d-flex justify-content-center align-items-center'>
    <Form className="fs-4 bg-primary p-5 round" style={{width:"500px",borderRadius:'5px'}} >
        <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"  onChange={(e)=>{set_name(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Phone_number">
            <Form.Label>Phone number </Form.Label>
            <Form.Control type="tel"  onChange={(e)=>{set_number(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{set_email(e.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{set_password(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text  style={{color:'black'}}>
            Are you a tutor or a guardian?
            </Form.Text>
            <Form.Check type="radio" name='user_type' value='tutor' label="Tutor" onChange={(e)=>{set_user_type(e.target.value)}}/>
            <Form.Check type="radio" name='user_type' value='guardian' label="Guardian" onChange={(e)=>{set_user_type(e.target.value)}}/>
        </Form.Group>
        <Button style={{background:'black'}}  onClick={handle_sign_up}>
            Sign up
        </Button>
        <Tutor_signup_modal tutor_info={info} show={modalShow} onHide={()=>setModalShow(false)}
      />
        {/* <Link to="/sign_up">Sign up</Link> */}
    </Form>
    </Container>
    )
}
export default Sign_up_page;