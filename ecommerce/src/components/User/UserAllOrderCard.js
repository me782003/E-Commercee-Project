import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import baseUrl from '../../API/baseUrl'
import { Link } from 'react-router-dom'

const UserAllOrderCard = ({item}) => {
    return (
        <div>
            <Row className="d-flex mb-2">
                <Col xs="3" md="3" className="d-flex justify-content-center ">
                    <Link to={`/products/${item?.product?._id}`}  className=''>
                        <Card.Img className=''  src={item?.product?.imageCover? baseUrl.getUri() + "/products/" + item?.product?.imageCover:''} alt="" />
                    </Link>

                    {/* <Card.Img
                    style={{
                      height:'auto',
                      borderRadius:'0',
                    }}
                    src={item.imageCover}
                  /> */}
                </Col>
                <Col xs="9" md="9">
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className={`d-inline-block pt-2 fw-bolder user-orders-title`} style={{
                            color: '#033a41',
                            
                            
                            }}>
                            {item?.product?.title ? item.product.title:(<span className='text-danger'>'لقد تم حذف هذا المنتج وهو غير متوفر حاليا'</span>)}
                        </div>
                        {/* <div>
                            <i style={{color:'#eca815'}} className="fas fa-star"></i>
                            <div className="d-inline pt-2 cat-rate me-2 fw-bolder fs-5 font-monospace">{item.product.ratingsAverage || 0}</div>
                            <div className="rate-count d-inline p-1 pt-2 fw-bolder fs-5 font-monospace">({item.product.ratingsQuantity})</div>
                        </div> */}
                    </div>
                    <div className="mt-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <div className="cat-text  d-inline fw-bolder fs-6">الكميه</div>
                                <span className='font-monospace text-center mx-3 fw-bolder' style={{backgroundColor: '#034f31', color:'#e7ffff', padding:'1px 15px', borderRadius:'99px'}}>{item.count}</span>
                                {/* <input
                                    value={item.count}
                                    className="mx-2"
                                    type="number"
                                    style={{ width: "40px", height: "25px" }}
                                /> */}
                            </div>
                            <div
                                className={`${item.color !==''? 'order-color':''} my-3 `}
                                style={{ backgroundColor: `${item.color}` }}><span className=' text-black-50'>{item.color===''? 'لا يوجد ألوان محددة للمنتج':''}</span>
                            </div>
                        </div>
                    </div>

                </Col>
                <hr />
            </Row>
            
        </div>
    )
}

export default UserAllOrderCard