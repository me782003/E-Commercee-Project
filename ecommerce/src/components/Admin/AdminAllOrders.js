import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import UserGetAllOrdersHook from '../../pojectHooks/user/user-get-all-orders-hook';
import Pagination from '../Utilities/Pagination';

const AdminAllOrders = () => {

    const [userName, results, paginate, orderData, onPress, loading] =UserGetAllOrdersHook();

    return (
        <Container  className='mt-4' style={{}}>
            <div className='admin-content-text'>إدارة جميع الطلبات</div>
            <Row className='justify-content-start my-4'>

            {
                loading === false?(
                    orderData.length >=1? (
                        orderData.map((orderItem, index)=>{
                            return(
                                <AdminAllOrdersItem key={index} orderItem={orderItem} />
                            )
                        })
                    ):(
                        <h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>لا يوحد طلبات حتى الآن</h6>
                    )
                ):(
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                    </div>
                )
            }
            
            </Row>
            {
            paginate.numberOfPages >= 2? (
                <Row>
                    <Col>
                        <Pagination onPress={onPress}  pageCount={paginate.numberOfPages? paginate.numberOfPages: 0} />
                    </Col>
                </Row>
            ): null

        }
        </Container>
    )
}

export default AdminAllOrders
