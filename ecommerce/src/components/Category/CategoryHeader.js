import React, { useEffect , useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllCategoryPageHook from '../../pojectHooks/category/all-category-page-Hook';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CategoryHeader = () => {

  const [category ,pageCount , getPage] = AllCategoryPageHook();

  const [items, setItems] = useState([])
  useEffect(()=>{ 
    setItems(category.data);
  }, [category])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
      slidesToSlide: 6 // optional, default to 1.
  
    },
    desktop: {
      breakpoint: { max: 3000, min: 993 },
      items: 10,
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

  return (

    <div className="cat-header">
      <Container fluid>
        <Row style={{cursor:'grab'}} className=''> 
              {
                  items?(
              <Carousel responsive={responsive} arrows={false}   infinite={true} itemClass="w-100 my-4 h-100"
              className='' >
                {
                  items.map((item, index)=>{
                    return(
                      <Link to={`/product/category/${item._id}`}   key={index} className='item my-2 text-center w-100 category-link' draggable='false'  style={{textDecoration: 'none', cursor:'grab'}}>
                        <div  className="cat-text-header " style={{cursor:'grab'}}>{item.name}</div>
                      </Link>
                    )
                  })
                }
              </Carousel>
                  ):null
              }
        </Row>
      </Container>
    </div>
  )
}

export default CategoryHeader
