import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {  getElectricDevices, getTheMostSold } from '../../redux/actions/productAction';

const ViewElectricDevicesHook = () => {

  const eDevices = useSelector((state)=>state.productsReducer.allEDevices);
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();
  useEffect(() => {
      const get = async()=>{
        // عرض  الاجهزة الكهربائية
        setLoading(true)
          await dispatch(getElectricDevices());
        setLoading(false)

      }
      get();

    }, [])

  let items = [];
    if (eDevices.data){
      items = eDevices.data.slice(0, 8); 
    }
    else
        items = [];
  return [items, loading]

}

export default ViewElectricDevicesHook;



