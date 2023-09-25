import React , {useEffect} from 'react'
import {  useDispatch, useSelector} from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';


const HomeCategoryHook = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllCategory());
    }, []);
    
    const category = useSelector(state => state.allCategory.category);
    const loading = useSelector(state => state.allCategory.loading);
    const color = ['#ffd3e8','#f4dba5','#55cfdf','#ff6262','#0034ff','#ffd3e8'];
    return [category, loading, color];

}

export default HomeCategoryHook
