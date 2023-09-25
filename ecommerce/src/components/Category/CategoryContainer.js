import React , {useEffect} from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
import {  useDispatch, useSelector} from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';


const CategoryContainer = ({data}) => {

  
  const color = ['#ffd3e8','#f4dba5','#55cfdf','#ff6262','#0034ff','#ffd3e8']
  const loading = useSelector(state => state.allCategory.loading)

  return (
    
    <Container >
        <div className="admin-content-text mt-5 "> التصنيفات</div>
      <Row className='my-2 d-flex justify-content-start'>

        {

          loading === false ?(
            data.length> 0 ?(
              data.map((item, index)=>{
                return(<CategoryCard key={index} id={item._id} title = {item.name} img = {item.image} background={color[index]}/>)
              })

            ): <h4 className='text-danger'>لا يوجد تصنيفات</h4>
          ):     <div className='d-flex justify-content-center align-items-center mt-5'>
                  <Spinner className='spin' style={{width:'100px', height:'100px', borderWidth:'10px' , opacity:'.3'}} animation="border" variant="secondary" role="status" />
                </div>
        }

      </Row>
    </Container>
    
  )
}

export default CategoryContainer;
