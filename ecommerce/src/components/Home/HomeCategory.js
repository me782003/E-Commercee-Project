import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import SubTitle from './../Utilities/SubTitle';
import CategoryCard from './../Category/CategoryCard';
import HomeCategoryHook from '../../pojectHooks/category/home-category-hook';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeCategory = () => {
    const [category, loading, color] = HomeCategoryHook();

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 9,
        slidesToSlide: 6 // optional, default to 1.
    
    
    
      },
      desktop: {
        breakpoint: { max: 3000, min: 993 },
        items: 12,
        slidesToSlide: 5 // optional, default to 1.
    
      },
      tablet: {
        breakpoint: { max: 993, min: 769 },
        items: 6,
        slidesToSlide: 2 // optional, default to 1.
    
      },
      mobile: {
        breakpoint: { max: 769, min: 0 },
        items: 4
      }
    };

    const [current, setCurrent] = useState(0)
  return (
    <Container className=''>
      <SubTitle title='التصنيفات' btntitle='المزيد' pathText={'/allcategory'} />
      <Row onDrag={(e)=>console.log(e)} className=' d-flex justify-content-between  align-items-center position-relative' style={{backgroundColor:'#FFF'}}>
        <div className='' style={{
          position:'absolute',
          backgroundImage:'linear-gradient(90deg, transparent, rgb(255 255 255 / 92%) 67%)',
          right:'0',
          width:'100px',
          height:'100%',
          zIndex:'100'
          
        }}> 

        </div>
        <div className='' style={{
          position:'absolute',
          backgroundImage:'linear-gradient(90deg,  rgb(255 255 255 / 92%) 67%, transparent)',
          left:'0',
          width:'100px',
          height:'100%',
          zIndex:'100'
        }}> 

        </div>
        {

          loading === false ?(
            category.data ?(
              <Carousel infinite={true} responsive={responsive} className='' renderButtonGroupOutside={true} afterChange={(previousSlide, { currentSlide, onMove }) => {
                // console.log(previousSlide)
                setCurrent(currentSlide);
                console.log(currentSlide)
              }}
              beforeChange={(nextSlide, { currentSlide, onMove }) => {
                // console.log(currentSlide)
              }}
                >
                  {category.data.slice( 0, 20 ).map((item, index)=>{
                    return(
                        
                          <CategoryCard key={index} id={item._id} title = {item.name} img = {item.image} background={color[index]}/>
                        
                      )
                  })}
              </Carousel>


            ): <h4 className='text-danger'>لا يوجد تصنيفات</h4>
          ):     <div className='d-flex justify-content-center align-items-center mt-3'>
                    <Spinner className='spin' style={{width:'70px', height:'70px', borderWidth:'7px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                </div>
        }
      </Row>
    </Container>
  )
}
export default HomeCategory;
