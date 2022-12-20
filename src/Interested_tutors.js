import React,{useState,useContext,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LoginContext } from './Context';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Tutor_details_modal from './Tutor_details_modal'


function Interested_tutors({page,all_interested_tutors,job_id}) {
    const [modalShow, setModalShow] =useState(false);
    const [modal_tutor,set_modal_tutor]=useState({})
    const title=(page=='admin_page')?'Tutors who applied :':'Appointed tutors :'
    const handDetails=(tutor)=>{
        setModalShow(true)
        set_modal_tutor(tutor)
    }
    return (
    <div className='mt-2'>
        <h5 className='mb-3 ps-2'>{title}</h5>
        {all_interested_tutors.map((tutor)=>{
            return  <Container className='mb-2'>
                        <Row >
                            <Col>
                                <p className='fs-5'style={{display:'inline'}}>{tutor.name}</p>
                                <Button className='ms-5' variant="primary" onClick={()=>handDetails(tutor)}>Details</Button>
                            </Col>
                        </Row>
                    </Container>
        })}
        <Tutor_details_modal page={page} job_id={job_id} modal_tutor={modal_tutor} show={modalShow} onHide={() => setModalShow(false)}/>
    </div>
    )
}

export default Interested_tutors