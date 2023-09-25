import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalis = () => {
    return (
        <Container fluid className=' m-0 p-0 my-3'>
            <Row className=''>


                {/* <Col lg className='p-0 '>
                    <ProductGallery />
                </Col> */}

                    <ProductText />

            </Row>
        </Container>
    )
}

export default ProductDetalis