import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CardProductsContainer from './../../components/Products/CardProductsContainer';
import Pagination from './../../components/Utilities/Pagination';
import ViewSearchProductHook from '../../pojectHooks/products/view-search-product-hook';
import { useParams } from 'react-router-dom';
import ViewProductsByCategoryHook from '../../pojectHooks/products/view-porducts-by-category-hook';
import ViewProductsByBrandHook from '../../pojectHooks/products/view-products-by-brand-hook';

const ProductByBrandPage = () => {

    const {id} = useParams();

    const [ items , pagination, onPress] = ViewProductsByBrandHook(id);

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
                 <CardProductsContainer title="" btntitle="" pathText='' products = {items}/>
            </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress}/>
    </Container>
</div>
  )
}

export default ProductByBrandPage;
