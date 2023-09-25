import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../pojectHooks/useNotification';
import { addproductToCart, applyCouponCart } from '../../redux/actions/cartAction';


const ApplyCouponHook = () => {

    const dispatch = useDispatch()


    const [couponName , setCouponName] = useState('');
    const [loading , setLoading] = useState(true);
    const [isPress , setIsPress] = useState(false);
  
    const onChangeCoupon = (e)=>{  
        setCouponName(e);
    }



    const handleSubmitCoupon = async()=>{
        if(couponName === ''){
            notify('أدخل كود الخصم أولاً','warning');
            return;
        }
        setIsPress(true)
        setLoading(true);
        await dispatch(applyCouponCart({
            couponName: couponName,
        }))
        setLoading(false);
        setIsPress(false)
    }

    const res = useSelector(state => state.userCartReducer.applyCoupon);

    useEffect(()=>{
        if(loading === false){
            console.log(res);

            if(res && res.status === 200){
                notify("تم تطبيق الكوبون بنجاح",'success');
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000)
            }else if(res && res.status === 401){
                notify('قم بتسجيل الدخول أولاً','warning');
                
            }else if(res && res.status === 400){
                notify('كود الخصم غير صالح أو انتهت صلاحيته','error');
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000)
                
            }
            else{
                notify(" فشل في عملية ",'error');
                
            }
        }
    }, [loading])
    
    return [couponName, onChangeCoupon, handleSubmitCoupon, loading, isPress]

}

export default ApplyCouponHook
