import React, { useEffect } from 'react'
import { Row,Col, Container, Spinner, Alert } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'
import UserAllOrderItem from './../User/UserAllOrderItem';
import { useParams } from 'react-router-dom';
import GetOrderDetailsHook from '../../pojectHooks/Admin/get-order-details-hook';
import ChangeOrderStatusHook from '../../pojectHooks/Admin/change-order-status-hook';

const AdminOrderDetalis = () => {
    const {id} = useParams();

    const [orderData, cartItems, loadingitem] = GetOrderDetailsHook(id);

    const [loading,deliverLoading, onChangePaid, changePayorder, onChangeDeliver , changeDeliverOrder, payPress, deliverPress] = ChangeOrderStatusHook(id);

    return (
        <Container className='mt-4 '>
            <div className='admin-content-text d-inline-block'>  تم بتاريخ:</div>
            <span className='admin-content-text fs-4 fw-bolder mx-3' style={{color: '#054c57'}}>{orderData.createdAt? ((orderData.createdAt).match(/\d+-\d+-\d+/)):(null)}</span> 
            <UserAllOrderItem orderItem={orderData} loading={loadingitem} />
            <Row className="justify-content-center my-4 user-data px-1 px-md-3 mx-auto">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-4">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            {orderData? (orderData.user?(orderData.user.name):('')): ('') }
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData? (orderData.user?(orderData.user.phone):('')): ('') }

                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            {orderData? (orderData.user?(orderData.user.email):('')): ('') }

                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        عنوان التوصيل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                            {orderData? (orderData.shippingAddress?(orderData.shippingAddress.details):('')): ('') }

                    </div>
                </Col>

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
                
                <Row className="grid gap-0 row-gap-3 mb-3">
                    <Col xs='12'><Alert variant="danger">
                        (لاحظ) لا يمكنك تغيير حالتي الدفع أو التوصيل من تم إلى لم يتم
                    </Alert></Col>
                    <Col xs='12' md className=' d-flex  justify-content-between align-items-center'>
                        <select
                            name="pay"
                            id="paid"
                            className=" text-inputs    text-center px-2"
                            onChange={onChangePaid}
                            >
                                
                            <option value="0"> الدفع</option>
                            <option value="true">تم</option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changePayorder} className="btn-a  d-flex align-items-center  d-inline px-3" style={{height: '45px', lineHeight:'45px'}}>
                            {
                            payPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                        lineHeight:'45px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ"
                            }
                        </button>
                    </Col>
                    <Col xs='12' md className=' d-flex  justify-content-between align-items-center'>
                        <select
                            name="deliver"
                            id="deliver"
                            onChange={onChangeDeliver}
                            className="text-inputs  text-center px-2">
                            <option value="0">التوصيل</option>
                            <option value="true">تم </option>
                            <option value="false">لم يتم</option>
                        </select>
                        <button onClick={changeDeliverOrder} className="btn-a d-inline px-3 " style={{height: '45px', lineHeight:'45px'}}>
                            {
                                
                                deliverPress?(
                                    deliverLoading?(
                                        <Spinner style={{
                                            width:'20px',
                                            height:'20px',
                                            lineHeight:'45px',
                                        }} animation="border" variant="light" role="status"/>
                                        ):null
                                ):"حفظ"
                                    
                            }
                        </button>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default AdminOrderDetalis
