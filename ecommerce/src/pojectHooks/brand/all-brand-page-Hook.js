import React , {useEffect} from 'react';
import {  useDispatch, useSelector} from 'react-redux';
import { getAllBrand, getAllBrandPage } from './../../redux/actions/brandActions';

const AllBrndPageHook= () => {
    
        const dispatch = useDispatch();
      
        useEffect(()=>{
          const get = async()=>{
            await dispatch(getAllBrand(20));
          }

          get();
        }, []);
        
        const brand = useSelector(state => state.allBrand.brand);
        const loading = useSelector(state => state.allBrand.loading);
      
        let pageCount = 0;
        if(brand.paginationResult){
          pageCount = brand.paginationResult.numberOfPages;
        }
      
        const getPage = async(page)=>{
          await dispatch(getAllBrandPage(page));
        }
    
        return [brand , loading, pageCount , getPage];
    }
    
    export default AllBrndPageHook;
    



