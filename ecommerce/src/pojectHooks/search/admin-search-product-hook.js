import React, { useEffect, useState } from 'react'
import ViewSearchProductHook from '../products/view-search-product-hook';

const AdminSearchProductHook = () => {
    const [items, pagination, onPress, getPorduct , results] = ViewSearchProductHook();
 
    const [adminSearch, setAdminSearch] = useState('')
    useEffect(()=>{
        localStorage.setItem("searchWord",'')
        localStorage.setItem("catfromHome",'')
    }, [])
    const onChangeAdminSearch = (e)=>{
        localStorage.setItem("searchWord", e.target.value)
        setAdminSearch(e.target.value);
        const path = window.location.pathname;
    }
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            const get = async()=>{
                setloading(true)
                await getPorduct();
                setloading(false)
            }

            get()
        },1000);
    }, [adminSearch]);

    return[adminSearch , onChangeAdminSearch, loading]

}

export default AdminSearchProductHook
