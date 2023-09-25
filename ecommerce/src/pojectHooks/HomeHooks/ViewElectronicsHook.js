import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getElectronics  } from '../../redux/actions/productAction';

const ViewElectronicsHook = () => {

  const electros = useSelector((state)=>state.productsReducer.allElectronics);
  const [loading, setLoading] = useState(true)

  
  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        setLoading(true)
        await dispatch(getElectronics());
        setLoading(false)
      }
      get();

    }, [])

  let items = [];
    if (electros.data){
      items = electros.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewElectronicsHook;



