

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsByCategory, getAllProductsPage, getAllProductsSearch } from '../../redux/actions/productAction';
const ViewProductsByCategoryHook = (catID) => {
  
    const [loading, setLoading] = useState(true)
    let limit = 20;
    const getPorduct = async()=>{
      setLoading(true)
      await dispatch(getAllProductsByCategory( '', limit ,catID ));
      setLoading(false)
    }
    const dispatch = useDispatch();
    
    useEffect(()=>{
      getPorduct();
    }, [])

     //when select pahination page
  const onPress = async (page) => {
  await dispatch(getAllProductsByCategory(page, limit, catID));
}
    
    const allProducts = useSelector((state) => state.productsReducer.allProductsCat);
    
      let items = []; let pagination = []; let results = 0;
  
    try{
  
      if(allProducts.data){
        items = allProducts.data;
        
      }else{
        items = [];
      }
  
    }catch(e){
      console.log(e)
    }
    
    try{
      if (allProducts.paginationResult)
          pagination = allProducts.paginationResult.numberOfPages;
    else
    pagination = []
  
    }catch(e){
    console.log(e)
    }


    return [ items , pagination, onPress, loading]
   
}

export default ViewProductsByCategoryHook
