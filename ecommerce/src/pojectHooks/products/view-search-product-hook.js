import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllProductsPage, getAllProductsSearch } from '../../redux/actions/productAction';

const ViewSearchProductHook = () => {

  let limit = 24;
  const getPorduct = async()=>{
    getStorage();
    sortData();
    await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat === ''? `${localStorage.getItem('catfromHome')}` :queryCat}&${queryBrand}${priceFromString}${priceToString}`));
  }
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    getPorduct();
  }, [])
  
  const allProducts = useSelector((state) => state.productsReducer.allProducts);
  
    let items = []; let pagination = []; let results = 0;

  try{

    if(allProducts.data){
      items = allProducts.data;
    }else{
      items = [];
    }

  }catch(e){
    console.log(e)
  }
  
  try{
    if (allProducts.paginationResult)
        pagination = allProducts.paginationResult.numberOfPages;
  else
  pagination = []

  }catch(e){
  console.log(e)
  }

  try{
    if (allProducts.results)
    results = allProducts.results;
  else
    results = 0

  }catch(e){
    console.log(e)
  }
  
  //when select pahination page
  const onPress = async (page) => {
        getStorage();
        sortData();

      await dispatch(getAllProductsSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`));
  }
  
  let priceFromString = "", priceToString = "";
  let word = "", queryCat='', queryBrand='', priceTo = '', priceFrom =''
  let catFromHome = '';
  const getStorage = ()=>{
    if(localStorage.getItem('searchWord') != null)
            word = localStorage.getItem('searchWord')
        if (localStorage.getItem("catChecked") != null)
            queryCat = localStorage.getItem("catChecked")
        if (localStorage.getItem("brandChecked") != null)
            queryBrand = localStorage.getItem("brandChecked")
        if (localStorage.getItem("priceTo") != null)
            priceTo = localStorage.getItem("priceTo")
        if (localStorage.getItem("priceFrom") != null)
            priceFrom = localStorage.getItem("priceFrom")
        if (localStorage.getItem("catfromHome") != null)
          catFromHome = localStorage.getItem("catfromHome")

    if(priceFrom == "" || priceFrom <= 0){
      priceFromString = ""
    }else{
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    
    if(priceTo == "" || priceTo <= 0){
      priceToString = ""
    }else{
      priceToString = `&price[lte]=${priceTo}`;
    }


  }

  //when user choose sort type 
  let sortType = '', sort='';
  const sortData = ()=>{
    if(localStorage.getItem('sortType') != null){
      sortType = localStorage.getItem('sortType');
    }else{
      sortType = ''
    }

    if(sortType === "السعر من الاقل للاعلى"){
      sort = '+price';
    }
    else if(sortType === "السعر من الاعلى للاقل"){
      sort = '-price'
    }
    else if(sortType === "الاكثر مبيعا"){
      sort = '-sold'
    }
    else if(sortType === "الاعلى تقييما"){
      sort = '-ratingsAverage'
    }
  }

  

  return [items, pagination, onPress, getPorduct , results];
}

export default ViewSearchProductHook;
