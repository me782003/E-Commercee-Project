import React, { useEffect } from 'react';
import BrandCard from './BrandCard';
import { Container, Row, Spinner } from 'react-bootstrap';
import SubTitle from '../Utilities/SubTitle';
import HomeBrandHook from '../../pojectHooks/brand/home-brand-Hook';

const BrandFeatured = ({title, btntitle, pathText}) => {

  const [brand, loading] = HomeBrandHook();
  return (
    <Container>

      
        
            <SubTitle title={title} btntitle={btntitle} pathText = {pathText} />
              <Row className='my-1 d-flex justify-content-between align-items-center'>


                {

                  loading === false ?(
                    brand.data && brand.data.length > 0 ?(
                      brand.data.slice( 0, 5 ).map((item, index)=>{
                        return(<BrandCard id={item._id} key={index} img = {item.image} title={item.name} />)
                      })

                    ): <h4 className='text-danger'>لا يوجد ماركات</h4>
                  ):     <div className='d-flex justify-content-center align-items-center mt-3'>
                  <Spinner className='spin' style={{width:'70px', height:'70px', borderWidth:'7px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
              </div>
              }


              </Row>
          

       
      

  </Container>
  )
}

export default BrandFeatured
