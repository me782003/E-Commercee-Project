import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../pojectHooks/useNotification';
import { addproductToCart } from '../../redux/actions/cartAction';


const AddToCartHook = (prodID, item) => {
    

    const dispatch = useDispatch()


    const [indexColor , setIndexColor] = useState('');
    const [colorText , setColorText] = useState('');
    const [loading , setLoading] = useState(true);
  
    const colorClick = (index, color)=>{  
      setIndexColor(index);
      setColorText(color);
  
    }

    //add product to cart
    const addToCartHandle = async()=>{

        if(item.availableColors.length >= 1){
            if(colorText === ''){
                notify('إختر لوناً للمنتج من الألوان المتاحة أولاً','warning');
                return;
            }
            
        }

        setLoading(true)
        await dispatch(addproductToCart({
            productId: prodID,
            color: colorText,
        }))
        setLoading(false);
        
    }

    const res = useSelector(state=>state.userCartReducer.addToCart);

    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
                notify('تم إضافة المنتج إلى العربة بنجاح','success');
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000)
            }else if(res && res.status === 401){
                notify('قم بتسجيل الدخول أولاً','warning');
            }else if(res && res.status === 403){
                notify('بما أنك الأدمن فلا يمكنك الإضافة الي العربة','error');

            
            }else{
                notify(" فشل في عملية الإضافة إلى العربة ",'error');
            }
        }
    }, [loading])


    return [colorClick, indexColor, addToCartHandle , colorText]


}

export default AddToCartHook
