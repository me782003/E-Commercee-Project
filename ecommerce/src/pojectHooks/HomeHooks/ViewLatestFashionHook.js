import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getLatestFashion } from '../../redux/actions/productAction';

const ViewLatestFashionHook = () => {

  const latestFashion = useSelector((state)=>state.productsReducer.latestFashion);
  const [loading, setLoading] = useState(true)
  
  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض الاكثر مبيعاً
          setLoading(true)
            await dispatch(getLatestFashion());
          setLoading(false)
      }
      get();
    }, [])

  let items = [];
    if (latestFashion.data){
      items = latestFashion.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewLatestFashionHook;



