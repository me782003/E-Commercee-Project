import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import SideBarSearchHook from '../../pojectHooks/search/sideBar-search-hook'

const SideFilter = () => {
  const [category, brands, clickCategory, clickBrand, priceFrom , priceTo] = SideBarSearchHook();
  const [showMoreBrands , setShowMoreBrands] = useState(false);
  const [showMoreCats , setShowMoreCats] = useState(false);

  useEffect(()=>{
    setShowMoreBrands(false);
  },[]);

  const onShowMoreCats =()=>{
    setShowMoreCats(!showMoreCats);
  }

  let showBrandClass='', showCatClass = '';
  if(showMoreBrands === true){
    showBrandClass='showMoreBrands';
  }
  else{
    showBrandClass='';
  }

  if(showMoreCats === true){
    showCatClass = 'showMoreCats'
  }
    return (
        <div className="mt-3">
        <Row>
          <div className="side-search d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div  className="d-flex mt-3 item">
              <input className='' onChange={clickCategory} type="checkbox" value='0' checked={localStorage.getItem('catChecked') ===''? true:false}/>
              <div className="filter-sub me-2 ">الكل</div>
            </div>

            {
              category?(
                category.map((cat, index)=>{
                  return(
                    <div key = {index} className={`d-flex mt-3 item ${showCatClass}`}>
                      <input className='catInputs' onChange={clickCategory} type="checkbox" value={cat._id} />
                      <div className="filter-sub me-2 ">{cat.name}</div>
                    </div>
                  )
                })
              ): <h6>لا يوجد تصنيفات</h6>
            }
            {
              category?.length >= 10? (
                <div  onClick={onShowMoreCats} className='filter-sub showMore' >عرض {showMoreCats === true ? "أقل": "المزيد"}...</div>
              ):null
            }

          </div>
  
          <div  className="side-search d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className={`d-flex mt-3 item`}>
              <input onChange={clickBrand} type="checkbox" value="0" checked={localStorage.getItem('brandChecked') ===''? true : false} />
              <div className="filter-sub me-2  ">الكل</div>
            </div>
            {
              brands? (
                brands.map((brand, index)=>{
                  return(
                    <div key = {index} className={`d-flex mt-3 item ${showBrandClass}`}>
                      <input className='brandInputs' onChange={clickBrand} type="checkbox" value={brand._id} />
                      <div className="filter-sub me-2 ">{brand.name}</div>
                    </div>
                  )
                })
              ):<h6>لا يوجد ماركات</h6>
            }
            {
              brands?.length >= 10 ? (
                <div  onClick={()=>setShowMoreBrands(!showMoreBrands)} className='filter-sub showMore' >عرض {showMoreBrands===true? "أقل": "المزيد"}...</div>
              ):null
            }
          </div>
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
              value={localStorage.getItem('priceFrom')||''}
              onChange={priceFrom}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
              value={localStorage.getItem('priceTo')||''}
              onChange={priceTo}
              className="m-2 text-center"
              type="number"
              style={{ width: "50px", height: "25px" }}
            />
          </div>
        </Row>
      </div>
    )
}

export default SideFilter
