

import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getAllPhones, getTheMostSold } from '../../redux/actions/productAction';

const ViewPhonesHook = () => {

  const allPhones = useSelector((state)=>state.productsReducer.allPhones);
  const [loading, setLoading] = useState(true)

  
  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض جميع الهواتف
        setLoading(true)
        await dispatch(getAllPhones());
        setLoading(false)

      }
      get();

    }, [])

  let items = [];
    if (allPhones.data){
      items = allPhones.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewPhonesHook;



