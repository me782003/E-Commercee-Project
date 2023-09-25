import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword, resetePassword, verifyPassword } from '../../redux/actions/authAction';
import notify from '../useNotification';

const ResetePasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);


    const OnChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    const OnChangeConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value);
    }

    const res = useSelector(state => state.authReducer.resetePassword);

    const onSubmit = async()=>{

        if(password === ''){
            notify('أدخل كلمة السر الجديدة', 'error');
            return ;
        }
        
        if(password != confirmPassword){
            notify('كلمة السر غير متطابقة', 'error');
            return ;
        }
        setIsPress(true)
        setLoading(true)
        await dispatch(resetePassword({
            email: localStorage.getItem('user-email'),
            newPassword: password,
        }));
        setLoading(false);
        setIsPress(false);
    }

    useEffect(() => {
        if(loading === false){  
            if(res){
                console.log(res);
                if(res.data.token){
                    notify('تم تغيير كملة السر بنجاح', 'success')
                    setTimeout(() => {
                        navigate('/login');
                    }, 1500)
                    
                }
                
                if(res.data.status === "fail"){
                    notify( ' قم بإدخال الكود بشكل صحيح أو اطلب كود جديد', 'error')
                }

            }
        }
    }, [loading]);
    
    return [password, confirmPassword , OnChangePassword, OnChangeConfirmPassword, onSubmit, loading , isPress];
}

export default ResetePasswordHook
