import React from 'react'
import error404 from '../../images/error404.jpg'
import { Row , Container} from 'react-bootstrap'


const ErrorPage = () => {
    document.body.style.cssText=
    'background-color: #FFF !important;'
  return (
    <Container  className='' style={{minHeight:'100vh'}}>
        <Row className=''>
            <img className='mx-auto error-image' draggable ='false' src={error404} alt="error 404"/>
        </Row>
    </Container>
  )
}

export default ErrorPage
