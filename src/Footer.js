import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return (
    <Container className='d-flex justify-content-center' style={{minWidth:'100vw'}}>
        <Row className='p-5'>
            <Col >
                <Container>
                    <h4>
                        Porao
                    </h4>
                    <div className='pe-2 pt-2 me-5'>
                    Porao is Bangladesh's first free of cost tutor-student matching
                    platform.Since the start of our journey we have connected thousands<br/>
                    of students with suitable teachers and we keep striving to continue
                    to do so.
                    </div>
                </Container>
            </Col>
            <Col xs={3}>
                <h4>
                    Social media
                </h4>
                <div className='pt-2'>
                    <FontAwesomeIcon icon={faFacebook}/> Facebook <br/>
                    <FontAwesomeIcon icon={faInstagram}/> Instagram<br/>
                    <FontAwesomeIcon icon={faLinkedin}/> Linkedin <br/>
                    <FontAwesomeIcon icon={faYoutube}/> YouTube <br/>
                </div>
            </Col>
            <Col xs={3}>
                <h4>
                    Office Address
                </h4>
                <div className='pt-2'>
                    Flat: 2A, Plot: 25, Alaol Avenue, Sector 13, Uttara,<br/>
                    Dhaka 1230, Bangladesh. 
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer