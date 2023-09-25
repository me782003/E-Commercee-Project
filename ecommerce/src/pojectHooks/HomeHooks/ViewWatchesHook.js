import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getHeadphones, getWatches } from '../../redux/actions/productAction';

const ViewWatchesHook = () => {

  const watches = useSelector((state)=>state.productsReducer.allWatches);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض  الساعات
        setLoading(true)
          await dispatch(getWatches());
        setLoading(false)

      }
      get();

    }, [])

  let items = [];
    if (watches.data){
      items = watches.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewWatchesHook;



