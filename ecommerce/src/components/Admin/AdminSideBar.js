import React, { useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'




const AdminSideBar = () => {


    useEffect(()=>{
        let links = document.querySelectorAll('.admin-side-text');
        links.forEach(link=>{
            if(link.dataset.type === window.location.pathname){
                link.classList.add('active');
            }
        })
}, []);

    return (
        <div className="sidebar px-0 px-md-4">
            <div className="d-flex flex-column flex-md-row  py-2 justify-content-start align-items-center">
                <Link to="/admin/allorders " style={{ textDecoration: 'none'  }}>
                    <div  data-type='/admin/allorders' className="admin-side-text   p-md-2 mx-0 mx-md-2 text-center">
                        إدارة الطلبات
                    </div>
                </Link>
                <Link to="/admin/allproducts" style={{ textDecoration: 'none'  }}>
                    <div data-type='/admin/allproducts' className="admin-side-text    p-md-2 mx-0 mx-md-2 text-center">
                    إدارة المنتجات
                    </div>
                </Link>
                <Link to="/admin/addbrand" style={{ textDecoration: 'none'  }}>
                    <div data-type='/admin/addbrand' className="admin-side-text    p-md-2 mx-0 mx-md-2 text-center">
                        أضف ماركة
                    </div>
                </Link>

                <Link to="/admin/addcategory" style={{ textDecoration: 'none' }}>
                    <div data-type='/admin/addcategory' className="admin-side-text    p-md-2 mx-0 mx-md-2 text-center">
                    أضف تصنيف
                    </div>
                </Link>

                <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                    <div data-type='/admin/addsubcategory' className="admin-side-text   p-md-2 mx-0 mx-md-2 text-center">
                أضف تصنياً فرعياً
                    </div>
                </Link>
                <Link to="/admin/addproduct" style={{ textDecoration: 'none' }}>
                    <div data-type='/admin/addproduct' className="admin-side-text    p-md-2 mx-0 mx-md-2 text-center">
                        أضف منتج
                    </div>
                </Link>
                <Link to="/admin/addcoupon" style={{ textDecoration: 'none' }}>
                    <div data-type='/admin/addcoupon' className="admin-side-text    p-md-2 mx-0 mx-md-2 text-center">
                        أضف كوبون
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar