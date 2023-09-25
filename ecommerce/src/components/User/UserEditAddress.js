import React from 'react'
import { Row,Col , Container, Spinner} from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import EditAddressHook from '../../pojectHooks/user/edit-address-hook';

const UserEditAddress = () => {

    const {id} = useParams();

    const [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, handleEdit,editLoading, isPress] = EditAddressHook(id);


    return (
        <Container className = 'mt-4'>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">تعديل العنوان </div>
                <Col sm="8">
                    <input
                        onChange={onChangeAlias}
                        value={alias}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                        style={{backgroundColor:'#FFF'}}
                    />
                    <textarea
                        onChange={onChangeDetails}
                        value={details}
                        className="text-inputs p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                        style={{height:'100px', backgroundColor:'#FFF'}}
                    />
                    <input
                        onChange={onChangePhone}
                        value={phone}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        style={{backgroundColor:'#FFF'}}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleEdit} className="btn-save d-inline mt-2 ">{
                        isPress?(
                            editLoading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):" حفظ تعديل العنوان"
                    }</button>
                </Col>
            </Row>
        </Container>
    )
}

export default UserEditAddress
