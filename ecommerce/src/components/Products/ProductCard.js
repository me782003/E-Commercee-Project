import React, { useEffect, useLayoutEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import rate from "../../images/rate.png";
import { Link, useParams } from "react-router-dom";
import imgLoading from '../../images/loading.png';

import ProductCardHook from "../../pojectHooks/products/product-card-hook";

const ProductCard = ({ item, favProd }) => {

  const [favImg , handelFav] = ProductCardHook(item, favProd);

  let english = /^[A-Za-z0-9]/;

 
  
  return (
    <Col xs="12" sm="12" md="4" lg="2" className="d-flex m-0 p-2">
      <Card
        className="my-2 mx-0"
        style={{
          width: "100%",
          minHeight: "345px",
          borderRadius: "0",
          border: "none",
          backgroundColor: "#FFFFFF",
          padding:'10px'
        }}
      >
          <div className=" d-flex align-items-center position-relative " style={{
            height: "228px",
            width: "100%",
            backgroundColor: '#FFF',
            
          }}>
              <img
              src={favImg}
              alt="favImg"
              className="text-center position-absolute translate-middle"
              style={{
                top:'0px',
                left:'0px',
                height: "35px",
                width: "35px",
                cursor: "pointer",
                backgroundColor:'#FFFFFF',
                borderRadius:'50%',
                boxShadow:'1px 1px 7px -1px #6e6d6d',
                padding:'5px'
              }}
              onClick={handelFav}
            />

            {
              item.quantity == 0?(
              
              <span className="text-center position-absolute"
                style={{
                  bottom:'0px',
                  left:'0px',
                  // height: "35px",
                  // width: "35px",
                  backgroundColor:'#e32222d5',
                  // borderRadius:'50%',
                  boxShadow:'1px 1px 7px 1px #9a0707 inset',
                  padding:'4px',
                  color:'#FFF'
              }}
              >
                  <div className=" منتهي من المخزون"> منتهى من المخزون</div>
                
              </span>

              ):(
                item.quantity <=6 ?(
              <span className="text-center position-absolute"
                style={{
                  bottom:'0px',
                  left:'0px',
                  // height: "35px",
                  // width: "35px",
                  backgroundColor:'#f9a50bd5',
                  // borderRadius:'50%',
                  boxShadow:'1px 1px 7px 1px #b55c03 inset',
                  padding:'4px',
                  color:'#FFF'
              }}
              >
                  <div className=" منتهي من المخزون">الكمية قليلة</div>
                
              </span>

                ):(
                  null
                )

              )

              }
            
              
                <a href={`/products/${item._id}`} title={item.title} className=' mx-auto d-flex justify-content-center align-items-center' style={{ textDecoration: "none" , objectFit:'contain',height:'100%', overflow:'hidden'} }>
                  <Card.Img
                    className=' '
                    style={{
                      maxHeight:'100%',
                      objectFit:'contain',
                      borderRadius:'0',
                    }}
                    src={item.imageCover}
                  />
                </a>

          </div>

        {/* <div className="d-flex justify-content-end mx-2">
          
        </div> */}
        
        <Card.Body className="m-0 p-0">
          <Card.Title>
            <div className="card-title fw-bolder my-2 py-1" style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              direction:english.test(item.title)? 'ltr':'rtl',
              }}>
                <a href={`/products/${item._id}`} style={{ textDecoration: "none"  , color:'#2c2b2b'}} title={item.title}>
                  {item.title}
                </a>
            </div>
            <div className="card-title pt-1" style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize:'13px',
              direction:english.test(item.description)? 'ltr':'rtl',

              }}>{item.description}
            </div>
          </Card.Title>
          <Card.Text className="">
            <div style={{height:'100px', textAlign:'end'}} className="">
              
              <div className="">
                {
                  item.priceAfterDiscount >=1 ?(
                    <div className="">
                      <span className="card-price font-monospace  d-block " style={{textDecoration: 'line-through', color: '#636363'}}>{(item.price).toFixed(2).toLocaleString()}</span>
                      <span className="card-currency font-monospace d-block"><span className="card-price font-monospace">{(item.priceAfterDiscount).toFixed(2).toLocaleString()}</span> EGP</span>
                      <span className="px-2 " style={{color:'#f9f9fa', fontSize:'13px', backgroundColor:'#4e5051', borderRadius:'20px'}}> خصم <span className=" font-monospace">%{Math.round(100-((item.priceAfterDiscount/item.price)*100))}</span></span>
                    </div>
                  ):(
                    <span className="card-currency font-monospace d-block "><span className="card-price font-monospace">{(item.price).toFixed(2).toLocaleString()}</span> EGP</span>
                    )
                }
              </div>
            </div>

            <div className='d-flex justify-content-start align-items-center'>
              <span className="fw-normal font-monospace ms-1" style={{color:'#b5b5b5'}}>({item.ratingsQuantity || 0})</span>
              <div style={{ borderRadius:'100px' , padding:'2px 8px' ,backgroundColor: '#38AE04' , fontSize:'11px'}} className=" d-inline-flex justify-content-center align-items-center ">
                <i className="fas fa-star" style={{
                  color:'#fff',
                  fontSize: '9px'
                }}></i>
                <div className="card-rate fs-6 lh-1 font-monospace me-1">{item.ratingsAverage || 0}</div>
              </div> 
            </div>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
