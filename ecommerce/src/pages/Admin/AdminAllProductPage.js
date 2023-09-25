import React , {useLayoutEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import Pagination from '../../components/Utilities/Pagination'
import ViewProductAdminHook from '../../pojectHooks/Admin/view-product-admin-hook'
import { getAllProductsPage } from '../../redux/actions/productAction'
import { useDispatch } from 'react-redux'
import ViewSearchProductHook from '../../pojectHooks/products/view-search-product-hook'


const AdminAllProductsPage = () => {
    // const [items, pagination, onPress, loading] = ViewProductAdminHook();
    
    const [items, pagination, onPress, getPorduct , results]= ViewSearchProductHook();


    let pageCount=0;
    if(pagination) 
        pageCount = pagination;
    else
        pageCount = 0;


        const [showCheckout, setShowCheckout] = useState(false)

        const cartCheckToggle = ()=>{
            setShowCheckout(!showCheckout);
        }
        useLayoutEffect(()=>{
            localStorage.setItem('catChecked', '')
            localStorage.setItem('sortType', '')
        },[])
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
            <Row className=''>

                <Col >
                    <AdminAllProducts products = {items} results={results} />
                    
                    {
                        pageCount >= 2? (
                            <Pagination pageCount={pageCount} onPress={onPress}/>
                        ):null
                    }

                </Col>
            </Row>
        </Container>
    )
}

export default AdminAllProductsPage
