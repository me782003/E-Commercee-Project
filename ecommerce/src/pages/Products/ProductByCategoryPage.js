import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CardProductsContainer from './../../components/Products/CardProductsContainer';
import Pagination from './../../components/Utilities/Pagination';
import { useParams } from 'react-router-dom';
import ViewProductsByCategoryHook from '../../pojectHooks/products/view-porducts-by-category-hook';

const ProductByCategoryPage = () => {

    const {id} = useParams();

    const [ items , pagination, onPress, loading] = ViewProductsByCategoryHook(id);

    let pageCount = 0;
    if(pagination)
    pageCount = pagination;
    else
    pageCount = 0;


  return (
    <div style={{ minHeight: '100vh' }}>
    <Container>
        <Row className='d-flex flex-row'>
            <Col sm="12">
              {
                loading === false?(
                 items.length >= 1?(
                   <CardProductsContainer title="" btntitle="" pathText='' products = {items}/>
                   
                 ):(
                  <h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>لا يوجد منتجات في هذا التصنيف</h6>
                 )
              ):(
                  <div className='d-flex justify-content-center align-items-center mt-5'>
                      <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                  </div>
              )
          }
            </Col>
        </Row>
        {
          pageCount >=2? (
            <Pagination pageCount={pageCount} onPress={onPress}/>
          ):null
        }
    </Container>
</div>
  )
}

export default ProductByCategoryPage
