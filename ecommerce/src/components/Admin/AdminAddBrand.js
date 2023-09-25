import React from 'react'
import { Row,Col, Spinner, Container} from 'react-bootstrap'
import AddBrandyHook from '../../pojectHooks/brand/add-brand-hook'

const AdminAddBrand = () => {
const [img, name, loading, isPress , handleSubmit, onImageChange , onChangeName] = AddBrandyHook()


    return (
        <Container className='mt-4'>
            <Row className=" d-flex justify-content-center justify-content-md-start align-items-center  ">
                <div className="admin-content-text pb-4">إضافة ماركة جديدة</div>
                <Col sm='12' md="8" className=''>
                    <div className="text-form pb-2 text-center text-md-end"> ضع صورة الماركة</div>
                    <div className=' d-flex d-md-block'>
                        <label htmlFor="upload-photo" className='mx-auto'>
                            <img
                                className=''
                                src={img}
                                alt="image"
                                height='100px'
                                width='120px'
                                style={{cursor : 'pointer'}}
                            />
                        </label>
                        <input
                            className=''
                            type="file"
                            name='photo'
                            onChange={onImageChange}
                            id='upload-photo'
                        />
                    </div>
                    <input
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اسم الماركة"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm='12' md="8" className="d-flex justify-content-end ">
                    
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 mb-5">
                        {
                            isPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ الماركة"
                        }
                    </button>
                </Col>
            </Row>
            

        </Container>
    )
}

export default AdminAddBrand