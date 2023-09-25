import React from 'react'
import { Container,Row,Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../pojectHooks/Auth/register-hook'
const RejesterBage = () => {

  const [
          name,
           email,
            phone,
             password,
              confirmPassword,
               onChangeName,
                onChangeEmail,
                 onChangePhone,
                  onChangePassword,
                   onChangeConfirmPassword,
                    loading,
                      onSubmit,
                        isPress,
                            ] = RegisterHook()

  return (
    <Container style={{ direction:'ltr', minHeight:'100vh'}} className=' d-flex '>
        <Row className="py-5 d-flex justify-content-center  m-auto my-5" style={{backgroundImage:'linear-gradient(135deg, #313237, #000000)', borderRadius:'12px', boxShadow:'0px 0px 38px -11px #444444'}}>
        <Col xs='12' className=' d-flex justify-content-center align-items-center mb-4'>
          <div className='ef  d-inline-block p-0  fw-bolder  text-center text-light' style={{fontSize:'55px'}} ><span className='ef' style={{color:'#fab234'}}>E</span>market</div>
        </Col>
          <Col xs='12' md='7' className="d-flex flex-column ">
            <label className="mx-auto title-login text-light">إنشاء حساب جديد</label>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="اسم المستخدم..."
              type="text"
              className="nav-search py-2 my-2 text-center mx-auto rounded-pill "
              name='username'
              
            />
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder="الايميل..."
              type="email"
              className="nav-search py-2 my-2 text-center mx-auto rounded-pill "
              />
            <input
            
              value={phone}
              onChange={onChangePhone}
              placeholder="رقم الهاتف..."
              type="phone"
              className="nav-search py-2 my-2 text-center mx-auto rounded-pill "
              />
            <input
              value={password}
              onChange={onChangePassword}
              placeholder="كلمه السر..."
              type="password"
              className="nav-search py-2 my-2 text-center mx-auto rounded-pill "
              />
            <input
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="تأكيد كلمة السر..."
              type="password"
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
                    ):"إنشاء حساب"
                }
            </button>
            <label className="mx-auto my-4 text-light">
               لديك حساب بالفعل ؟
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-light border-bottom  border-light mx-1">
                  اضغط هنا 
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
  )
}

export default RejesterBage
