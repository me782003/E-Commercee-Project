
import React, { useState , useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/brandActions';
import { CompactPicker } from 'react-color';
import { getOneCategory } from '../../redux/actions/subCategoryAction';
import { createProduct, getOneProduct, updateProduct } from '../../redux/actions/productAction';
import notify from './../../pojectHooks/useNotification';
import { useNavigate } from 'react-router-dom';

const AdminEditProductHook = (id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()


    //use Effect state
    useEffect(()=>{
        const run = async()=>{
            await dispatch(getOneProduct(id));
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, []);

    //get one product details
    const item = useSelector(state => state.productsReducer.oneProduct);
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

        useEffect(()=>{
            if(item && item.data){
                setProdName(item.data.title);
                setProdDescription(item.data.description);
                setPriceBefore(item.data.price);
                setPriceAfter(item.data.priceAfterDiscount);
                setQty(item.data.quantity);
                setCatID(item.data.category);
                setBrandID(item.data.brand);
                setColors(item.data.availableColors);
                setImages(item.data.images);
                console.log(item.data.priceAfterDiscount)
                
            }
        },[item]);

        const onChangeProductName = (e)=>{
            setProdName(e.target.value)
        }
    
        
        const onChangeProductDescription = (e)=>{
            setProdDescription(e.target.value)
        }
    
        const onChangePriceBefore = (e)=>{
            setPriceBefore(e.target.value);
            console.log(e.target.value)
            
        }
    
        const onChangePriceAfter = (e)=>{
                setPriceAfter(e.target.value);
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
        console.log(selectedList)

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
        setCatID(e.target.value);
    }

    useEffect(()=>{
        if(catID != 0){
            const run = async()=>{
                await dispatch(getOneCategory(catID));
            }
            run();
        }

    }, [catID])

    useEffect(()=>{

        if(subCat.data){
            setOptions(subCat.data);
        }

    }, [subCat]);

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

    //convert url to file
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };

    //to update data
    const handleSubmit =async (e)=>{
        
        e.preventDefault();
        
        if(catID == 0 || prodName === '' || prodDescription === '' || images.length <= 0 || priceBefore <= 0){
            notify("أكمل البيانات قبل عملية الإرسال" ,"error");
            return ;
        }
        
        if(+priceAfter > +priceBefore){
            notify('يجب ان يكون السعر بعد الخصم اقل منه قبل الخصم أو يساويه' , 'warning');
           
            return ;
        }
        
        if(qty < 0){
            notify( 'لا يمكن أن تكون كمية المنتج أصغر من 0  ' , 'warning');
            return;
        }
            

        console.log('////////////////////')
            console.log(priceBefore);
            console.log('===================')
            console.log(priceAfter);
            console.log('////////////////////')

        let imgCover;
        if (images[0].length <= 1000) {
            convertURLtoFile(images[0]).then(val => imgCover = val)
        } else {
            imgCover = dataURLtoFile(images[0], Math.random() + ".png");
        }

        let itemImages = []
        //convert array of base 64 image to file 
        Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                if (images[index].length <= 1000) {
                    convertURLtoFile(images[index]).then(val => itemImages.push(val))
                }
                else {
                    itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                }
            })
        
        const formData = new FormData()
        formData.append('title', prodName);
        formData.append('description', prodDescription);
        formData.append('quantity', qty);
        formData.append('price', priceBefore);
        formData.append('category', catID);
        formData.append('brand', brandID);

        if(item.data.priceAfterDiscount){
            if(priceAfter != '' || priceAfter != 0){
                formData.append('priceAfterDiscount', priceAfter);
            }
        }else{
            if(priceAfter != '' && priceAfter){
                formData.append('priceAfterDiscount', priceAfter);
            }
        }


        setTimeout(() => {
            formData.append('imageCover', imgCover);
            itemImages.map((image)=>formData.append("images", image));
        }, 1000);

        colors.map((color)=>formData.append("availableColors", color));
        selectedSubID.map((item)=>formData.append("subcategory", item._id));

        setTimeout( async() => {
            setIsPress(true)
            setLoading(true);
            await dispatch(updateProduct(id,formData));
            setLoading(false);
            setIsPress(false)
        }, 1000);
        
    }

    const product = useSelector(state => state.productsReducer.updateProduct);
    
    useEffect(()=>{
        if(loading === false){
        console.log(product)
            setCatID('');
            setColors([]);
            setImages([]);
            setProdName('');
            setPriceBefore('');
            setPriceAfter('');
            setQty('');
            setOptions([]);
            setProdDescription('');
            setSelectedSubID([])
            setTimeout(()=> setLoading(true) , 1500);
            if( product && product.status === 200){
                notify( "تم تعديل المنتج بنجاح", "success");
                setTimeout(() => {
                  navigate('/admin/allproducts')
                }, 1000)
                
                
            }else{
                notify( "هناك مشكلة ", "error");

            }
        }
        
    }, [loading]);



    return [catID,brandID, prodName, priceBefore, priceAfter,qty,  handleError , images , setImages ,onShowColorPicker, onSelectCategory ,onChangeQuantity, onChangePriceBefore, onChangePriceAfter, onChangeProductDescription, onChangeProductName , prodDescription , category, options, onSelect, onRemove, onSelectBrand, brand, colors, removeColor , showColor, handleChangeComplete, handleSubmit, loading, isPress];
}

export default AdminEditProductHook
    