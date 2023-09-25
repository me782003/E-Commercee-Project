import React from 'react'
import { Row, Col, Spinner, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UserAddressCard from './UserAddressCard'
import ViewAddressesHook from '../../pojectHooks/user/view-addresses-hook'

const UserAllAddresses = () => {

    const [res, loading] = ViewAddressesHook();

    
    return (
        <Container className='mt-4'>
            <div className="admin-content-text d-inline pb-4">دفتر العنوانين : </div>
            <div className="admin-content-text d-inline pb-4 text-secondary fs-5">لديك <span className='text-success fw-bolder'>{res.results || 0}</span> عنوان</div>
            {

                loading === false?(
                        res.status && res.status === 401? (<h6 className='text-center mt-5' style={{fontSize:'60px', color:'#9b9898'}}>قم بتسجيل الدخول وإضافة  عناوينك الشخصية</h6>):(
                            res.data && res.data.length>0? (
                                res.data.map((item, index)=>{
                                    return(
                                        <UserAddressCard key={index} item={item}/>
                                    )
                                })
                            ):<h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>  لا يوجد عناوين لك حتى الآن</h6>
                        )

                    ):(
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                        </div>
                    )
            }

            {
                loading === false ?(
                    res && res.status === 'success' ?(
                        <Row className="justify-content-center my-3">
                            <Col className=" justify-content-center ">
                                <Link className='' to="/user/add-address" style={{ textDecoration: "none" }}>
                                    <button className="btn-save fs-5 ">إضافه عنوان جديد</button>
                                </Link>
                            </Col>
                        </Row>
                    ):null

                ):null
            }
        </Container>
    )
}

export default UserAllAddresses