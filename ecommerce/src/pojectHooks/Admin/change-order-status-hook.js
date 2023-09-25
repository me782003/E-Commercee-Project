


import React , {useState, useEffect, useLayoutEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';

import { createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';
import { changeOrderDeliver, changeOrderPay, getAllOrders, getOneOrder } from '../../redux/actions/orderAction';
const ChangeOrderStatusHook = (id) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [payPress, setPayPress] = useState(false);
        
    const [pay, setPay] = useState(0);


    // when admin click save 
    const changePayorder = async()=>{
        if(pay === 'true'){
            setPayPress(true)
            setLoading(true)
                await dispatch(changeOrderPay(id));
            setLoading(false)
            setPayPress(false)
        }else if(pay == 0){
            notify(  "إختر حالة الدفع أولاً"  , 'error' );
        }
    }

    const payRes = useSelector(state => state.orderReducer.changePay);
    
    useEffect(()=>{
        if(loading === false){
            console.log(payRes)
            if(payRes && payRes.status === 200){
                notify('تم تغيير حالة الدفع بنجاح','success');

                setTimeout(() => {
                  window.location.reload(false);
                }, 1500)
                
            }else{
                notify('هناك مشكلة في  تغيير الحالة','error')
            }
           
        }

    }, [loading]);

    
    const onChangePaid = (e)=>{
        setPay(e.target.value);
        console.log(e.target.value);
    }

    //-------------------deliver change-------------------------------
    const [deliver, setDeliver] = useState(0);
    const [deliverLoading, setDeliverLoading] = useState(true);
    const [deliverPress, setDeliverPress] = useState(false);

    const onChangeDeliver = (e)=>{
        setDeliver(e.target.value);
        console.log(e.target.value);
    }
    const changeDeliverOrder = async()=>{
        if(deliver === 'true'){
            setDeliverPress(true)
            setDeliverLoading(true)
                await dispatch(changeOrderDeliver(id));
            setDeliverLoading(false)
            setDeliverPress(false)
        }else if(deliver == 0){
            notify(  "إختر حالة التوصيل أولاً" , 'error'  );
        }
    }

    const deliverRes = useSelector(state => state.orderReducer.changeDeiver);
    
    useEffect(()=>{
        if(deliverLoading === false){
            console.log(deliverRes);
            if(deliverRes && deliverRes.status === 200){
                notify('تم تغيير حالة الدفع بنجاح','success');

                setTimeout(() => {
                  window.location.reload(false);
                }, 1500)
                
            }else{
                notify('هناك مشكلة في  تغيير الحالة','error')
                
            }
           
        }

    }, [deliverLoading]);

    return [loading,deliverLoading, onChangePaid, changePayorder, onChangeDeliver , changeDeliverOrder, payPress, deliverPress];

}

export default ChangeOrderStatusHook
