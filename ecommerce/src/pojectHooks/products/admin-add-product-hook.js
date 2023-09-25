
import React, { useState , useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandActions';
import { getOneCategory } from '../../redux/actions/subCategoryAction';
import { createProduct } from '../../redux/actions/productAction';
import notify from './../../pojectHooks/useNotification';

const AdminAddProductHook = () => {
    const dispatch = useDispatch();

    //use Effect state
    useEffect(()=>{
        const get = async()=>{
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        get();
    }, []);


    const category = useSelector(state => state.allCategory.category);
    const brand = useSelector(state => state.allBrand.brand);
    const subCat = useSelector(state => state.subCategory.subCategory);

    //values images products
    const [images, setImages] = useState([]);
    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('');
    const [priceAfter, setPriceAfter] = useState('');
    const [qty, setQty] = useState('');
    const [catID, setCatID] = useState('');
    const [brandID, setBrandID] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [selectedSubID, setSelectedSubID] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const onChangeProductName = (e)=>{
        setProdName(e.target.value)
    }

    
    const onChangeProductDescription = (e)=>{
        setProdDescription(e.target.value)
    }

    const onChangePriceBefore = (e)=>{
        setPriceBefore(e.target.value)
    }

    const onChangePriceAfter = (e)=>{
            setPriceAfter(e.target.value)
    }

    const onChangeQuantity = (e)=>{
            setQty(e.target.value)
    }

    const onShowColorPicker = (e)=>{
        e.persist();
        setShowColor(!showColor)
    }


    const onSelect = (selectedList) => {
        setSelectedSubID(selectedList);
    }
    const onRemove = (selectedList) => {
        setSelectedSubID(selectedList);
    }

    const [options, setOptions] = useState([]);

    const handleError = (e) => console.log(e)

    //to show color picker
    const [showColor, setShowColor] = useState(false);
    //to store all picked colors
    const [colors, setColors] = useState([]);
    //while choosing new color
    const handleChangeComplete = (color) =>{
        setColors([...colors, color.hex])
        setShowColor(!showColor);
    }

    const removeColor = (color)=>{
        const newColor = colors.filter((e) => e !== color);
        setColors(newColor);
    }

    //when select category store item
    const onSelectCategory = async(e)=>{
        if(e.target.value != '0'){
           await dispatch(getOneCategory(e.target.value));
        }
        setCatID(e.target.value);
    }

    useEffect(()=>{
        if(catID != 0){
            if(subCat.data){
                setOptions(subCat.data);
            }
        }
    }, [catID])

    const onSelectBrand = (e)=>{
        setBrandID(e.target.value);
    }


    //to convert base64 to file

    function dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }
    

    //to save data

    const handleSubmit =async (e)=>{
        e.preventDefault();
       
        
        
        if(catID == 0 || prodName === '' || prodDescription === '' || images.length <= 0 || priceBefore <= 0){
            notify("أكمل البيانات قبل عملية الإرسال" ,"error");
            return ;
        }
        
        if( +priceAfter >  +priceBefore ){
            notify('يجب ان يكون السعر بعد الخصم اقل منه قبل الخصم أو يساويه' , 'warning');
            return ;
        }
        
        
        //convert base 64 image to file
        const imgCover = dataURLtoFile(images[0], Math.random()+".png");
        
        //convert array base 64 image to file
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
            return dataURLtoFile(images[index], Math.random()+".png");
        })
        
        const formData = new FormData()
        formData.append('title', prodName);
        formData.append('description', prodDescription);
        formData.append('quantity', qty);
        formData.append('price', priceBefore);
        if(priceAfter != '' || priceAfter != 0){
            formData.append('priceAfterDiscount', priceAfter);
        }
        formData.append('imageCover', imgCover);
        formData.append('category', catID);
        formData.append('brand', brandID);
        colors.map((color)=>formData.append("availableColors", color));
        selectedSubID.map((item)=>formData.append("subcategory", item._id));
        itemImages.map((image)=>formData.append("images", image));
        setIsPress(true);
        setLoading(true);
        await dispatch(createProduct(formData));
        setLoading(false);
        setIsPress(false);
    }

    const product = useSelector(state => state.productsReducer.product);

    

    useEffect(()=>{
        if(loading === false){
            console.log(product)
            setTimeout(()=> setLoading(true) , 2500);
            if(product && product?.status === 201){
                notify( "تم إضافة المنتج بنجاح", "success");
                setCatID(0);
                setColors([]);
                setImages([]);
                setProdName('');
                setPriceBefore('');
                setPriceAfter('');
                setQty('');
                setOptions([]);
                setProdDescription('');
                setSelectedSubID([])
                setBrandID(0)
                setTimeout(() => {
                    window.location.reload(false);
                }, 1000);
            }else{
                notify( "هناك مشكلة ", "error");
            }
        }
    }, [loading]);

   

    return [prodName, priceBefore, priceAfter,qty,  handleError , images , setImages ,onShowColorPicker, onSelectCategory ,onChangeQuantity, onChangePriceBefore, onChangePriceAfter, onChangeProductDescription, onChangeProductName , prodDescription , category, options, onSelect, onRemove, onSelectBrand, brand, colors, removeColor , showColor, handleChangeComplete, handleSubmit, loading, isPress];
}

export default AdminAddProductHook
    