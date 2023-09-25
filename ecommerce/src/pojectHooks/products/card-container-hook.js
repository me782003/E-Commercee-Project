
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';

const CardContainerHook = () => {
    
    const dispatch =  useDispatch();

  const res = useSelector((state) => state.wishListReducer.allWishList);

  const [loading, setLoading] = useState(true);
  const [favProducts, setFavProducts] = useState([]);

  useLayoutEffect(()=>{
    const get = async()=>{
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    }
    get();
  }, []);

  useLayoutEffect(()=>{
    if(loading === false){
      if(res && res.data.length >=1){
        setFavProducts(res.data.map(item=>item._id));
      }
    }
  }, [loading])


  return [favProducts];


}

export default CardContainerHook
