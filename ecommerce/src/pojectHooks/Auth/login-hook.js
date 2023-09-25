import React,{useEffect, useState} from 'react'
import notify from './../useNotification';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';


const LoginHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.loginUser);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    const validationValues = ()=>{
        if(email === '' && password === ''){
            notify("قم بإدخال البريد الإليكتروني وكلمة السر" , 'error');
            return;
        }
        if(email === ''){
            notify("قم بإدخال البريد الإليكتروني" , 'error');
            return;
        }
        if(password === ''){
            notify("قم بادخال كلمة السر" , 'error');
            return;
        }
    }

    const onSubmit = async (e)=>{
        validationValues();
        setIsPress(true);
        setLoading(true);
        
        await dispatch(loginUser(
            {
                email,
                password
           }
        ))
        setLoading(false);
        setIsPress(false);
    }

    useEffect(()=>{
        if(loading === false){
            if(res){
                console.log(res)
                
                    if(res.data.token){
                        console.log('there is a token')
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userData', JSON.stringify(res.data.data));
                        notify('تم تسجيل الدخول بنجاح' , 'success');

                        setTimeout(() => {
                          window.location.href='/'
                        }, 1000)
                        
                    }else{
                        localStorage.removeItem('token');
                        localStorage.removeItem('userData');

                    }

                    if(res.data.status){
                        if(res.data.message === "Incorrect email or password"){
                            localStorage.removeItem('token');
                            localStorage.removeItem('userData');
                            notify("بريد إليكتروني أو رقم سري خاطئ", 'error');
                            
                        }
                    }
                    if(res.data.errors){
                        if(res.data.errors[0].msg === 'Invalid email formate'){
                            notify("تأكد من كتابة البريد الإليكتروني بشكل صحيح", 'error');
                            return;
                        }
                    }
            }
          
        }
    }, [loading])



    return [email, password, loading , onChangeEmail, onChangePassword, onSubmit, isPress];
}

export default LoginHook
