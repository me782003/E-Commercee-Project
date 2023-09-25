import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { allReviewProduct, createReview } from './../../redux/actions/reviewAction';

const ViewAllReviewsHook = (id) => {
    const dispatch = useDispatch();

    const [loading , setLoading] = useState(true);

    const allReview = useSelector(state => state.reviewReducer.allReviewProduct);


    useEffect(()=>{
        setLoading(true);
        const run = async()=>{
            await dispatch(allReviewProduct(id , 1, 10));
        }
        run();
        setLoading(false);
    }, [])

    const onPress = async (page)=>{
        await dispatch(allReviewProduct(id , page, 10));
    }

    return [allReview, onPress]
}

export default ViewAllReviewsHook
