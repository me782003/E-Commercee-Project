import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../pojectHooks/Auth/forgetPasswordHook';
import VerifyPasswordHook from '../../pojectHooks/Auth/verifyPasswordHook';
const VerifyPasswordPage = () => {
    const [code, OnChangeCode, onSubmit, loading, isPress] = VerifyPasswordHook();
    return (
        <Container style={{ direction:'ltr', minHeight:'100vh'}} className=' d-flex'>
        <Row className="py-5 d-flex justify-content-center  m-auto " style={{backgroundImage:'linear-gradient(135deg, #313237, #000000)', borderRadius:'12px', boxShadow:'0px 0px 38px -11px #444444'}}>
        <Col xs='12' className=' d-flex justify-content-center align-items-center mb-4'>
            <div className='ef  d-inline-block p-0  fw-bolder  text-center text-light' style={{fontSize:'55px'}} ><span className='ef' style={{color:'#fab234'}}>E</span>market</div>
        </Col>
            <Col xs='12' md='7' className="d-flex flex-column">
                <label className="mx-auto title-login text-light">أدخل الكود المرسل إلى البريد الإليكتروني</label>
                <input
                    onChange={OnChangeCode}
                    value={code}
                    placeholder="أدخل الكود"
                    type="number"
                    className="nav-search py-2 my-2 text-center mx-auto rounded-pill "
                    />
                
                <button onClick={onSubmit} className="btn-save mt-2 rounded-pill fs-5 fw-bolder" style={{backgroundColor:'#FAB234' , color:'#2D2E32'}}>
                {
                    isPress?(
                        loading?(
                            <Spinner style={{
                                width:'20px',
                                height:'20px',
                            }} animation="border" variant="light" role="status" />
                            ):null
                    ):"تأكيد"
                }
            </button>
            </Col>
        </Row>
    </Container>
      )
}

export default VerifyPasswordPage
