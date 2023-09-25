import React , {useEffect} from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteCartHook from '../../pojectHooks/cart/delete-cart-hook'
import ApplyCouponHook from '../../pojectHooks/cart/apply-coupon-hook'

const CartCheckout = ({totalCartPrice , couponNameRes, totalPriceAfterDiscount, cartItemsLength}) => {

    const [loading, isPress, handleDeleteCart] = DeleteCartHook();
    const [couponName, onChangeCoupon, handleSubmitCoupon, loadingCoupon, isPressCoupon] = ApplyCouponHook();

    useEffect(()=>{
        if(couponNameRes){
            onChangeCoupon(couponNameRes);
        }
    }, [couponNameRes]);

    return (
        <Row className="my-1 d-flex justify-content-center pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponName}
                        onChange={(e)=>onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center fw-bolder ef  "
                        placeholder="كود الخصم"
                    />
                    <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">{
                        isPressCoupon?(
                            loadingCoupon?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"تطبيق"
                    }</button>
                </div>
                <div className="product-price d-flex justify-content-center align-items-center w-100 my-3 fw-bolder fs-3 text-center  font-monospace">{
                    totalPriceAfterDiscount >=1? (
                        <div className=' '>
                            <s className='d-block ef' style={{textDecorationColor:' #dfdfdf'}}> <span className='font-monospace' style={{color:'#7c7a7a'}}>{(totalCartPrice).toFixed(2)}</span></s>
                            <span className='ef fs-5'><span className='font-monospace fs-2' style={{color:'#EDEEF2'}}>{(totalPriceAfterDiscount).toFixed(2)}</span> EGP </span>
                        </div>
                    ): (
                        <span className='ef fs-5'> <span className='font-monospace fs-2' style={{color:'#EDEEF2'}}>{(totalCartPrice).toFixed(2)}</span> EGP </span>
                    )
                }</div>
                <div onClick={handleDeleteCart} className="product-cart-add-btn w-100 py-2 my-2 fs-5">{
                    isPress?(
                        loading?(
                            <Spinner style={{
                                width:'20px',
                                height:'20px',
                            }} animation="border" variant="light" role="status" />
                            ):null
                    ):"تفريغ العربة"
                }</div>
                <Link
                    to="/order/paymethoud"
                    style={{
                        textDecoration: "none",
                        pointerEvents: cartItemsLength === 0 ? 'none': 'all',
                        backgroundColor:'#EDC42E',
                        opacity: cartItemsLength === 0 ? '.5': '1',

                    }}
                    className="product-cart-add-btn  d-inline py-2 my-1 fs-5"
                    >
                    <div style={{
                        opacity: cartItemsLength === 0 ? '.5': '1',
                        backgroundColor: cartItemsLength === 0 ? '#EDC42E': '#EDC42E',
                        color:'#2D2E32',

                    }} className="product-cart-add-btn w-100 px-2 border-0 "> إتمام الشراء</div>
                </Link>
            </Col>
        </Row>
    )
}

export default CartCheckout