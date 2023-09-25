import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandActions';
import ViewSearchProductHook from '../products/view-search-product-hook';

const SideBarSearchHook = () => {
    
    const dispatch = useDispatch();
    const [items, pagination, onPress, getPorduct , results] = ViewSearchProductHook()
  
    useLayoutEffect(()=>{
        const run = async()=>{
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, []);
    
    const allCat = useSelector(state => state.allCategory.category);
    const allBrand = useSelector(state => state.allBrand.brand);

    //to get category
    let category = [];
    if(allCat.data){
        category = allCat.data;
    }
    
    //to get brand
    let brand = [];
    if(allBrand.data){
        brand = allBrand.data;
    }
    var queryCat ='', queryBrand='';
    const [catChecked, setCatChecked] = useState([]);
    const [checked, setChecked] = useState(false);

    //when user click on any check box
    const clickCategory = (e)=>{

        let value = e.target.value;
        if(value === '0'){
            setCatChecked([]);
            localStorage.setItem('catfromHome' , '')
            document.querySelectorAll('.catInputs').forEach(item=>{
                item.checked = false
            });
        }else{
            if(e.target.checked === true){
                setCatChecked([...catChecked, value]);
            }else if(e.target.checked === false){
                const newArray = catChecked.filter((e) => e !== value);
                setCatChecked(newArray);
            }
        }
    }

    useEffect(()=>{
            queryCat = catChecked.map(val=> 'category[in][]=' + val).join('&');
            localStorage.setItem('catChecked', queryCat);
            setTimeout(() => {
              getPorduct();
            }, 1000);
    }, [catChecked])
    
    const [brandChecked, setBrandChecked] = useState([]);

    //when user click on any check box
    const clickBrand = (e)=>{
        let value = e.target.value;
        if(value == 0){
            setBrandChecked([]);
            document.querySelectorAll('.brandInputs').forEach(item=>{
                item.checked = false
            });
        }else{
            if(e.target.checked === true){
                setBrandChecked([...brandChecked, value]);
            }else if(e.target.checked === false){
                const newArray = brandChecked.filter(e=> e!== value);
                setBrandChecked(newArray);
            }
        }
    }

    useEffect(()=>{

        queryBrand = brandChecked.map(val=> 'brand[in][]=' + val).join('&');
        localStorage.setItem('brandChecked', queryBrand);
        setTimeout(() => {
          getPorduct();
        }, 1000);
}, [brandChecked]);

    const [From, setPriceFrom] = useState(0);
    const [To, setPriceTo] = useState(0);

    const priceFrom = (e)=>{
        localStorage.setItem('priceFrom', e.target.value);
        setPriceFrom(e)
    }
    
    const priceTo =  (e)=>{
        localStorage.setItem('priceTo', e.target.value);
        setPriceTo(e.target.value);
    }

    useLayoutEffect(()=>{
        setTimeout(() => {
            getPorduct()
        }, 1000)
        
    }, [From, To])


    return[category, brand , clickCategory , clickBrand, priceFrom, priceTo];
    
}

export default SideBarSearchHook
