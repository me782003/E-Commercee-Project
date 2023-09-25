import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allReviewProduct, deleteReviewOnProduct } from '../../redux/actions/reviewAction';
import notify from '../useNotification';

const DeleteRateHook = (id, review) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [rateText, setRateText] = useState('');
    // const [ , ] = useState(0);
    const [loading , setLoading] = useState(true);
    const [isUser , setIsUser] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    


    let user = JSON.parse(localStorage.getItem('userData'));

    

    useEffect(()=>{
        if(user){
            if(review.user._id  ===  user._id){
                setIsUser(true);
                // console.log(isUser)
            }
        }
    }, [])
    
    
    
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

    const handleDeleteReview = async()=>{
        setLoading(true);
            await dispatch(deleteReviewOnProduct(review._id));
        setLoading(false);
        handleClose()
        
    }

    const res = useSelector(state=> state.reviewReducer.deleteReview);


    useEffect(()=>{
        if(loading === false){

            if(res===''){
                notify('تم حذف التعليق بنجاح', 'success');
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000)
                
            }else{
                notify('هناك مشكلة في عملية المسح', 'error');
             }
        }

    }, [loading])

    return [isUser , handleDeleteReview, handleClose , handleShow , showDelete];



}

export default DeleteRateHook ;
