import React, { useEffect } from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Utilities/Pagination'
import baseUrl from '../../API/baseUrl'
import {  useDispatch, useSelector} from 'react-redux';
import { getAllCategory, getAllCategoryPage } from '../../redux/actions/categoryAction';
import HomePage from '../Home/HomePage';
import AllCategoryPageHook from '../../pojectHooks/category/all-category-page-Hook';
const AllCategoryPage = () => {

const [category ,pageCount , getPage] = AllCategoryPageHook()



  return (

    <div style={{minHeight: '100vh'}}>
        <CategoryContainer data = {category.data}/>

        {
          pageCount >= 2? (
            
             <Pagination pageCount = {pageCount} onPress={getPage}/>

          ):null
        }
    </div>
  )
}

export default AllCategoryPage;

