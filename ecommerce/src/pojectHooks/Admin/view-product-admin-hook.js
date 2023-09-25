import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts, getAllProductsPage } from '../../redux/actions/productAction';

const ViewProductAdminHook = () => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
    const get =  async()=>{
      setLoading(true)
        await dispatch(getAllProducts(12));
      setLoading(false)
    }
    get();
    console.log(allProducts)
  }, []);
  
  const onPress = async(page)=>{
    await dispatch(getAllProductsPage(page, 12));
 }

  const allProducts = useSelector((state)=>state.productsReducer.allProducts)
  
  let items = [];
  let pagination = [];

  try{
      if (allProducts.data)
          items = allProducts.data;
        
      else
          items = []
      
        if (allProducts.paginationResult)
            pagination = allProducts.paginationResult.numberOfPages;
        else
          pagination = []

  }catch (e){
      console.log(e);
  }
    return [items , pagination , onPress, loading]
}

export default ViewProductAdminHook;



