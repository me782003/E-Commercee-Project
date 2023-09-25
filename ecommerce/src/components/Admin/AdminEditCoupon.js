

import React,{useRef} from 'react'
import { Row,Col, Container, Spinner} from 'react-bootstrap'
import EditCouponHook from '../../pojectHooks/coupon/edit-coupon-hook';
import { useParams } from 'react-router-dom';


const AdminEditCoupon = () => {
    const {id}= useParams();


    const [couponName, couponDate, couponValue, onChangeCouponName, onChangeCouponDate, onChangeCouponValue, onSubmit ,loading, isPress] = EditCouponHook(id);

  return (
    <Container className='mt-4'>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">تعديل بيانات الكوبون</div>
                <Col sm='12' md='10'>
                    <input
                        value={couponName}
                        onChange = {onChangeCouponName}
                        type="text"
                        className="text-inputs d-block mt-3 px-3 "
                        placeholder="اسم الكوبون"
                    />
                    <input
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اليوم-الشهر-السنة"
                        onChange={onChangeCouponDate}
                        value={couponDate}
                    />
                    <input
                        onChange = {onChangeCouponValue}
                        value={couponValue}
                        type="number"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="نسبة الخصم..."
                        min="1"
                        max="100"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm='12' md='10' className="d-flex justify-content-end ">
                    
                    <button onClick={onSubmit}  className="btn-save d-inline mt-2 mb-5 ">
                        {
                            isPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ التعديلات"
                        }
                    </button>
                </Col>
            </Row>
        </Container>
  )
}

export default AdminEditCoupon
