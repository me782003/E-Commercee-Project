import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getLaptops } from '../../redux/actions/productAction';

const ViewLaptopsHook = () => {

  const laptops = useSelector((state)=>state.productsReducer.allLaptops);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض أجهزة اللابتوب  
        setLoading(true)
        await dispatch(getLaptops());
        setLoading(false)
      }
      get();

    }, [])

  let items = [];
    if (laptops.data){
      items = laptops.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]
}

export default ViewLaptopsHook;



