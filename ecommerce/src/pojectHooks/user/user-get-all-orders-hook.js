


import React , {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOneUserAddress } from '../../redux/actions/userAddressesAction';
import GetAllUserCartHook from '../cart/get-all-user-cart-hook';

import { createOrderCash } from '../../redux/actions/checkoutAction';
import notify from '../useNotification';
import { getAllOrders } from '../../redux/actions/orderAction';

const UserGetAllOrdersHook = () => {

    const user = JSON.parse(localStorage.getItem('userData'));

    let userName = '';

    if(user != null){
        userName = user.name
    }else{
        userName = '';
    }

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState(0);
    const [paginate, setPaginate] = useState({});
    const [orderData, setOrderData] = useState([]);

    let limit = 10;
    const get = async()=>{
        setLoading(true)
            await dispatch(getAllOrders(limit, ''));
        setLoading(false)
    }

    useEffect(()=>{
        get();
    }, []);

    const resAllOrders = useSelector(state => state.orderReducer.getAllOrders);
    



    useEffect(()=>{
        if(loading === false){

            if(resAllOrders.results)
                setResults(resAllOrders.results)
            if(resAllOrders.paginationResult)
                setPaginate(resAllOrders.paginationResult)
            if(resAllOrders.data)
                setOrderData(resAllOrders.data)
        }

    }, [loading])


    const onPress = async(page)=>{
        setLoading(true)
            await dispatch(getAllOrders(limit, page));
        setLoading(false)
    }


    return [userName, results, paginate, orderData, onPress, loading];

}

export default UserGetAllOrdersHook
