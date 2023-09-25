import React , {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserAddresses } from '../../redux/actions/userAddressesAction';

const ViewAddressesHook = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const get = async()=>{
        setLoading(true);
        await dispatch(getAllUserAddresses());
        setLoading(false);
    }
    get();
  }, [])

  const res = useSelector(state => state.userAddressReducer.allAddresses)

  
  return [res, loading];
}

export default ViewAddressesHook
