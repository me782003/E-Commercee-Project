import React from 'react'
import CategoryContainer from '../../components/Category/CategoryContainer'
import Pagination from '../../components/Utilities/Pagination'
import BrandContainer from '../../components/Brand/BrandContainer'
import AllBrndPageHook from '../../pojectHooks/brand/all-brand-page-Hook'

const AllBrand = () => {

  const [brand, loading ,pageCount , getPage] = AllBrndPageHook();

  return (
    <div style={{minHeight: '100vh'}}>
      

        <BrandContainer data={brand.data} loading={loading}/>

        {
          pageCount >= 2?(
            <Pagination pageCount={pageCount} onPress={getPage}/>
          ):null
        }
    </div>
  )
}

export default AllBrand;
