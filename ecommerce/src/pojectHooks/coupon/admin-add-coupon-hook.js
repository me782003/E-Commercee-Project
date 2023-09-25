import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon, getAllCoupons } from '../../redux/actions/couponAction';
import notify from './../useNotification';

const AddminAddCouponHook = () => {

    const dispatch = useDispatch();
  
    const [couponName, setCouponName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    


    const onChangeCouponName = (e)=>{
        setCouponName(e.target.value);

    }
    const onChangeCouponDate = (e)=>{
        setCouponDate(e.target.value);
        console.log(e.target.value);
    }
    const onChangeCouponValue = (e)=>{
        setCouponValue(e.target.value);
        
    }

    

    const onSubmit = async(e)=>{
        e.preventDefault();

        let couponDateTime = new Date(couponDate) ;
        let nowDate = new Date()
        let diff = couponDateTime - nowDate
        let couponRegEx = /^[A-Z0-9_$-\\\.\+\*\?\[\^\]\(\)\{\}\=\!<>\|\:\#\%\@]+$ /;
        
        if(couponName === ''){
            notify('يجب وضع اسم الكوبون أولاً','error');
            return ;
        }

        if(couponRegEx.test(couponName) === false || couponName.length <= 5){
            notify('يجب أن يكون الكوبون باللغة الإنجليزية ويتكون من الأحرف الكبيرة ويزيد عن 5 أحرف','error');
            return ;
        }

        if(couponDate === ''){
            notify('يجب أن تضع تاريخاً مستقبلياً','error');
            return ;
        }

        if(+couponValue < 0 || + couponValue > 100 || couponValue === ''){
            notify('يجب أن يكون قيمة الخصم من 0 إلى 100','error')
            return ;
        }

        if(diff < 0){
            notify('يجب أن تضع تاريخاً مستقبلياً','error');
            return ;

        }
        setIsPress(true)
        setLoading(true);
        await dispatch(addCoupon({
            //body
            name: couponName,
            expire: couponDate,
            discount: couponValue,
        }))
        setLoading(false);
        setIsPress(false)
    }

    const res = useSelector(state=>state.couponReducer.addCoupon);

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 201){
                notify('تم إضافة الكوبون بنجاح', 'success');
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000)
                
            }else if(res && res.status === 400){
                notify('هذا الكوبون موجود من قبل', 'error');
            }else if(res && res.status === 403){
                notify('غير مسموح لك بالإضافة', 'error');
            }
        }
    }, [loading])

    const [getLoading, setGetLoading] = useState(true)


    useEffect(()=>{
        
        const get = async()=>{
            setGetLoading(true);
            await dispatch(getAllCoupons());
            setGetLoading(false);
        }
        get();
    }, [])

    const allCouponsRes = useSelector(state => state.couponReducer.allCoupons);

    let coupons = []
    try{
        if(allCouponsRes && allCouponsRes.data.length >= 1){
            coupons = allCouponsRes.data
        }

    }catch(e){

    }


    return [couponName, couponDate, couponValue, onChangeCouponName, onChangeCouponDate, onChangeCouponValue, onSubmit, coupons, getLoading, loading, isPress];

}

export default AddminAddCouponHook
