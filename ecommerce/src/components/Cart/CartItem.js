import React, { useEffect, useState } from 'react'
import { Card, Col,Modal,Row, Button, CardImg, Spinner } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import deleteicon from '../../images/delete.png'
import baseUrl from '../../API/baseUrl'
import CouponCardHook from '../../pojectHooks/coupon/coupon-card-hook'
import { useDispatch } from 'react-redux'
import DeleteCartHook from '../../pojectHooks/cart/delete-cart-hook'
import ReactStars from "react-rating-stars-component";

const CartItem = ({item, idProdId}) => {
  let imgUrl = (item.product.imageCover).replaceAll(`${baseUrl.getUri()}/products/`, '');

  const [loading, isPress ,handleDeleteCart, show, handleClose, handleShow , handleDeleteItem, itemCount , onChangeCount, handleUpdateCart, loadingDeleteItem, isPressDeleteItem] = DeleteCartHook(item, idProdId);


  const productRatings = {
    size: 15,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: item.product.ratingsAverage,
    a11y: true,
    isHalf: true,
    edit:false,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
}
    return (

        <Row xs="12" className="cart-item-body my-3 d-flex pe-md-2 py-2 ps-md-4 justify-content-between align-items-center m-0">
          {/* MODAL FOR DELETING THE COMMNENT */}
          <Modal centered show={show} onHide={handleClose}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تأكيد عملية الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5 '>هل أنت متأكد من حذف <span className='fw-bolder fs-5 text-success'>{item.product.title}</span> من العربة؟</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{borderRadius:'0'}}>
                    تراجع
                </Button>
                <Button variant="danger" onClick={handleDeleteItem} style={{borderRadius:'0'}}>
                   {
                    isPressDeleteItem?(
                      loadingDeleteItem?(
                          <Spinner style={{
                              width:'20px',
                              height:'20px',
                          }} animation="border" variant="light" role="status" />
                          ):null
                  ):"حذف"
                   }
                </Button>
                </Modal.Footer>
            </Modal>
                   
            <div className=" d-flex justify-content-between align-items-center d-md-none pt-2 cat-rate me-2 fw-bolder fs-5" style={{direction:'ltr'}}>
                <ReactStars classNames='mt-2 mt-md-0' {...productRatings} />
                <div className=" d-block d-md-none pt-2 barnd-text ef " style={{fontSize:'16px'}}><span className='font-monospace fs-3'>{(item.price ).toFixed(2)|| '0'}</span> EGP</div>
            </div>
            <Col className='col-12 col-md-3 ms-md-5  w-auto mx-auto'>
              <div className='d-block  d-md-flex align-items-center position-relative  mx-auto h-100' style={{height: "100%", width:'200px'}}>
                <CardImg className='' style={{}} src={ baseUrl.getUri()+'/products/'+imgUrl ||mobile} alt="" />
              </div>
            </Col>
        <Col  className=" col-12 col-md-6 lh-lg flex-grow-1 ">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text fw-bolder fs-5">{item.product.category? item.product.category.name: ''}</div>
              <div onClick={handleShow} className="d-flex pt-2 " style={{ cursor: "pointer" }}>
              <i className="fas fa-trash-alt text-center delete-comment-icon" style={{
                                cursor: 'pointer',
                                width:'35px',
                                height:'35px',
                                lineHeight:'40px',
                                padding:'0',
                                color:'#6e6c6c',
                                borderRadius:'50%',
                                backgroundColor:'#FFF',
                                border:'1px solid #313131',
                                fontSize:'20px',
                                
                            }}></i>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-between align-items-center">
              <div className="d-inline pt-2 cat-title fw-bolder fs-6">
                {item.product.title}
              
              </div>
              <div className=" d-none d-md-inline pt-2 cat-rate me-2 fw-bolder fs-5">
                <ReactStars classNames='mt-2 mt-md-0' {...productRatings} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-2 ef">{item.product.brand?item.product.brand.name:'ليس له ماركات'}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              <div className='cat-text d-inline'>اللون الذي قمت باختياره: </div>
              <div
                className={`${item.color !==''? 'color':''} mx-3 `}
                style={{ backgroundColor: `${item.color}` ,cursor:'default', border:'1px solid #2D2E32'}}><span className=' text-black-50'>{item.color===''? 'لا يوجد ألوان محددة للمنتج':''}</span></div>
            </Col>
          </Row>
          <hr
        className='
          mx-auto
          my-4
        '
        style={{
          width:'75%',
          borderTop:'1.5px solid #2f2f2f'
        }}
      />
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex align-items-center">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                  value={itemCount}
                  onChange={onChangeCount}
                  className="mx-2 fs-5 qty-input ef text-center"
                  type="number"
                  style={{ width: "100px", height: "40px" }}
                  min={1}
                />
                <Button onClick={handleUpdateCart} className='btn btn-dark' style={{borderRadius:'0'}} >تطبيق</Button>
              </div>
              <div className=" d-none d-md-inline pt-2 barnd-text ef fs-6"><span className='font-monospace '>{(item.price ).toFixed(2)|| '0'}</span> EGP</div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
}

export default CartItem
