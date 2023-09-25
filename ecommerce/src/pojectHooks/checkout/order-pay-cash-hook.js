


import React , {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';

import { createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';

const OrderPayCashHook = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [createLoading, setCreateLoading] = useState(true);
    const [addressDetails, setAddressDetails] = useState([]);
  

    const [, cartItems, , , , cartId] = GetAllUserCartHook();

    // when user change address in paymethod page
    const handleChooseAddress = async(e)=>{
        setAddressDetails([])
        if(e.target.value != '0' ){
            get(e.target.value);
        }
    }

    const get = async(id)=>{
        setLoading(true);
            await dispatch(getOneUserAddress(id));
        setLoading(false);
    }

    //get address details for the user
    const res = useSelector(state => state.userAddressReducer.oneAddress)


    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 'success'){
                // console.log(res);
                setAddressDetails(res.data)
                
            }else{
                setAddressDetails([]);
            }
        }

    }, [loading])


    //when user wants to pay
    const onCreateOrderCash = async()=>{
        if(cartId == '0'){
            notify('  من فضلك أضف منتجات إلى العربة أولاً  ','warning');
            return;
        }
        if(addressDetails.length === 0){
            notify('  من فضلك أضف عنواناً للتوصيل   ','warning');
            return;
        }
        setIsPress(true);
        setCreateLoading(true);
        await dispatch(createOrderCash(cartId, {
            shippingAddress:{
                details: '(' + addressDetails.alias + ')'+ addressDetails.details ,
                phone: addressDetails.phone,
                city: "",
                postalCode: "",
                }
        }))
        setCreateLoading(false);
        setIsPress(false);
    }

    const orderRes = useSelector(state => state.checkoutReducer.createOrderCash)
    //get response for createing a chash order

    useEffect(()=>{

        if(createLoading === false){
            console.log(orderRes);
            if(orderRes && orderRes.status === 201){
                notify('  تم إنشاء طلبك بنجاح  ','success');

                setTimeout(() => {
                    navigate('/user/allorders')
                }, 1500)
                
                navigate()
            }else{
                notify('  فشل في اكمال الطلب من فضلك حاول مرة أخرى!  ','error')

            }
        }
    }, [createLoading])



    return [addressDetails ,handleChooseAddress , onCreateOrderCash , createLoading, isPress];

}

export default OrderPayCashHook



