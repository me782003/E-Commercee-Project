import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminEditCoupon from '../../components/Admin/AdminEditCoupon'

const AdminEditCouponPage = () => {

    const [showCheckout, setShowCheckout] = useState(false)
    const cartCheckToggle = ()=>{
        setShowCheckout(!showCheckout);
    }

    return (
        <Container fluid style={{minHeight:'100vh'}}>
        <div style={{ position:'fixed'  , top:'120px' , height:'', backgroundColor:'#2D2E32', transition:'0.3s', zIndex:'99'}} className= {`admin-side-small ${showCheckout?'show':'hide'}  p-3 d-flex d-md-none`  }>
                <AdminSideBar className='mx-auto border'/>
                <div style={{
                        position:'absolute',
                        right:'calc(100% - 1px)',
                        top:'0',
                        width:'40px',
                        height:'40px',
                        backgroundColor:'#2D2E32',
                        borderRadius:'30px 0 0 30px',
                        cursor:'pointer',
                        textAlign:'center',
                }}
                    onClick={cartCheckToggle}
                >
                    <i className="fas fa-angle-left" style={{color:'#eaeaea', fontSize:'30px'}}></i>
                </div>
            </div>
                
            <Row className='border d-none d-md-flex'>
                <AdminSideBar/>
            </Row>
            
        <AdminEditCoupon/>
    </Container>
    )
}

export default AdminEditCouponPage
