import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon, editCoupon, getAllCoupons, getOneCoupon } from '../../redux/actions/couponAction';
import notify from './../useNotification';
import { useNavigate } from 'react-router-dom';
const EditCouponHook = (id) => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate()
  
    const [couponName, setCouponName] = useState('')
    const [couponDate, setCouponDate] = useState('')
    const [couponValue, setCouponValue] = useState('')
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    const oneCoupon = useSelector(state=>state.couponReducer.oneCoupon);

    useEffect(()=>{
        
        const get = async()=>{
            setLoadingData(true);
            await dispatch(getOneCoupon(id));
            setLoadingData(false);
        }
        get();
    }, []);

    useEffect(() => {

        if(loadingData === false){
            if(oneCoupon.data){
                setCouponName(oneCoupon.data.name)
                setCouponDate(((oneCoupon.data.expire).match(/\d+-\d+-\d+/ig))[0])
                setCouponValue(oneCoupon.data.discount)
            }

        }    
    
    }, [loadingData])



    const onChangeCouponName = (e)=>{
        setCouponName(e.target.value);

    }
    const onChangeCouponDate = (e)=>{
        setCouponDate(e.target.value);
    }
    const onChangeCouponValue = (e)=>{
        setCouponValue(e.target.value);
        
    }

    

    const onSubmit = async(e)=>{
        e.preventDefault();

        let couponDateTime = new Date(couponDate) ;
        let nowDate = new Date()
        let diff = couponDateTime - nowDate
        let couponRegEx = /^[A-Z0-9_$-\\\.\+\*\?\[\^\]\(\)\{\}\=\!<>\|\:\#\%\@]+$/;
        
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

        setIsPress(true);
        setLoading(true);
        await dispatch(editCoupon(id, {
            //body
            name: couponName,
            expire: couponDate,
            discount: couponValue,
        }))
        setLoading(false);
        setIsPress(false);
    }

    const res = useSelector(state => state.couponReducer.editCoupon);
    // console.log(res)

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify('تم تعديل الكوبون بنجاح', 'success');
                setTimeout(() => {
                    navigate('/admin/addcoupon')
                }, 1000)
            }else{
                notify('فشل عملية التعديل!', 'error');
            }
        }
    }, [loading])




    return [couponName, couponDate, couponValue, onChangeCouponName, onChangeCouponDate, onChangeCouponValue, onSubmit, loading, isPress];

}

export default EditCouponHook;