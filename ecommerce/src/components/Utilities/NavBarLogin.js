import React , {useState, useEffect, useLayoutEffect, useRef} from 'react';
import logo from '../../images/logo.png';
import { Container, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import login from '../../images/login.png';
import cart3 from '../../images/cart3.png';
import NavbarSearchHook from '../../pojectHooks/search/navbar-search-hook';
import notify from '../../pojectHooks/useNotification';

import GetAllUserCartHook from '../../pojectHooks/cart/get-all-user-cart-hook';
import { BrowserRouter, useHref, useInRouterContext, useLocation, useNavigate, useNavigation } from 'react-router-dom';


const NavBarLogin = () => {
    // const dispatch = useDispatch()
    const locationHook = useLocation()

    const [searchWord, onChangeSearch] = NavbarSearchHook();

    let word = "";
    if(localStorage.getItem('searchWord') != null){
        word = localStorage.getItem('searchWord');
    }

    const [user, setUser] = useState('');
   
    useLayoutEffect(()=>{

        // console.log(window.location.href)
        if(localStorage.getItem('userData') != null){
            setUser(JSON.parse(localStorage.getItem('userData')))
        }
        // dispatch(getLoggedUser());
        
    },[]);

      const logOut = () =>{
        localStorage.removeItem('userData');
        localStorage.removeItem('token');
        setUser('');
        notify('تم تسجيل خروجك من الحساب','info');
        setTimeout(() => {
          window.location.reload(false);
        }, 1000)
      }

      const [itemsNum, cartItem] = GetAllUserCartHook();

      


  return (

       <Navbar className={` ${locationHook.pathname  !== '/'? 'navbarNotInHome': 'navbarInHome'}`}>
            <Container  style={{width: ''}} className='d-flex justify-content-between align-items-center '>
                <Navbar.Brand className='mx-auto p-0'>
                    <a href='/' style={{textDecoration:'none', color:'white'}}>
                        <div className='ef  d-inline-block p-0  fw-bolder ms-2 ' ><span className='ef' style={{color:'#fab234'}}>E</span>market</div>
                    </a>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav  " className=' '> */}
                    <input
                        value={word}
                        onChange={onChangeSearch}
                        type="text"
                        placeholder="فيما تفكر...؟"
                        className=" my-2 my-md-0 mx-sm-3 nav-search flex-grow-1 d-block "
                        aria-label="Search"
                    />
                    
                    <div className="me-auto d-flex justify-content-end  mx-md-0" id='basic-nav-dropdown'>
                    <a href='/cart'
                            className="  d-flex justify-content-start align-items-center position-relative p-0 mx-2 mx-md-3">
                                <div   style={{width:'35px', height:'35px', backgroundColor:'#FFF', borderRadius:'50%', position:'relative'}}>
                                    <img src={cart3} alt="cart" width={25} height={25} style={{lineHeight:'40px', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}/>
                                </div>

                            <span className="position-absolute top-10 start-0 translate-middle badge rounded-pill bg-success">
                                {itemsNum || 0}
                            </span>
                        </a>
                        
                        {
                            user.name ? (
                                <NavDropdown className="nav-text d-flex justify-content-start align-items-center mx-2 mx-md-0 " title={

                                    user.name? (
                                        <div className='userLetter' style={{
                                            
                                        }}>{user.name? (user.name)[0] : ''}</div>
                                    ):null
                                } id="basic-nav-dropdown">
                                    <div className='text-center mb-3'>
                                    {
                                        user.name? (
                                            <span  className='text-dark text-center'>أهلاً <span className='ef' style={{fontFamily:'Arial'}}>{(user.name).split(' ')[0]}</span> !</span>
                                        ):null
                                    }
                                    </div>
                                    {
                                        user.role === 'admin' ?(
                                            <a className ="dropdown-item"  href="/admin/allproducts">لوحة التحكم</a>
                                            ):(
                                            <a className ="dropdown-item" href="/user/profile">الصفحة الشخصية</a>
                                        )
                                    }
                                    <NavDropdown.Divider />
                                    <a className ="dropdown-item" onClick={logOut} href="">تسجيل خروج</a>
                                </NavDropdown>
                            ):(
                                <Nav.Link href='/login'
                                    className="nav-text d-flex  justify-content-center align-items-center">
                                    <i className="fas fa-sign-in-alt  userLetter"></i>
                                </Nav.Link>
                            )
                        }
                        
                    </div>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
  )
}

export default NavBarLogin
