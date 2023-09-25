import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {editUserAddress, getOneUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../pojectHooks/useNotification';

const EditAddressHook = (id) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
  
    const [alias, setAlias] = useState('')
    const [details, setDetails] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const [editLoading, setEditLoading] = useState(true);

    const onChangeAlias = (e)=>{
        setAlias(e.target.value);

    }
    const onChangeDetails = (e)=>{
        setDetails(e.target.value);
    }
    const onChangePhone = (e)=>{
        setPhone(e.target.value);
        
    }

    
    useEffect(()=>{
        const get = async()=>{
            setLoading(true);
                await dispatch(getOneUserAddress(id));
            setLoading(false);
        }
        get();
    }, [])

    const res = useSelector(state => state.userAddressReducer.oneAddress)

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 'success'){
                console.log(res);
                setAlias(res.data.alias)
                setDetails(res.data.details)
                setPhone(res.data.phone);
            }
        }

    }, [loading])

    const handleEdit = async()=>{
        setIsPress(true)
        setEditLoading(true);
        await dispatch(editUserAddress(id, {
            alias,
            details,
            phone,
        }))
        setEditLoading(false);
        setIsPress(false)
    }

    const resEditAddress = useSelector(state => state.userAddressReducer.editAddress)

    useEffect(()=>{
        if(editLoading === false){
            if(resEditAddress && resEditAddress.status === 200){
                notify('تمت عملية التعديل بنجاح','success')
                setTimeout(() => {
                    navigate('/user/addresses');
                }, 1000)
                
            }else{
                notify('فشل في عملية التعديل ','error')
                
            }
        }
    },[editLoading])

        return [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, handleEdit, editLoading, isPress];
}

export default EditAddressHook
