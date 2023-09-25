

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsByBrand, getAllProductsByCategory, getAllProductsPage, getAllProductsSearch } from '../../redux/actions/productAction';


const ViewProductsByBrandHook = (brandID) => {
 
    let limit = 12;
    const getPorduct = async()=>{
      await dispatch(getAllProductsByBrand( '', limit ,brandID ));
    }
    const dispatch = useDispatch();
    
    useEffect(()=>{
      getPorduct();
    }, [])

     //when select pahination page
  const onPress = async (page) => {
  await dispatch(getAllProductsByBrand(page, limit, brandID));
}
    
    const allBrand = useSelector((state) => state.productsReducer.allProductsBrand);
    
      let items = []; let pagination = []; let results = 0;
    try{
  
      if(allBrand.data){
        items = allBrand.data;
      }else{
        items = [];
      }
  
    }catch(e){
      console.log(e)
    }
    
    try{
      if (allBrand.paginationResult)
          pagination = allBrand.paginationResult.numberOfPages;
    else
    pagination = []
  
    }catch(e){
    console.log(e)
    }


    return [ items , pagination, onPress]
   
}

export default ViewProductsByBrandHook
