import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios';
import Job_card from './Job_card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import Contact_us_modal from './Contact_us_modal';

function Tutor_page() {
    let [all_tuition_jobs,set_all_tuition_jobs]=useState([])
    let navigate = useNavigate();
    const [contact_modalShow, set_contact_modalShow] =useState(false)

    useEffect(()=>{Axios.get('http://localhost:3005/get_all_tuition_jobs')
    .then((response)=>{
        let dummy_all_tuition_jobs=[]
        response.data.map((row)=>{
            // console.log(row.job_id)
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
                    <Nav.Link href="#home">Job board</Nav.Link>
                    <Nav.Link href="#post" onClick={() => set_contact_modalShow(true)}>Contact us</Nav.Link>
                    <Nav.Link href="#pricing" onClick={handle_logout}>Log out</Nav.Link>
                </Nav>
                </Container>
            </Navbar>     
            <Container className="mt-5">
                {all_tuition_jobs.map((tuition_job)=>{
                    return <Job_card tuition_info={tuition_job} page='tutor_page'/>
                })}
            </Container>
            <Contact_us_modal show={contact_modalShow} onHide={() => set_contact_modalShow(false)}/>
        </>
    )
}

export default Tutor_page