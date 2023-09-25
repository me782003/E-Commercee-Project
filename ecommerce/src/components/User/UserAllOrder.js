import React from 'react'
import { Col, Row , Container, Spinner} from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import UserGetAllOrdersHook from '../../pojectHooks/user/user-get-all-orders-hook'
import Pagination from './../Utilities/Pagination';

const UserAllOrder = () => {

    const [userName, results, paginate, orderData, onPress, loading] =UserGetAllOrdersHook();


    return (
        <Container className='mt-4'>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <div className="admin-content-text pb-4 "> أهلاً <span className='text-success fw-bolder fs-4'>{userName}</span> </div>
                <div className="admin-content-text pb-4 "> عدد الطلبات التي قمت بها مسبقاً : <span className='text-success fw-bolder fs-4 font-monospace'>#{results}</span> </div>
            </div>
        <Row className='justify-content-between'>
            {
                loading == false? (
                    orderData.length >=1? (
                      orderData.map((orderItem, index)=>{
                          return(
                              <UserAllOrderItem key={index} orderItem={orderItem} loading={loading} />
  
                          )
                      })
                  ):(
                      <h6>لا يوحد طلبات حتى الآن</h6>
                  )
                ):(
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                    </div>
                )
            }

            
        </Row>
        
        {

            paginate.numberOfPages >1? (
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

export default UserAllOrder
