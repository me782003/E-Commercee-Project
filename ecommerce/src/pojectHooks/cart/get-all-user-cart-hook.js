
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../pojectHooks/useNotification';
import { addproductToCart, getAllUserCartItems } from '../../redux/actions/cartAction';
import DeleteCartHook from './delete-cart-hook';


const GetAllUserCartHook = () => {
  
    const dispatch = useDispatch();
    const [, , handleDeleteCart] = DeleteCartHook();



    const [loading, setLoading] = useState(true);
    const [itemsNum, setItemsNum] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    const [cartId, setCartId] = useState('0');


    useEffect(()=>{
        const get = async()=>{
            setLoading(true)
                await dispatch(getAllUserCartItems());
            setLoading(false);
        }
        get();
    }, []);

    const res = useSelector(state=>state.userCartReducer.getAllUserCart);

    const [couponName, setCouponName] = useState('');
    const [totalPriceAfterDiscount, setTotalPriceAfterDiscount] = useState(0);

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 'success'){
                setCartId(res.data._id);
                setItemsNum(res.numOfCartItems);
                setCartItems(res.data.products)
                setTotalCartPrice(res.data.totalCartPrice);
                if(res.data.coupon){
                    setCouponName(res.data.coupon);
                    setTotalPriceAfterDiscount(res.data.totalAfterDiscount);
                }else{
                    setCouponName('');
                    setTotalPriceAfterDiscount('');
                }
            }else if(res && res.status === 500){
                handleDeleteCart();
            }
            else{
                setCartId('0');
                setCouponName('');
                setItemsNum(0)
                setCartItems([]);
                setTotalPriceAfterDiscount(0);
                setTotalCartPrice(0);
            }
        }
    }, [loading])


    return [itemsNum, cartItems, totalCartPrice, couponName, totalPriceAfterDiscount, cartId, loading];


}

export default GetAllUserCartHook
