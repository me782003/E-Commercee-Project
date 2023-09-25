import React, {useEffect, useState} from "react";
import ViewSearchProductHook from "../products/view-search-product-hook";


const NavbarSearchHook = () => {
    const [items, pagination, onPress, getPorduct , results] = ViewSearchProductHook();

    const [searchWord, setSearchWord] = useState('');

    //when user type word in navbar Search
    const onChangeSearch = (e)=>{
        localStorage.setItem("searchWord", e.target.value)
        setSearchWord(e.target.value);

        const path = window.location.pathname;
        if(path != '/products'){
            window.location.pathname='/products'
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            
            getPorduct();
        },1000);
    }, [searchWord]);

    return[searchWord, onChangeSearch];
}

export default NavbarSearchHook
