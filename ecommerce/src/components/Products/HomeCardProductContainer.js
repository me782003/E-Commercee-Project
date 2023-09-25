import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from '../Utilities/SubTitle'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
import CardContainerHook from '../../pojectHooks/products/card-container-hook';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeProductCard from './HomeProductCard';
import { Link } from 'react-router-dom';


const HomeCardProductContainer = ({title , btntitle , pathText, products, catID, sort, loading}) => {

  const [favProducts] = CardContainerHook();

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 6 // optional, default to 1.



  },
  desktop: {
    breakpoint: { max: 3000, min: 993 },
    items: 5,
    slidesToSlide: 5 // optional, default to 1.

  },
  tablet: {
    breakpoint: { max: 993, min: 769 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: { max: 769, min: 0 },
    items: 2
  }
};

  // useLayoutEffect(()=>{
  //   localStorage.setItem('catChecked' ,``)
  // },[])
  
  return (
    <Container>
      {
        products ? (
          <SubTitle  title={title} btntitle={btntitle} pathText = {pathText} catID={catID} sort={sort} />
        ):null
      }

      <Row className='d-flex justify-content-start align-items-center px-2 ' style={{}}>
          {

            loading === false?(
              products && products.length >=1? (
                <Carousel  responsive={responsive} showDots={true} itemClass='mb-4' draggable={true} dotListClass="">
                  {
                    
                      products.map((item, index)=> {
                        return(
                            <HomeProductCard  favProd = {favProducts} key={index} item={item}/>
                        )
                      })
                  }
                </Carousel>
              ) : null
              ):(
              <div className='d-flex justify-content-center align-items-center mt-3'>
                  <Spinner className='spin' style={{width:'70px', height:'70px', borderWidth:'7px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
              </div>
            )

            }
           
      </Row>
    </Container>
  )
}

export default HomeCardProductContainer
