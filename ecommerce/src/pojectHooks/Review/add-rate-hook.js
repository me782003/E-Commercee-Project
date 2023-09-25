import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import notify from '../useNotification';
import { allReviewProduct, createReview } from './../../redux/actions/reviewAction';


const AddRateHook = (prodID) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [added , setAdded] = useState(false);


    const [rateText, setRateText] = useState('');
    const [rateValue, setRateValue] = useState(0);
    const [loading, setLoading] = useState(true);



    const onChangeRateText = (e)=>{
        setRateText(e.target.value);
    }

    const onChaneRateValue =(val)=>{
        setRateValue(val)
    }

        let user = '';
        if(localStorage.getItem('userData') != null){
             user = JSON.parse(localStorage.getItem('userData'));
        }

        
        //when save rate
        const onSubmit = async(e)=>{
            if(rateText === '' && rateValue === 0){
                notify('قم بتقييم المنتج وكتابة تعليق أولا', 'error');
                return ;
            }
            if(rateText === ''){
                notify('من فضلك أكتب تعليقاً', 'error');
                return;
            }
            if(rateValue < 1){
                notify(' يجب ان يكون التقييم نجمة واحدة على الأقل', 'error');
                return;
            }
            
            setLoading(true);
            await dispatch(createReview(prodID,{
                review: rateText,
                rating: rateValue
            }  ))

            setLoading(false)

        }
        const res = useSelector(state => state.reviewReducer.createReview);
        useEffect(()=>{
            if(loading === false){
                if(res){
                    console.log(res)
                    if(res.status && res.status === 403){
                        notify('بما أنك الأدمن فلا يمكنك التعليق على المنتجات', 'error')
                    }else if(res.status && res.status === 401){
                        notify("انتا غير مسجل", "error")
                    }else if(res.data.errors && res.data.errors[0].msg === 'You already added review on this product'){
                        notify('لقد قمت بإضافة تعليق لهذا المنتج مسبقاً', 'error')
                    }else if(res.status && res.status === 201){
                        notify('تم إضافة تعليق بنجاح', 'success')
                        setTimeout(() => {
                            window.location.reload(false)
                        }, 1000)
                    }                        
                    }
            }
        }, [loading])
 
    return [onChangeRateText, onChaneRateValue, rateText, rateValue , user, onSubmit , added];

}

export default AddRateHook
