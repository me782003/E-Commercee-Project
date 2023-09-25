



import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../../pojectHooks/useNotification';
import { addproductToCart, clearAllCartItems, deleteCartItem, getAllUserCartItems, updateCartItem } from '../../redux/actions/cartAction';
import { getOneProduct } from '../../redux/actions/productAction';


const DeleteCartHook = (cartItem, idProdId) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);
    const [loadingDeleteItem, setLoadingDeleteItem] = useState(true);
    const [isPressDeleteItem, setIsPressDeleteItem] = useState(false);
    


    const handleDeleteCart = async()=>{
        setIsPress(true)
        setLoading(true)
            await dispatch(clearAllCartItems());
        setLoading(false); 
        setIsPress(false)
    }

    const res = useSelector(state=>state.userCartReducer.clearCart);


    useEffect(()=>{
        if(loading === false){
            if(res === ''){
                window.location.reload(false);
            }else{
                notify('فشل عملية التفريغ','error')
            }
        }
    }, [loading])


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
        const handleDeleteItem = async()=>{
            setIsPressDeleteItem(true)
            setLoadingDeleteItem(true)
                await dispatch(deleteCartItem(cartItem._id));
            setLoadingDeleteItem(false)
            setIsPressDeleteItem(false)
            handleClose();
            window.location.reload(false);
            
        }
        //----------------------update cart item-------------------------

        // let qty = 0;
        // if(item.quantity)
        // {
        //     qty = item.quantity
        // }else{
        //     qty = 0
        // }


        const [itemCount , setItemCount] =useState(0);


        useEffect(() => {
            if(cartItem){
                setItemCount(cartItem.count);
            }
        }, []);

        

        const onChangeCount = (e)=>{
            setItemCount(e.target.value);
        }

        const [reLoad, setreLoad] = useState(true)
        
        const handleUpdateCart = async()=>{
            setreLoad(true)
                await dispatch(getOneProduct(idProdId))
            setreLoad(false)
        }

        const response = useSelector(state => state.productsReducer.oneProduct)
        useEffect(()=>{
            if(reLoad === false){
                if(response && response.data){
                    if(response.data.quantity < itemCount){
                        notify('الكمية التي طلبتها أكثر من المتاح لدينا','error')
                    }else{
                        const get = async()=>{
                            if(itemCount < 1){
                                notify('يجب تحديد كمية أكبر من 0','error')
                                setItemCount(cartItem.count);
                                return;
                            }
                            await dispatch(updateCartItem(cartItem._id, {
                                count: itemCount,
                            }))
                            window.location.reload(false)
                        }
                        get();
                    }
                }
            }
        }, [reLoad])
        




    return [loading, isPress ,handleDeleteCart, show, handleClose, handleShow , handleDeleteItem, itemCount , onChangeCount, handleUpdateCart, loadingDeleteItem, isPressDeleteItem];




}

export default DeleteCartHook
