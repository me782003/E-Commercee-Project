import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utilities/SubTitle'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import CardContainerHook from '../../pojectHooks/products/card-container-hook';


const CardProductsContainer = ({title , btntitle , pathText, products}) => {

  const [favProducts] = CardContainerHook();

  
  return (
    <Container fluid>
      {
        products ? (
          <SubTitle title={title} btntitle={btntitle} pathText = {pathText}/>
        ):null
      }

      <Row className='d-flex justify-content-start align-items-center px-2 '>
        {
          
            products && products.length>=1? (
              products.map((item, index)=> <ProductCard favProd = {favProducts} key={index} item={item} /> )
            ) : null
        }
      </Row>
    </Container>
  )
}

export default CardProductsContainer
