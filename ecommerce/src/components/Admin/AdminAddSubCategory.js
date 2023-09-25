import React, { useEffect , useState } from 'react'
import { Row, Col , Container, Spinner} from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AdminAddSubCategoryHook from '../../pojectHooks/subCategory/admin-add-subCategory-Hook';
import {Online, Offline} from 'react-detect-offline'

const AdminAddSubCategory = () => {

const [id, name, loading, category, subCategory, handleChange, handleSubmit , onChangeName, isPress ] = AdminAddSubCategoryHook();

    return (
        <Container className='mt-4'>
            <Row className="justify-content-start ">

                <div className="admin-content-text pb-4">إضافة تصنيف فرعي جديد</div>
                <Col sm="8">

                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اسم التصنيف الفرعي"
                    />

                    <select defaultValue={'0'} name="category" id="cat" className=" text-inputs mt-3 px-2" onChange={handleChange}>
                        <option value="0" disabled hidden>إختر تصنيفاً رئيسياً </option>

                        {
                            category.data && category.data.length>0 ? (
                                category.data.map((item)=>{
                                    return(
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                        )
                                })
                            ):null
                        }
                    </select>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">
                        {
                            isPress?(
                                loading?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ التصنيف الفرعي"
                        }
                    </button>
                </Col>
            </Row>

        </Container>
    )
}

export default AdminAddSubCategory
