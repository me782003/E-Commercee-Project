import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader';
import SearchCountResult from './../../components/Utilities/SearchCountResult';
import { Container, Row, Col } from 'react-bootstrap';
import SideFilter from '../../components/Utilities/SideFilter';
import CardProductsContainer from './../../components/Products/CardProductsContainer';
import Pagination from './../../components/Utilities/Pagination';
import ViewSearchProductHook from '../../pojectHooks/products/view-search-product-hook';

const ShopProductsPage = () => {
  
  const [items, pagination, onPress, getPorduct , results]= ViewSearchProductHook();

  var pageCount = 0;
  if (pagination){
    pageCount = pagination;
  }
    else{
        pageCount = 0;
    }


  return (
    <div style={{ minHeight: '100vh' }}>
    <CategoryHeader/>
    <Container fluid>
        <SearchCountResult onClick={getPorduct} title={`هناك ${items.length} منتج   `} />
        <Row className='d-flex flex-row'>
            <Col xs="3" md="1" className='d-flex'>
                <SideFilter />
            </Col>
            <Col xs="9"  md="11">
                 <CardProductsContainer title="" btntitle="" pathText='' products = {items}/>
            </Col>
        </Row>
        {
          pageCount >=2 ?(
            <Pagination pageCount={pageCount} onPress={onPress}/>
          ):null
        }
    </Container>
</div>
  )
}

export default ShopProductsPage;
