import React, {useEffect, useState} from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CartItem from '../../components/Cart/CartItem';
import CartCheckout from './CartCheckout';
import GetAllUserCartHook from '../../pojectHooks/cart/get-all-user-cart-hook';


const CartPage = () => {

    const [itemsNum, cartItems, totalCartPrice, couponNameRes, totalPriceAfterDiscount, , loading] = GetAllUserCartHook();
    
    const [showCheckout, setShowCheckout] = useState(false)

    const cartCheckToggle = ()=>{
        setShowCheckout(!showCheckout);
    }

  return (
    <Container fluid  style={{minHeight:'100vh'}}>
        <Row className='m-0 p-0'>
            <Col sm={12} className='' >
                <div clasName='m-0 p-0'>
                    <div className="cart-title my-4 me-3">عربة التسوق</div>
                </div>
            </Col>
            {
                loading === false ?(
                    cartItems.length >=1? (
                        cartItems.map((item, index)=>{
                            return(
                                <CartItem key={index} item = {item} idProdId={item.product._id} />
    
                            )
                        })
                    ):(<h6 className='text-center my-5 fs-2' style={{ color:'#9b9898'}}>لا يوجد منتجات في العربة</h6>)
                ):(
                <div className='d-flex justify-content-center align-items-center mt-5'>
                    <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                </div>
                )
            }
        </Row>
            <div className=' '>
                <div style={{ position:'fixed'  , top:'80px' , height:'', backgroundColor:'#2D2E32', transition:'0.3s'}} className= {`cart-checkout ${showCheckout?'show':'hide'}  p-3` }>
                    <CartCheckout cartItemsLength={cartItems.length} totalCartPrice={totalCartPrice} couponNameRes={couponNameRes} totalPriceAfterDiscount={totalPriceAfterDiscount} />
                        <div style={{
                        position:'absolute',
                        left:'calc(100% - 1px)',
                        top:'0',
                        width:'40px',
                        height:'40px',
                        backgroundColor:'#2D2E32',
                        borderRadius:'0 30px 30px 0',
                        cursor:'pointer',
                        textAlign:'center',
                    }}
                    onClick={cartCheckToggle}
                    >
                        <i className="fas fa-angle-right" style={{color:'#eaeaea', fontSize:'30px'}}></i>
                    </div>
                </div>
            </div>
        
    </Container>
  )
}

export default CartPage
