import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderItem, loading}) => {
    return (
        <div className="user-order my-2 mb-5 ">
            {
                loading === false?(
                <>
                    <Row className='d-flex align-items-center'>
                        <Col>
                            <div className="py-1 order-title fw-bolder text-secondary fs-5 ">طلب رقم #{orderItem.id}</div>            
                        </Col>
                        <Col className='text-start font-monospace fw-bolder' style={{color:'#706d6dce', fontSize:'15px'}}>
                            {
                                orderItem.createdAt?(
                                    (orderItem.createdAt).match(/\d+-\d+-\d+/)
                                ):null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col  className="d-flex justify-content-end my-2">
                            <div>
                                <div className="card-currency ef" style={{fontSize:'15px'}}><span className='card-price font-monospace fs-5 me-2'>{orderItem.totalOrderPrice? (orderItem.totalOrderPrice).toFixed(2) : ''}</span>EGP</div>
                            </div>
                        </Col> 
                    </Row>
                    {
                        orderItem.cartItems? (
                            orderItem.cartItems.map((item, index)=>{
                                return(
                                    <UserAllOrderCard key={index} item={item} />
                                )
                            })
                        ): null
                    }
                    <Row className="d-flex  justify-content-between">
                        <Col className="d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-items-start align-items-md-center" style={{lineHeight: '50px'}}>
                            <div>
                                <div className="d-inline">التوصيل:</div>
                                <div className="d-inline mx-2 stat">{orderItem.isDelivered === true ? <span style={{color:'#169571'}} className='fw-bolder'>تم التوصيل</span> : <span style={{color: '#d91c18'}} className='fw-bolder'>لم يتم التوصيل</span>}</div>
                            </div>
                            <div>
                                <div className="d-inline">الدفع:</div>
                                <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? <span style={{color:'#169571'}} className='fw-bolder'>تم الدفع</span> : <span style={{color: '#d91c18'}} className='fw-bolder'>لم يتم الدفع</span>}</div>
                            </div>
                            <div>
                                <div className="d-inline">طريقة الدفع:</div>
                                <div className="d-inline mx-2">{orderItem.paymentMethodType === 'cash' ? <span style={{backgroundColor:'#169571', color:'#fff' , padding: '0px 15px', borderRadius:'100px'}} className='fw-bolder'>كاش</span> : <span style={{backgroundColor:'#169571', color:'#fff' , padding: '0px 15px', borderRadius:'100px'}} className='fw-bolder'>VISA</span>}</div>
                            </div>
                        </Col>
                    </Row>
                </>

                ):(
                    <div className='d-flex justify-content-center align-items-center mt-2'>
                        <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                    </div>
                )
            }
            

            
        </div>
    )
}

export default UserAllOrderItem
