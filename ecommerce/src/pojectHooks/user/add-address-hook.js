import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from './../useNotification';
import { userAddAddress } from '../../redux/actions/userAddressesAction';
import { useNavigate } from 'react-router-dom';
const AddAddressHook = () => {
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [alias, setAlias] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeAlias = (e)=>{
        setAlias(e.target.value);

    }
    const onChangeDetails = (e)=>{
        setDetails(e.target.value);
    }
    const onChangePhone = (e)=>{
        setPhone(e.target.value);
        
    }

    const onSubmit = async(e)=>{
        e.preventDefault();
        
        if(alias === ''){
            notify('يجب عليك كتابة تسمية عنوانك مثل المنزل , العمل , الخ...','error');
            return ;
        }
        if(details === ''){
            notify('قم بكتابة عنواك بالتفصيل','error');
            return ;
        }

        if(phone === ''){
            notify('يجب عليك كتابة رقم هاتفك','error');
            return ;
        }
        
        setIsPress(true)
        setLoading(true);
        await dispatch(userAddAddress({
            //body
            alias,
            details,
            phone,
            city: '',
            postalCode:''
        }))
        setLoading(false);
        setIsPress(false)
    }

    const res = useSelector(state => state.userAddressReducer.addAddress);

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify('تم إضافة عنوانك بنجاح', 'success');
                setTimeout(() => {
                    navigate('/user/addresses');
                }, 1000);
            }else{
                notify("هناك مشكلة في عملية الإضافة", 'error');
            }
        }
    }, [loading])

    return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit , loading , isPress];

}

export default AddAddressHook
