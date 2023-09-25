import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword, updateUserProfileData } from '../../redux/actions/authAction';
import notify from '../useNotification';
import { useNavigate } from 'react-router-dom';

const ProfileHook = () => {
    let user = [];
    if(JSON.parse(localStorage.getItem('userData')) != null){
        user = JSON.parse(localStorage.getItem('userData'));
    }


    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);


    const onChangeName = (e)=>{
        setName(e.target.value);
    }
    const onChangePhone = (e)=>{
        setPhone(e.target.value);

    }

    const handleClose = () =>{
        setShow(false);
        setName(user.name);
        setPhone(user.phone);
    } 

    const handleShow = () => setShow(true);

    
        const handleSubmit = async()=>{
            setIsPress(true)
            setLoading(true);
            await dispatch(updateUserProfileData({
                name,
                phone,
            }))   
            setLoading(false);
            setIsPress(false)
            setShow(false)
        }

        const res = useSelector(state => state.authReducer.userProfile);

        useEffect(()=>{
            if(loading === false){
                //res.status = 401 if not a user
                if(res && res.status === 200){
                    console.log(res)
                    notify('تم تحديث بياناتك بنجاح','success');
                    localStorage.setItem('userData', JSON.stringify(res.data.data.user));
                    
                    setTimeout(() => {
                        window.location.reload(false);
                    }, 1500);
                    
                }else{
                    notify('فشل عملية تحديث البيانات','error');
                }
            }
        }, [loading])

        //  change user password ------------------------------------------------------

        const navigate = useNavigate();
        const [oldPassword, setOldPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [loadingPass, setLoadingPass] = useState(true);
        const [isPressPass, setIsPressPass] = useState(false);
        


        const onChangeOldPass = (e)=>{
            e.persist()
            setOldPassword(e.target.value);
        }
        const onChangeNewPass = (e)=>{
            e.persist()
            setNewPassword(e.target.value);
            
        }
        const onChangeConfirmPass = (e)=>{
            e.persist()
            setConfirmPassword(e.target.value);
    
        }


        const changePassword = async()=>{
            if(oldPassword === ''){
                notify('أدخل كلمة المرور القديمة أولاً','error');
                return;
            }
            if(newPassword === ''){
                notify('أدخل كلمة المرور الجديدة أولاً','error');
                return;
            }
            if(confirmPassword === ''){
                notify('قم بتأكيد كلمة المرور الجديدة أولاً','error');
                return;
            }
            if(confirmPassword != newPassword){
                notify('تأكيد كلمة المرور الجديدة غير متطابقة','error');
                return;
            }
            if(confirmPassword != newPassword){
                notify('تأكيد كلمة المرور الجديدة غير متطابقة','error');
                return;
            }

            setIsPressPass(true)
            setLoadingPass(true);
                await dispatch(updateUserPassword({
                    currentPassword: oldPassword,
                    password: newPassword,
                    passwordConfirm: confirmPassword
                }))
            setLoadingPass(false);
            setIsPressPass(false)
        }

        const respass = useSelector(state => state.authReducer.updateUserPassword)


        useEffect(()=>{
            if(loadingPass === false){
                //res.status = 401 if not a user
                console.log(respass);
                if(respass && respass.status === 200){
                    notify(' تم  تغيير كلمة المرور بنجاح\n. قم بتسجيل الدخول مرة أخرى','success');
                    localStorage.removeItem('userData');
                    localStorage.removeItem('token');

                    setTimeout(() => {
                        navigate('/login');
                    }, 1500);
                    
                }else if(respass && respass.status === 400){
                    notify('كلمة المرور القديمة غير صحيحة','error');
                }else{
                    notify("فشل عملة تحديث البيانات",'error');

                }
            }
        }, [loadingPass])
        
        return [user, show, handleClose, handleShow, handleSubmit, name, phone, onChangeName, onChangePhone, changePassword , oldPassword, newPassword, confirmPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass, loadingPass , loading, isPress , isPressPass]
}

export default ProfileHook
