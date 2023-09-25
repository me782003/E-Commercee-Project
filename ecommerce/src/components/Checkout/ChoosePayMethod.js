import React, {useEffect, useState} from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import ViewAddressesHook from '../../pojectHooks/user/view-addresses-hook'
import OrderPayCashHook from '../../pojectHooks/checkout/order-pay-cash-hook';
import notify from '../../pojectHooks/useNotification';
import OrderPayCardHook from '../../pojectHooks/checkout/order-pay-card-hook';
import GetAllUserCartHook from '../../pojectHooks/cart/get-all-user-cart-hook';

const ChoosePayMethoud = () => {

    const [res, loading] = ViewAddressesHook();
    const [addressDetails, handleChooseAddress , onCreateOrderCash, createLoading, isPress] = OrderPayCashHook();
    const [handleCreateOrderCard ] = OrderPayCardHook(addressDetails);
    const [, , totalCartPrice, , totalPriceAfterDiscount, ] = GetAllUserCartHook();

    const [type, setType] = useState('');

    const changeMethod = (e)=>{
        console.log(e.target.value)
        setType(e.target.value);
    }

    const handlePay = ()=>{
        if(type === 'card'){
            handleCreateOrderCard();
        }else if(type === 'cash'){
            onCreateOrderCash();
        }else{
            notify( 'قم باختيار طريقة الدفع أولاً' , 'warn' )
        }
    }

    return (
        <div>
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card my-3 px-3 pb-4">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            onClick={changeMethod}
                            style={{cursor:'pointer'}}
                            name="group"
                            id="group1"
                            type="radio"
                            value="card"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col xs="12" className="d-flex">
                        <input
                            onClick={changeMethod}
                            style={{cursor:'pointer'}}
                            name="group"
                            id="group2"
                            type="radio"
                            value="cash"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group2">
                            الدفع عند الاستلام (كاش)
                        </label>
                    </Col>
                </Row>



                <select name="address" id="address" className="text-inputs mt-3 px-2 w-100" onChange={handleChooseAddress}>
                        <option value="0">إختر عنواناً للشحن من العناوين التي قمت بإضافتها مسبقاً </option>
                        {
                            res.data && res.data.length >=1 ? (
                                res.data.map((item)=>{
                                    return(
                                        <option key={item._id} value={item._id}>{item.alias}</option>
                                        )
                                })
                            ): <option value={0} key={0}>لا يوجد عناوين مسجلة</option>
                        }
                    </select>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className=" product-cart-add-price px-3 pt-2 d-inline me-2"><span className='font-monospace'>{


                        totalPriceAfterDiscount >=1? (
                            <div className=' '>
                                <s className='mx-4 d-inline-block' style={{textDecorationColor:' #9e0e0e'}}>{totalCartPrice}</s>
                                <span style={{color:'#117848'}}>{totalPriceAfterDiscount} جنيه</span>
                            </div>
                        ): (
                            <span>{totalCartPrice} جنيه</span>
                        )


                    }</span></div>
                    <button onClick={handlePay} className="btn-save px-3 pt-2  me-2" style={{width:'100px'}}>{
                        isPress?(
                            createLoading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"إتمام الشراء"
                    
                    }</button>
                </Col>
            </Row>
        </div>
    )
}

export default ChoosePayMethoud