import React,{useRef} from 'react'
import { Row,Col, Spinner, Container} from 'react-bootstrap'
import AddminAddCouponHook from '../../pojectHooks/coupon/admin-add-coupon-hook';
import AdminCouponCard from './AdminCouponCard';

const AdminAddCoupon = () => {
    const dateRef = useRef();

    const [couponName, couponDate, couponValue, onChangeCouponName, onChangeCouponDate, onChangeCouponValue, onSubmit, coupons, getLoading, loading, isPress] = AddminAddCouponHook();

  return (
    <Container className='mt-4'>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">إضافة كوبون جديد</div>
                <Col xm="12" md='10'>
                    <input
                        value={couponName}
                        onChange = {onChangeCouponName}
                        type="text"
                        className="text-inputs d-block mt-3 px-3 "
                        placeholder="اسم الكوبون"
                    />
                    <input
                        ref={dateRef}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="تاريخ الإنتهاء"
                        onChange={onChangeCouponDate}
                        value={couponDate}
                        onFocus={()=>dateRef.current.type = 'date'}
                        onBlur={()=>dateRef.current.type = 'text'}
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
                <Col xm="12" md='10' className="d-flex justify-content-end ">
                    
                    <button onClick={onSubmit}  className="btn-save d-inline mt-2 mb-5 ">
                        {
                            isPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"إضافة الكوبون"
                        }
                    </button>
                </Col>
            </Row>
        <Row>
            <Col sm='12' md='10'>
                {
                    
                    getLoading===false ?(
                        coupons ? (
                         coupons.map((item, index)=>{
                             return(
                                 <AdminCouponCard key={index} coupon={item}/>
                             )
                         })
                        ) :(<h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>لا يوجد كوبونات حتى الآن</h6>)
                    ):(
                        <div className='d-flex justify-content-center align-items-center '>
                            <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                        </div>
                    )
                }
            </Col>
        </Row>
        </Container>
  )
}

export default AdminAddCoupon
