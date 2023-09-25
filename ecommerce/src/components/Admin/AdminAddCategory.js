import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../pojectHooks/category/add-category-hook';
const AdminAddCategory = () => {

    const [img, name, loading, isPress , handleSubmit, onImageChange , onChangeName] = AddCategoryHook();
        
    return (
        <Container className='mt-4'>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4 ">إضافة تصنيف جديد</div>
                <Col sm="12" md='8'>
                    <div className="text-form pb-2 text-center text-md-end"> ضع صورة التصنيف</div>

                    <div className='d-flex d-md-block'>
                        <label htmlFor="upload-photo" className='mx-auto'>
                            <img
                                src={img}
                                alt="image"
                                height='100px'
                                width='120px'
                                style={{cursor : 'pointer'}}
                            />
                        </label>
                        <input
                            type="file"
                            name='photo'
                            onChange={onImageChange}
                            id='upload-photo'
                        />
                    </div>
                    
                    <input
                        onChange={onChangeName}
                        type="text"
                        value ={name}
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اسم التصنيف"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="12" md='8' className="d-flex justify-content-end ">
                    
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 mb-5 ">
                    {
                            isPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ التصنيف"
                        }
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddCategory;