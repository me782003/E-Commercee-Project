

import React , {useState, useEffect, useLayoutEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';

import { createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';
import { getAllOrders, getOneOrder } from '../../redux/actions/orderAction';
const GetOrderDetailsHook = (id) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    const get = async()=>{
        setLoading(true)
            await dispatch(getOneOrder(id));
        setLoading(false)
    }

    useEffect(()=>{
        get();
    }, []);

    const oneOrderRes = useSelector(state => state.orderReducer.getOneOrder);
    
    useLayoutEffect(()=>{
        if(loading === false){
            console.log(oneOrderRes.data)
            // if(oneOrderRes.data)
            if(oneOrderRes.data)
                setOrderData(oneOrderRes.data)
            if(oneOrderRes.data.cartItems)
                setCartItems(oneOrderRes.data.cartItems)
        }

    }, [loading])


    return [orderData, cartItems, loading];

}

export default GetOrderDetailsHook
