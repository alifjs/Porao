import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Post_job_modal from './Post_job_modal';
import {useState,useContext,useEffect} from 'react'
import { LoginContext } from './Context';
import Axios from 'axios';
import Job_card from './Job_card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Contact_us_modal from './Contact_us_modal';

function Guardian_page() {
    let navigate = useNavigate();
    const [modalShow, setModalShow] =useState(false)
    const [contact_modalShow, set_contact_modalShow] =useState(false)
    let [all_tuition_jobs,set_all_tuition_jobs]=useState([])
    const {loggedin,set_logged_in}=useContext(LoginContext)

    useEffect(()=>{Axios.get(`http://localhost:3005/get_all_tuition_jobs_of_guardian/${loggedin.user_email}`)
    .then((response)=>{
        let dummy_all_tuition_jobs=[]
        response.data.map((row)=>{
            dummy_all_tuition_jobs.push({
                job_id:row.job_id,
                guardian_email:row.guardian_email,
                tuition_type:row.tuition_type,
                curriculum:row.curriculum,
                tutoring_time:row.tutoring_time,
                no_of_days:row.no_of_days,
                student_gender:row.student_gender,
                tutor_gender:row.tutor_gender,
                grade:row.grade,
                subjects:row.subjects,
                salary:row.salary,
                location:row.location
            })
        })
        set_all_tuition_jobs(dummy_all_tuition_jobs)
    })})

    const handle_logout=()=>{
        navigate('/')
    }
    return (
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand><h1>Porao</h1></Navbar.Brand>
            <Nav className='fs-4'>
                <Nav.Link href="#home">My posted jobs</Nav.Link>
                <Nav.Link onClick={() => setModalShow(true)}>Post a job</Nav.Link>
                <Nav.Link onClick={() => set_contact_modalShow(true)}>Contact us</Nav.Link>
                <Nav.Link href="#pricing" onClick={handle_logout}>Log out</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <Container>
            {/* <Button className='mt-5'variant="primary"  onClick={() => setModalShow(true)}>
                Post a job
            </Button><br/> */}
            {/* <Button className='mt-5'variant="primary" >
                My posted jobs
            </Button> */}
            <Container className="mt-5">
                {all_tuition_jobs.map((tuition_job)=>{
                    return <Job_card tuition_info={tuition_job} page='guardian_page'/>
                })}
            </Container>
            <Post_job_modal show={modalShow} onHide={() => setModalShow(false)}/>
            <Contact_us_modal show={contact_modalShow} onHide={() => set_contact_modalShow(false)}/>
        </Container>
    </>
    )
}
export default Guardian_page
