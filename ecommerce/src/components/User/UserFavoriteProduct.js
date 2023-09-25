import React, { useEffect , useState} from 'react'
import { Row, Spinner , Container} from 'react-bootstrap';
import ProductCard from '../Products/ProductCard';
import Pagination from '../Utilities/Pagination';
import CardProductsContainer from '../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
const UserFavoriteProduct = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const res = useSelector(state => state.wishListReducer.allWishList);

    useEffect(()=>{

        const get = async()=>{
            setLoading(true);
            await dispatch(getProductWishList());
            setLoading(false);
        }
        get();
    }, [])

    useEffect(() => {
        if(loading === false){
            if(res){
                setItems(res.data)
            }
        }
    }, [loading])


    return (
        <Container className='mt-4'>

            <div className="admin-content-text ">قائمة المفضلة</div>
            <Row style={{}} className='justify-content-start '>

                {
                    loading === false?(
                        res.status && res.status === 401? (<h6 className='text-center mt-5' style={{fontSize:'60px', color:'#9b9898'}}>قم بتسجيل الدخول وإضافة منتجاتك المفضلة</h6>):(
                            items.length <=0 ?  (<h6 className='text-center mt-5 fs-2' style={{ color:'#9b9898'}}>لا توجد منتجات مفضلة حالياً</h6>):(
                                <CardProductsContainer title="" btntitle="" pathText='' products = {items}/>
                            )
                        )

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

export default UserFavoriteProduct
