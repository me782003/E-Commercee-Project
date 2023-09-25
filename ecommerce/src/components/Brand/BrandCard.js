import React from 'react';
import { Col,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BrandCard = ({img, id, title}) => {
  return (
        <Col
            xs="6"
            sm="6"
            md="4"
            lg="2"
            className="my-2 d-flex justify-content-center align-items-center">

            <Card
            className="my-1  d-flex justify-content-center align-items-center"
            style={{
                overflow: 'hidden',
                width: "100%",
                height: "151px",
                borderRadius: "8px",
                backgroundColor: "#FFF",
            }}>
              <Link to={`/product/brand/${id}`} style={{textDecoration: 'none'}} title={title} className=''>
                <Card.Img style={{ width: "100%", height: "100%" }} src={img} />
              </Link>
            </Card>
        </Col>
  )
}

export default BrandCard
