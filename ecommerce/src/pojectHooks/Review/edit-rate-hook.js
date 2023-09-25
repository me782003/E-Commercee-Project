import React, { useEffect, useState , useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotification';
import { updateReviewOnProduct } from '../../redux/actions/reviewAction';

const EditRateHook= (review) => {
    const dispatch = useDispatch();

    const [loading , setLoading] = useState(true);
    
    const [showEdit, setShowEdit] = useState('');
    
    const [newRateText, setNewRateText] = useState(review.review);
    const [newRateValue, setNewRateValue] = useState(review.rating);

    const onChangeNewRateText = (e)=>{
        setNewRateText(e.target.value);
    }

    const onChangeNewRateValue = (val)=>{
        setNewRateValue(val)
    }

    const handleCloseEdit = () =>{
        setShowEdit(false);
        setNewRateText(review.review);
        setNewRateValue(review.rating);
    }

    const handleShowEdit = () =>{
        setShowEdit(true);
    } 


    const handleEditReview = async()=>{

        if(newRateValue < 1 && newRateText === ''){
            notify('قم بكتابة تعليق أولاً. وأيضاً يجب ألا يقل التقييم عن نجمة واحدة', 'error');
            return;
        }
        if(newRateText === ''){
            notify('قم بكتابة التعليق الجديد أولاً', 'error');
            return;
        }
        
        if(newRateValue < 1){
            notify('يجب ألا يقل التقييم عن نجة واحدة', 'error');
            return;
        }


        setLoading(true);
            await dispatch(updateReviewOnProduct(review._id, {
                review: newRateText,
                rating: newRateValue,
            }));
        setLoading(false);
        handleCloseEdit();
        
    }

    const res = useSelector(state=> state.reviewReducer.updateReview);


    useEffect(()=>{
        
        if(loading === false){
            console.log(res)
            if( res .status && res.status === 200){
                notify('تم تعديل التعليق بنجاح', 'success');
                setTimeout(() => {
                    window.location.reload(false)
                }, 1000)
                
            }else{
                notify('هناك مشكلة في عملية التعديل', 'error');
             }
        }

    }, [loading])

    
    
    return [ newRateText ,onChangeNewRateText, handleEditReview, handleCloseEdit , handleShowEdit , showEdit, onChangeNewRateValue , newRateValue];


}

export default EditRateHook
