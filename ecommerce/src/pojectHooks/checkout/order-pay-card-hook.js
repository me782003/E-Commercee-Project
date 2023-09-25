


import React , {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';

import { createOrderCard, createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';

const OrderPayCardHook = (addressDetails) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [createLoading, setCreateLoading] = useState(true);
  

    const [, , , , , cartId] = GetAllUserCartHook();
  

    //get address details for the user
    const res = useSelector(state => state.userAddressReducer.oneAddress)





    //when user wants to pay
    const handleCreateOrderCard = async()=>{
        if(cartId == '0'){
            notify('  من فضلك أضف منتجات إلى العربة أولاً  ','warning');
            return;
        }
        if(addressDetails.length <= 0){
            notify('  من فضلك أضف عنواناً للتوصيل   ','warning');
            return;
        }
        setLoading(true);
        await dispatch(createOrderCard(cartId, {
            shippingAddress:{
                details: addressDetails.alias,
                phone: addressDetails.phone,
                city: "",
                postalCode: "",
                }
        }))
        setLoading(false);
    }


    const cardRes = useSelector(state => state.checkoutReducer.createOrderCard);
    
    useEffect(()=>{
        if(loading == false){
            console.log(cardRes);
            if(cardRes && cardRes.status === 'success'){
                if(cardRes.session.url)
                    window.open(cardRes.session.url);
            }else{
                notify('  فشل في اكمال الطلب من فضلك حاول مرة أخرى!  ','error')

            }
        }
    }, [loading])

    return [handleCreateOrderCard ]

}

export default OrderPayCardHook;



