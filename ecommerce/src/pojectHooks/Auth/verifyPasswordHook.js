import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword, verifyPassword } from '../../redux/actions/authAction';
import notify from '../useNotification';

const VerifyPasswordHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);


    const OnChangeCode = (e)=>{
        setCode(e.target.value);
    }

    const res = useSelector(state => state.authReducer.verifyPassword);

    const onSubmit = async()=>{

        if(code === ''){
            notify('أدخل الكود أولاً', 'error');
            return ;
        }
        setIsPress(true)
        setLoading(true)
        await dispatch(verifyPassword({
            resetCode:code,
        }));
        setLoading(false);
        setIsPress(false)

    }

    useEffect(() => {
        if(loading === false){  
            if(res){
                console.log(res);
                if(res.data.status === "Success"){
                    notify('الكود صحيح', 'success')
                    setTimeout(() => {
                        navigate('/user/reset-password');
                    }, 1500)
                    
                }
                
                if(res.data.status === "fail"){
                    notify('الكود خاطئ أو تم انتهاء صلاحيته', 'error')
                }

            }
        }
    }, [loading]);
    
    return [code, OnChangeCode, onSubmit, loading, isPress];
}

export default VerifyPasswordHook
