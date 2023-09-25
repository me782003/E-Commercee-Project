import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getHeadphones } from '../../redux/actions/productAction';

const ViewHeadPhonesHook = () => {

  const headphones = useSelector((state)=>state.productsReducer.allHeadPhones);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض  السماعات
          setLoading(true)
            await dispatch(getHeadphones());
          setLoading(false)
      }
      get();

    }, [])

  let items = [];
    if (headphones.data){
      items = headphones.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewHeadPhonesHook;



