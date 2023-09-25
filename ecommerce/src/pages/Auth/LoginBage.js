import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../pojectHooks/Auth/login-hook'
import { ToastContainer } from 'react-toastify';

const LoginBage = () => {

    const [email, password, loading , onChangeEmail, onChangePassword, onSubmit, isPress] = LoginHook();

  return (
    <Container style={{ direction:'ltr', height:'100vh'}} className=' d-flex'>
    <Row className="py-5 d-flex justify-content-center  m-auto " style={{backgroundImage:'linear-gradient(135deg, #313237, #000000)', borderRadius:'12px', boxShadow:'0px 0px 38px -11px #444444'}}>
        <Col xs='12' className=' d-flex justify-content-center align-items-center mb-4'>
            <div className='ef  d-inline-block p-0  fw-bolder  text-center text-light' style={{fontSize:'55px'}} ><span className='ef' style={{color:'#fab234'}}>E</span>market</div>
        </Col>
        <Col xs='12' md='7' className="d-flex flex-column">
            <label className="mx-auto title-login text-light">تسجيل الدخول</label>
            <input
                style={{}}
                onChange={onChangeEmail}
                value={email}
                placeholder="الايميل..."
                type="text"
                className="nav-search py-2 my-3 text-center mx-auto rounded-pill "
            />
            <input
                onChange={onChangePassword}
                value={password}
                placeholder="كلمه السر..."
                type="password"
                className="nav-search py-2 text-center mx-auto rounded-pill"
            />
            <button onClick={onSubmit} className="btn-save mt-3 rounded-pill fs-5 fw-bolder" style={{backgroundColor:'#FAB234' , color:'#2D2E32'}}>
                {
                    isPress?(
                        loading?(
                            <Spinner style={{
                                width:'20px',
                                height:'20px',
                            }} animation="border" variant="light" role="status" />
                            ):null
                    ):"تسجيل الدخول"
                }
            </button>
            <label className="mx-auto my-4 text-light">
                ليس لديك حساب ؟{" "}
                <Link to="/register" className='text-decoration-none' >
                    <span style={{ cursor: "pointer", borderBottom:'1px solid #FFF' }} className="text-light">
                        اضغط هنا
                    </span>
                </Link>
            </label>

            <label className="mx-auto ">
                
                <Link to="/user/forget-password" className='text-decoration-none text-light' >
                    هل نسيت كلمة السر؟
                </Link>
            </label>

        </Col>
    </Row>
</Container>
  )
}

export default LoginBage
