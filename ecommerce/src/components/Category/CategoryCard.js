import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({background ,id ,img, title}) => {
  return (
      <Col
            
            className="my-4 d-flex justify-content-around align-items-center me-3 " >
            <div className=" mb-3 ">
                <div
                    className=" "
                    style={{ backgroundColor: `${background}` }}></div>{" "}
                    <Link to={`/product/category/${id}`} style={{textDecoration: 'none', }}  className='category-link'>
                        <img width={80} height={80} style={{borderRadius:'50%', border:'2px solid #393939'}} draggable='false' alt="product image" src={img} className="category-link" />
                    </Link>
                <p className="categoty-card-text my-2 fs-6 user-select-none" >{title}</p>
            </div>
        </Col>
  )
}

export default CategoryCard
