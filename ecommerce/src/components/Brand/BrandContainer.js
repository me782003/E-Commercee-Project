import React from 'react'
import BrandCard from './BrandCard'
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row, Spinner } from 'react-bootstrap';
import AllBrndPageHook from '../../pojectHooks/brand/all-brand-page-Hook';
const BrandContainer = ({data, loading}) => {

  return (
    <Container>
        <div className="admin-content-text mt-5 ">كل الماركات</div>
        <Row className='my-1 d-flex justify-content-between'>
          <Row className='my-1 d-flex justify-content-start'>

            {
              loading === false ?(
                data && data.length > 0 ? (
                  data.map((brand, index)=>{
                    return(
                      <BrandCard id={brand._id} key={index} img={brand.image} title={brand.name} />
                    )
                  })
                ):<h4 className='text-danger'>لا يوجد ماركات</h4>
              ):<div className='d-flex justify-content-center align-items-center mt-5'>
                  <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                </div>
        
            }
          </Row>
        </Row>
    </Container>
  )
}

export default BrandContainer
