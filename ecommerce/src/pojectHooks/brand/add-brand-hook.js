import React, {useState, useEffect} from 'react'
import avatar from '../../images/avatar.png'
import {useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../pojectHooks/useNotification';
import { createBrand } from '../../redux/actions/brandActions';

const AddBrandyHook = () => {

    const dispatch = useDispatch()
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    //to change name state
 
    const onChangeName = (e)=>{
        setName(e.target.value)
    }

    //when user change savei it 
    const onImageChange = (e)=>{
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0])
        }
    }

    const res =  useSelector(state => state.allBrand.brand);
    
    //save data in database
    const handleSubmit = async(e)=>{

        e.preventDefault() ;
        
        //validation
        if(name==='' || selectedFile === null){
            notify('أكمل البيانات', 'warning');
            return ;
        }

        //formData
        const  formData = new FormData();
            formData.append('name', name)
            formData.append('image', selectedFile)
            

            setLoading(true);
            setIsPress(true);
            await dispatch(createBrand(formData));
            setLoading(false);
        }
        useEffect(()=>{
            if(loading===false){
                setName('');
            setImg(avatar);
            setSelectedFile(null);
            setLoading(true);
            setTimeout(() => {
                setIsPress(false);
            }, 2000)   

            if(res.status===201){
                notify('تمت اضافة البيانات بنجاح', 'success');
            }else{
                
                notify('هناك مشكلة في عملية الإضافة\nحاول أن تجرب إسماً آخر ' , 'error');
            }
        }
        } ,[loading])

        return [img, name, loading, isPress , handleSubmit, onImageChange , onChangeName];


}

export default AddBrandyHook;
