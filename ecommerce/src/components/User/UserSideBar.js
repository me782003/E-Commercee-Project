import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Nav } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'





const UserSideBar = () => {



    useLayoutEffect(()=>{
            let links = document.querySelectorAll('.user-side-text');
            links.forEach(link=>{
                if(link.dataset.type === window.location.pathname){
                    link.classList.add('active')
                }
                    
            })

    }, []);

    return (
        <div className="user-sidebar px-4">
            <div className="d-flex flex-row py-2 justify-content-start align-items-center">
                
                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div data-type = '/user/profile' className="user-side-text   p-2 mx-2 text-center">
                        الملف الشخصي
                    </div>
                </Link>
            
                <Link to="/user/allorders" style={{ textDecoration: 'none' } }>
                    <div data-type='/user/allorders'  className={` user-side-text   p-2 mx-2 text-center`}>
                         الطلبات
                    </div>
                </Link>
                <Link to="/user/favoriteproducts" style={{ textDecoration: 'none' }}>
                    <div data-type='/user/favoriteproducts' className="user-side-text   p-2 mx-2 text-center">
                         المفضلة
                    </div>
                </Link>
                <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
                    <div data-type='/user/addresses' className="user-side-text   p-2 mx-2 text-center">
                        العنوانين
                    </div>
                </Link>
                
                

            </div>
        </div>
    )
}
export default UserSideBar