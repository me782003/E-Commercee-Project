

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../pojectHooks/useNotification';

const DeleteUserAddressHook = (id) => {
  
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
        const handleDelete = async()=>{
            setIsPress(true);
            setLoading(true);
            await dispatch(deleteUserAddress(id));
            handleClose();
            setLoading(false);
            setIsPress(false);
        }

        const res = useSelector(state => state.userAddressReducer.deleteAddress);
        useEffect(()=>{
            if(loading === false){
                if(res && res.status === 'success'){
                    notify('تم حذف العنوان بنجاح','info');
                    setTimeout(() => {
                        window.location.reload(false)
                    }, 1000)
                }
            }
        }, [loading]);

        return [show, handleShow, handleClose, handleDelete, loading, isPress]
}

export default DeleteUserAddressHook
