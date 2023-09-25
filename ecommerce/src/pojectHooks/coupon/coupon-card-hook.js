

import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from '../../redux/actions/couponAction';

const CouponCardHook = (couponID) => {
    const couponCard = useRef(null)

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
        const handleDelete = async()=>{
            setLoading(true)
            setIsPress(true)
            await dispatch(deleteCoupon(couponID));
            handleClose();
            // window.location.reload(false)
            setLoading(false)
            setIsPress(false)
            couponCard.current.remove();
            
        }

        return [show, handleShow, handleClose, handleDelete, loading, isPress, couponCard]
}

export default CouponCardHook
