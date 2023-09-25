import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getShoes, getTheMostSold } from '../../redux/actions/productAction';

const ViewShoesHook = () => {

  const shoes = useSelector((state)=>state.productsReducer.allShoes);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض الأحذية  
        setLoading(true)
          await dispatch(getShoes());
        setLoading(false)

      }
      get();

    }, [])

  let items = [];
    if (shoes.data){
      items = shoes.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]
}

export default ViewShoesHook;



