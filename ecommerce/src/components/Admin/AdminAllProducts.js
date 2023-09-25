import React from 'react'
import { Container, Row, Spinner ,Col} from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'
import AdminSearchProductHook from './../../pojectHooks/search/admin-search-product-hook';

const AdminAllProducts = ({products, results}) => {

    const[adminSearch , onChangeAdminSearch, loading] = AdminSearchProductHook()

    return (
        <Container fluid className='mt-4'>
            <Row>
                <Col>
                    <div className='admin-content-text'>إدارة جميع المنتجات</div>
                    {
                        results?(
                            <div className='admin-content-text fs-5 fw-normal my-3'>عدد المنتجات في مخزونك {results} منتج</div>
                        ):null
                    }
                </Col>
                <Col xs='12' md='4' className='my-3 my-md-0'>
                    <input onChange={onChangeAdminSearch} value={adminSearch} type="text" className='text-inputs px-2 py-1' name="" id="" placeholder='بحث...' style={{height:'35px', border:'none', borderRadius:'5px'}}/>
                </Col>
            </Row>
            <Row className=' justify-content-start admin-cards'>
                {
                    loading === false?(
                        products && products.length >=1 ?(
                            products.map((prod, index)=> <AdminAllProductsCard key={index} item = {prod}/> )
                        ):<h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>لم تقم بإضافة منتجات أي حتى الآن!</h6>
                    ):(
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                        </div>
                    )
                }
            </Row>
            
        </Container>
    )
}

export default AdminAllProducts