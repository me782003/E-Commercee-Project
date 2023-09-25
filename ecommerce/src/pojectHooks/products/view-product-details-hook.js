import React, {useEffect, useLayoutEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { getOneProduct, getProductsLike } from '../../redux/actions/productAction';
import { getOneCategory } from '../../redux/actions/categoryAction';
import { getOneBrand } from '../../redux/actions/brandActions';


const ViewProductDetailsHook = (prodID) => {
    // const {id} = useParams()
    const dispatch = useDispatch();
        const oneProduct = useSelector(state => state.productsReducer.oneProduct);
        
  const [loading, setLoading] = useState(true)


    useEffect(()=>{
        const get = async()=>{
            setLoading(true)
                await dispatch(getOneProduct(prodID));
            setLoading(false)
        }
        get();
    }, []);
    
    
  
    const oneCategory = useSelector(state => state.allCategory.oneCategory);
    const oneBrand = useSelector((state) => state.allBrand.oneBrand);
    const productsLike = useSelector((state) => state.productsReducer.productLike);

    //to show product item
    let item = [];
    if( oneProduct && oneProduct.data){
        item = oneProduct.data;
    }else{
        item = [];
    }

    useEffect(()=>{
        const get = async()=>{
            if (item.category)
                 await dispatch(getOneCategory(item.category));
            if (item.brand)
                 await dispatch(getOneBrand(item.brand));
            if (item.category)
                 await dispatch(getProductsLike(item.category));

        }
        get();
    }, [item]);

    let images  = [];
    if(item.images){
        // images = item.images.map((img) => {return { original: img, thumbnail: img}})
        images = item.images
    }else{
        // images = [{original:`${mobile}`}]
        images = []
    }
  

    //to show category item
    let cat = [];
  
    if(oneCategory && oneCategory.data){
      cat = oneCategory.data;
    }else{
      cat = [];
    }

//to show brand item
    let brand = [];
    if (oneBrand && oneBrand.data)
    brand = oneBrand.data;
    else
        brand = []

    //to show products that have the same category of the selected product

    let prodsLike = [];
    // setTimeout(() => {
      
            if(productsLike && productsLike.data)
                prodsLike =  productsLike.data
          else
            prodsLike=[];
    // }, 1000)
    

    
    return [item , images, cat, brand, prodsLike, loading];

}

export default ViewProductDetailsHook
