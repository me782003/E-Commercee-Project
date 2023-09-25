import React,{useEffect, useState} from 'react'
import notify from './../useNotification';
import { useSelector, useDispatch } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import {useNavigate} from 'react-router-dom'

const RegisterHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeName = (e)=>{
        setName(e.target.value);
    }
    const onChangeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const onChangePhone = (e)=>{
        setPhone(e.target.value);
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    const onChangeConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value);
    }


    const validationValues = ()=>{
        if(name === '' ){
            notify('أدخل اسم المستخدم!', 'error')
            return;
        }
        if(email === '' ){
            notify('أدخل البريد الإليكتروني ', 'error')
            return;
        }
        if(phone === "" ){
            notify('أدخل رقم الهاتف', 'error')
            return;
        }
        if(phone.length <= 10 ){
            notify('أدخل رقم هاتف صحيح', 'error')
            return;
        }
        if(password === ''){
            notify( 'قم بإدخال  كلة سر', 'error');
            return;
        }

        if(confirmPassword === ''){
            notify('قم بتأكيد كلمة السر', 'error');
            return;

        }
        if(password != confirmPassword){
            notify("كلمة السر غير متطابقة!", 'error');
            return;
        }
    }

    let res = useSelector(state => state.authReducer.createUser);

    //save data in database
    const onSubmit = async(e)=>{
        validationValues();
        setIsPress(true)
        setLoading(true);
        await dispatch(createNewUser(
            {
                name,
                email,
                password,
                passwordConfirm : confirmPassword,
                phone
            }
        ));
        
        setLoading(false);
        setIsPress(false)
    }

    useEffect(()=>{
        if(loading === false){
            if(res){
                console.log(res);

                if(res.data.token){
                    localStorage.setItem('token', res.data.token);
                    notify("تم تسجيل الحساب بنجاح", 'success');
                    setName('');
                    
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000)
                    
                        setLoading(true);

                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === 'must be at least 3 chars'){
                        notify("يجب ألا يقل اسم المستخدم عن 3 أرقام", 'error');
                    
                    }
                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === 'E-mail already in use'){
                        notify("هذا الإيميل مسجل بالفعل", 'error');
                    
                    }
                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === 'accept only egypt phone numbers'){
                        notify("يجب أن يكون رقم الهاتف مصري ويحتوي على 11 رقم فقط", 'error');
                        
                    }
                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === 'must be at least 6 chars'){
                        notify("يجب ألا يقل الرقم السري عن 6 أحرف أو أرقام", 'error');
    
                    }
                }
            }
        }
    }, [loading])

    return [name, email, phone, password, confirmPassword ,onChangeName, onChangeEmail , onChangePhone, onChangePassword, onChangeConfirmPassword, loading, onSubmit, isPress]

}

export default RegisterHook
