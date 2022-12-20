import React,{useState,useContext,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginContext } from './Context';
import Axios from 'axios';
import Interested_tutors from './Interested_tutors';

function Job_card(props) {
    const {page}=props
    const {tuition_info}=props
    const {loggedin,set_logged_in}=useContext(LoginContext)
    const {job_id,guardian_email,tuition_type,curriculum,tutoring_time,no_of_days,student_gender,tutor_gender,grade,subjects,salary,location}=tuition_info
    const [all_interested_tutors,set_all_interested_tutors]=useState([])
    const [all_selected_tutors,set_all_selected_tutors]=useState([])

    const handleApply=()=>{
        Axios.get(`http://localhost:3005/check_application/${job_id}/${loggedin.user_email}`)
        .then((response)=>{
            if(response.data.length==0){
                Axios.post('http://localhost:3005/post_job_application',{
                    job_id:job_id,
                    tutor_email:loggedin.user_email
                  }).then(()=>
                  {
                    console.log("heyyyy it's the axios then")
                  })
            }else{
                alert('You already applied for this job!')
            }
        })
    }
    useEffect(()=>{Axios.get(`http://localhost:3005/get_all_interested_tutor_emails/${job_id}`)
    .then((response)=>{
        let dummy_all_interested_tutors=[]
        response.data.map((row)=>{
            Axios.get(`http://localhost:3005/get_tutor/${row.tutor_email}`)
            .then((response)=>{
                dummy_all_interested_tutors.push(...response.data)
            })
        })
        set_all_interested_tutors(dummy_all_interested_tutors)
    })},[])

    useEffect(()=>{Axios.get(`http://localhost:3005/get_all_selected_tutor_emails/${job_id}`)
    .then((response)=>{
        let dummy_all_selected_tutors=[]
        response.data.map((row)=>{
            Axios.get(`http://localhost:3005/get_tutor/${row.tutor_email}`)
            .then((response)=>{
                dummy_all_selected_tutors.push(...response.data)
            })
        })
        set_all_selected_tutors(dummy_all_selected_tutors)
    })},[])

    return (
    <>
        <Card className='mt-2'style={{ maxWidth: '800px',minWidth:'300px' }}>
            {console.log(job_id+': ')}
            {console.log(all_interested_tutors)}
            {console.log('-------------------------')}
            <Card.Body>
            <Card.Title className='ps-2'>Need {curriculum} tutor for grade {grade} {student_gender} student - {no_of_days} Days/Week</Card.Title>
            {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text> */}
            <Container>
                    <Row className='mb-2'>
                        <Col style={{opacity:'0.7'}}>
                        Job id : {job_id}
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                        <span style={{opacity:'0.65'}}>Tuition type</span><br></br><span>{tuition_type}</span>
                        </Col>
                        <Col>
                        <span style={{opacity:'0.65'}}>Salary</span><br></br><span>{salary}</span>
                        </Col>
                        <Col >
                        <span style={{opacity:'0.65'}}>Subjects</span><br></br><span>{subjects}</span>
                        </Col>
                    </Row>
                    <Row className='mb-2'>
                        <Col>
                        <span style={{opacity:'0.65'}}>Timing</span><br></br><span>{tutoring_time}</span>
                        </Col>
                        <Col>
                        <span style={{opacity:'0.65'}}>Location</span><br></br><span>{location}</span>
                        </Col>
                        <Col>
                        <span style={{opacity:'0.65'}}>Preferred tutor gender</span><br></br><span>{tutor_gender}</span>
                        </Col>
                    </Row>
            </Container>
            {page=='tutor_page' &&
                <div className='d-flex flex-row-reverse pe-5 pt-3'>
                    <Button  variant="primary" onClick={handleApply}>Apply</Button>
                </div>
            }
                </Card.Body>
        </Card>
        {page=='admin_page' && 
            <Interested_tutors page='admin_page' all_interested_tutors={all_interested_tutors} job_id={job_id}/>
        }
        {page=='guardian_page' && 
            <Interested_tutors page='guardian_page' all_interested_tutors={all_selected_tutors} job_id={job_id}/>
        }
    </>
    )
}

export default Job_card