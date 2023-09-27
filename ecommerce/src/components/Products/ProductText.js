import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Row,Col, Container, DropdownButton, Dropdown, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../pojectHooks/products/view-product-details-hook';
import rate from '../../images/rate.png'
import AddToCartHook from '../../pojectHooks/cart/add-to-cart-hook';
import { useDispatch, useSelector } from 'react-redux';
import { getOneBrand } from '../../redux/actions/brandActions';
import ReactStars from "react-rating-stars-component";
import ProductCardHook from '../../pojectHooks/products/product-card-hook';
import CardContainerHook from '../../pojectHooks/products/card-container-hook';
import ProductGallery from './ProductGallery';


const ProductText = () => {
  const {id} = useParams();

  const [favProducts] = CardContainerHook();
  const [item, images, cat, brand, ,loading] = ViewProductDetailsHook(id);
  console.log(loading)
  const [favImg , handelFav] = ProductCardHook(item, favProducts);
  const [colorClick, indexColor, addToCartHandle, colorText] = AddToCartHook(id, item);

  const setting = {
    size: 20,
    count: 5,
    color: "#EDEEF2",
    activeColor: "#EDEEF2",
    value: item.ratingsAverage,
    a11y: false,
    edit:false,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" style={{color:'#EDEEF2'}}/>,
    filledIcon: <i className="fa fa-star" />,
};
  
    return (
    //-------------------------------------------------
    <Row style={{backgroundColor:'#2D2E32', direction:'ltr'}} className=' m-0 p-3 h-100'>
      {
        loading === false?(
          <Row className='m-0 h-100'>

          
          <Col sm={12} md={7} className='p-0 mb-3 mb-md-0'>
            <ProductGallery />
          </Col>
    
          <Col  sm={12} md={5} className='' style={{direction:'rtl'}}>
          <Col xs='12' className=' m-0 p-0'>
            <div className='fs-4 ' style={{color:'#F0C42A'}}>{cat.name}</div>
            <div className='fs-3 fw-bolder my-3' style={{color:'#EDEEF2'}}>{item.title}</div>
            <Link to={`/product/brand/${brand._id}`} style={{textDecoration:'none'}}>
              <div className='d-inline-block align-items-center'>
                {/* <div className='fst-italic fs-6 fw-bolder brand-name-in-product-details-page' style={{color:'#848589'}}>{brand.name}</div> */}
                <img src={brand.image} alt="" width={50} style={{cursor:'pointer' , backgroundColor:'#FFF'}} />
              </div>
            </Link>
          </Col>
          <hr
            className='
              mx-auto
              my-4
            '
            style={{
              width:'75%',
              borderTop:'1.5px solid #F0C42A'
            }}
          />
            <Row className='w-100 p-0 m-0'>
            <div className='d-flex  justify-content-between  align-items-end p-0 m-0'>
                <div className=" d-flex align-items-center justify-content-center">
                  {
                    item.priceAfterDiscount >=1 ?(
                      <div className="">
                        <div className=" font-monospace d-block fs-4 ms-3" style={{textDecoration: 'line-through', color: '#848589'}}>{(item.price).toFixed(2)}</div>
                        <span className=" font-monospace d-inline-block fs-4 prod-price" style={{color:'#EDEEF2'}}><span className="  font-monospace"  style={{color:'#EDEEF2'}}>{(item.priceAfterDiscount).toFixed(2)}</span> EGP</span>
                      </div>
                    ):(
                      <span className=" font-monospace d-block prod-price" style={{color:'#EDEEF2'}}><span className="  font-monospace" >{item.price? (item.price).toFixed(2): ''}</span> EGP</span>
                      )
                  }
                </div>
                <div className=''>
                  {
                    item.ratingsAverage? (
                      <ReactStars {...setting} />
                    ):null
                  }
                </div>
              </div>
            </Row>
            <hr
            className='
              mx-auto
              my-4
            '
            style={{
              width:'75%',
              borderTop:'1.5px solid #F0C42A'
            }}
          />
            <Row className='w-100 p-0 m-0 mt-3'>
              <div className=' fs-5 fw-bolder m-0 p-0'>
                <div style={{color:'#c2c2c3'}}>التفاصيل</div>
                <div className='ef lh-lg my-3 text-center w-75 p-2 mx-auto' style={{color:'#c8c9cc' , fontSize:'12px', boxShadow:'rgb(13 13 13) 0px 0px 22px -6px', borderRadius:'5px'}}>{item.description}</div>
              </div>
            </Row>
            <hr 
            className='
              mx-auto
              my-4
            '
            style={{
              width:'75%',
              borderTop:'1.5px solid #F0C42A'
            }}
          />
            <Row className=' m-0 p-0 mt-3'>
              <Col className=' d-flex justify-content-center align-items-center '>
                <div className='' style={{color:'#EDEEF2'}} >الألوان المتاحة</div>
              </Col>
              <Col className=' d-flex justify-content-center align-items-center '>
                <div className='' style={{color:'#EDEEF2'}}>الكمية الموجودة لدينا</div>
              </Col>
            </Row>
            <Row className='w-100 p-0 m-0 mt-1' >
              <Col className =' m-0 p-0 d-flex'>
                <div className='d-inline-flex align-items-center justify-content-between  m-0 px-2 py-1 mx-auto' style={{width:'auto', borderRadius:'20px', backgroundColor:'#26272B'}}>
    
                  <DropdownButton className='prodDropdown'  id="dropdown-basic-button" title={
    
                    
                      item?.availableColors?.length >=1 ? (
                        colorText === '' ? (
                          <div className='d-flex justify-content-center align-items-center color border mx-2'>
                            <i className="fas fa-caret-down "></i>
                          </div>
                        ):(
                        <div className="color mx-2 border border-light" style={{ backgroundColor: colorText }}></div>
                        )
                      ):('غير محدد')
                      
                    
                  }>
                    {
                      item?.availableColors?.length >=1 ? (
                        item.availableColors.map((color, index)=>{
                          return(
                              <div
                                key ={index}
                                onClick={()=>colorClick(index, color)}
                                className="color mx-2 border border-dark border-2 "
                                style={{ backgroundColor: color , border: indexColor === index? '2px solid #3d3c3c':'none', transform:indexColor === index?'scale(1.3,1.3)': 'scale(1,1)' }}
                                >
                              </div>
                              
                          )
                        })
                      ):<div style={{color:'#848589'}}>لا توجد ألوان محددة للمنتج</div>
                    }
                  </DropdownButton>
    
                    
                </div>
              </Col>
              <Col className='m-0 p-0  d-flex justify-content-center align-items-center'>
                <div className='m-0 p-0 px-5 d-flex justify-content-center align-items-center h-100 ef ' style={{backgroundColor:'#26272B', color:'#EDEEF2', borderRadius:'20px'}}>
                    {item.quantity}
                </div>
              </Col>
            </Row>
            <hr 
            className='
              mx-auto
              my-4
            '
            style={{
              width:'75%',
              borderTop:'1.5px solid #F0C42A'
            }}
          />
            <Row className='m-0 p-0  mt-3 align-items-center justify-content-center'>
                <div onClick={handelFav} className='m-0 p-0  w-50 text-center py-1 my-1 fw-bolder' style={{borderRadius:'30px', border:'1.5px solid #EDEEF2', color:'#EDEEF2'  , fontSize:'16px', cursor:'pointer'}}>إضافة إلى المفضلة 
                <span
                  className="me-2"><img
                    src={favImg}
                    alt="favImg"
                    // className="text-center position-absolute translate-middle"
                    style={{
                    //   top:'0px',
                    //   left:'0px',
                      height: "30px",
                      width: "30px",
                    //   cursor: "pointer",
                      backgroundColor:'#FFFFFF',
                      borderRadius:'50%',
                      boxShadow:'rgb(0 0 0) 0px 0px 16px -2px',
                      padding:'5px'
                    }}
                    
                  />
                </span></div>
            </Row>
            <Row className='m-0 p-0  mt-3 align-items-center justify-content-center'>
                <div className='m-0 p-0  w-50 text-center py-1 my-1 fw-bolder' onClick={addToCartHandle} style={{borderRadius:'30px', color:'#2D2E32', backgroundColor:'#EDC42E' , fontSize:'16px', cursor:'pointer'}}>إضافة إلى العربة  <span className='me-2' style={{color:'#2D2E32'}}><i className="fas fa-cart-arrow-down "></i></span></div>
            </Row>
          </Col>
        </Row>

          ):(
              <div className='d-flex justify-content-center align-items-center my-5'>
                  <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.8'}} animation="border" variant="light" role="status" />
                  
              </div>
          )
        }

        </Row>
    )
}

export default ProductText
