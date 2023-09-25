import React from 'react'
import headphone from '../../images/headphone.png'
import headphone2 from '../../images/headphone2.png'
import headphone3 from '../../images/headphone3.png'
import { Col, Container, Row } from 'react-bootstrap'

const HeadPhonesWallpaper = () => {
  return (
    <Container className='my-3 rounded-3 overflow-hidden'  style={{backgroundImage:'linear-gradient(90deg, #044851 50%, #f0bb1d 50%)' , position:'relative'}}>
        <Row className='d-flex justify-content-center align-items-center'>
            <Col xs='4' className='text-center'>
                <img src={headphone} style={{width:'75%'}} alt="" />
            </Col>
            <Col xs='4' className='text-center'>
                <img src={headphone3} style={{width:'75%'}} alt="" />
            </Col>
            <Col xs='4' className='text-center'>
                <img src={headphone2} style={{width:'75%'}} alt=""  />
            </Col>
        </Row>

        <div style={{
            position:'absolute',
            top:'0',
            bottom:'0',
            left:'0',
            right:'0',
            backgroundColor:'#0a19216e',
            color:'#FFF',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
            
        }} className='fs-2 fw-bolder'>
            خصم يصل حتى 30% على السماعات
        </div>
    </Container>
  )
}

export default HeadPhonesWallpaper
