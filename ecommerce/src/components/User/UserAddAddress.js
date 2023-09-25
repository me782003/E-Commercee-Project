import React from 'react'
import { Row,Col ,Container, Spinner} from 'react-bootstrap'
import AddAddressHook from '../../pojectHooks/user/add-address-hook'

const UserAddAddress = () => {
    const [alias, details, phone, onChangeAlias, onChangeDetails, onChangePhone, onSubmit,  loading , isPress] = AddAddressHook()
    return (
        <Container className="mt-4">
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-2">إضافة عنوان جديد</div>
                <Col sm="8">
                    <input
                        type="text"
                        className="text-inputs  d-block mt-3 px-3"
                        placeholder="تسمية العنوان مثلا(المنزل - العمل)"
                        onChange={onChangeAlias}
                        value={alias}
                        style={{backgroundColor:'#FFF' }}

                    />
                    <textarea
                        className="text-inputs p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="العنوان بالتفصيل"
                        onChange={onChangeDetails}
                        value={details}
                        style={{backgroundColor:'#FFF', height:'100px'}}
                    />
                    <input
                        type="text"
                        className="text-inputs  d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        onChange={onChangePhone}
                        value={phone}
                        style={{backgroundColor:'#FFF'}}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-center ">
                    <button onClick={onSubmit} className="btn-save d-inline mt-2 fs-5 ">
                    {
                        isPress?(
                            loading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"إضافة العنوان"
                    }
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAddAddress