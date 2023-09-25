import React , {useEffect, useState} from 'react'
import {  useDispatch, useSelector} from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandActions';


const HomeBrandHook = () => {

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();
    useEffect(()=>{
        const get = async()=>{
            setLoading(true)
            await dispatch(getAllBrand());
            setLoading(false)
        }
        get()
    }, []);
    
    const brand = useSelector(state => state.allBrand.brand);
    return [brand, loading];

}

export default HomeBrandHook;
