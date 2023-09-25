import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getTheMostSold } from '../../redux/actions/productAction';

const ViewTheMostSoldHook = () => {

  const mostSold = useSelector((state)=>state.productsReducer.mostSold);
  const [loading, setLoading] = useState(true)

  
  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض الاكثر مبيعاً
        setLoading(true)
          await dispatch(getTheMostSold());
        setLoading(false)

      }
      get();

    }, [])

  let items = [];
    if (mostSold.data){
      items = mostSold.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewTheMostSoldHook;



