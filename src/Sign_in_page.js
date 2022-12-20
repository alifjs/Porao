import React,{useState,useContext,useEffect} from 'react'
import {Link} from "react-router-dom"

// import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { LoginContext } from './Context';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import Footer from './Footer'
import porao_pic from './Porao_pic.jpg'
import Image from "react-bootstrap/Image";

function Sign_in_page() {
  let navigate = useNavigate();
  const [email,set_email]=useState('')
  const [password,set_password]=useState('')
  const [user_type,set_user_type]=useState('')
  const {loggedin,set_logged_in}=useContext(LoginContext)

  const handle_sign_in=()=>{
    if(user_type=='guardian'){
      Axios.get('http://localhost:3005/get_guardian_login_credentials')
      .then((response)=>{
        response.data.map((row)=>{
          if(row.email==email && row.password==password){
            set_logged_in({user_type:user_type,user_email:email})
            navigate('/guardian_home')
          }
        })
      })
    }else if(user_type=='tutor'){
      Axios.get('http://localhost:3005/get_tutor_login_credentials')
      .then((response)=>{
        response.data.map((row)=>{
          if(row.email==email && row.password==password){
            set_logged_in({user_type:user_type,user_email:email})
            navigate('/tutor_home')
          }
        })
      })
      
    }
  }
  return (
    <>
    <Container style={{height:"100vh"}}className='d-flex justify-content-center align-items-center'>
      <Row>
        <Col xs={7}>
          <Image src={porao_pic} fluid/>
        </Col>
        <Col>
          <Form className="fs-4 bg-primary p-5 round" style={{width:"500px",borderRadius:'5px'}} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{set_email(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{set_password(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text  style={{color:'black'}}>
              Are you a tutor or a guardian?
            </Form.Text>
            <Form.Check type="radio" name='user_type' value='tutor' label="tutor" onChange={(e)=>{set_user_type(e.target.value)}} />
            <Form.Check type="radio" name='user_type' value='guardian' label="guardian" onChange={(e)=>{set_user_type(e.target.value)}} />
          </Form.Group>
          <Button style={{background:'black'}}  onClick={handle_sign_in}>
            Sign in 
          </Button><br></br>
          <Link to="/sign_up" style={{color:'black'}}>Sign up</Link>
        </Form>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default Sign_in_page;