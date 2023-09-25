import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from '../../redux/actions/productAction';

const ViewHoomeProductHook = () => {

  const allProducts = useSelector((state)=>state.productsReducer.allProducts);
  
  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
          await dispatch(getAllProducts())

      }
      get();

    }, [])

  let items = [];
  
    if (allProducts.data){
      items = allProducts.data.slice(0, 8); 
    }
    else
        items = [];
  return [items]

}

export default ViewHoomeProductHook;



