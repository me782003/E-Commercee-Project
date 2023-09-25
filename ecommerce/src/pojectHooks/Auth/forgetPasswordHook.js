import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/authAction';
import notify from '../useNotification';

const ForgetPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);


    const OnChangeEmail = (e)=>{
        localStorage.setItem('user-email' , e.target.value)
        setEmail(e.target.value);
    }

    const res = useSelector(state => state.authReducer.forgetPassword)

    const onSubmit = async()=>{

        if(email === ''){
            notify('أدخل البريد الإليكتروني أولاً', 'error')
            return ;
        }
        localStorage.setItem('user-email' , email);

        setIsPress(true)
        setLoading(true)
        await dispatch(forgetPassword({
            email: email
        }));
        setLoading(false);
        setIsPress(false)
    }

    useEffect(() => {
        if(loading === false){  
            if(res){
                console.log(res);
                if(res.data.status === "Success"){
                    notify('تم إرسال كود إلي بريدك الإليكتروني', 'success')
                    setTimeout(() => {
                        navigate('/user/verify-code');
                    }, 1500)
                    
                }
                
                if(res.data.status === "fail"){
                    notify('لا يوجد مستخدم بهذا البريد الإليكتروني', 'error')
                }

            }
        }


    }, [loading])
    
    return [OnChangeEmail, email, onSubmit, loading, isPress];
}

export default ForgetPasswordHook
