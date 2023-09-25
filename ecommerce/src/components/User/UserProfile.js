import React, { useEffect, useState } from 'react'
import { Row, Col, Modal , Button, Container, Spinner} from 'react-bootstrap'
import editIcon from '../../images/edit.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../pojectHooks/useNotification';
import ProfileHook from '../../pojectHooks/user/profile-hook';
const UserProfile = () => {


    const [user, show, handleClose, handleShow, handleSubmit, name, phone, onChangeName, onChangePhone, changePassword , oldPassword, newPassword, confirmPassword, onChangeOldPass, onChangeNewPass, onChangeConfirmPass, loadingPass, loading, isPress, isPressPass] = ProfileHook();

    return (

        <Container className='mt-4'>


            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header centered className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تعديل بياناتك الشخصية</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اسم المستخدم..."
                        name='name'
                        onChange={onChangeName}
                        value={name}
                    />
                <input
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="رقم الهاتف"
                        name='phone'
                        onChange={onChangePhone}
                        value={phone}
                        
                    />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" style={{borderRadius:'0'}} onClick={handleClose}>
                    تراجع
                </Button>
                <Button variant="success" style={{borderRadius:'0' , backgroundColor:'#2D2E32'}} onClick={handleSubmit}>
                {
                        isPress?(
                            loading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"حفظ"
                    }
                </Button>
                </Modal.Footer>
            </Modal>


            <div className="admin-content-text">الملف الشخصي</div>
            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">الإسم:</div>
                        <div className="p-1 item-delete-edit user-profile-info">{user.name}</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div onClick={handleShow} className="d-flex mx-2" style={{cursor:'pointer'}}>
                        <i className="fas fa-cog edit-comment-icon text-center" style={{
                                cursor: 'pointer',
                                width:'30px',
                                height:'30px',
                                lineHeight:'35px',
                                padding:'0',
                                color:'#6e6c6c',
                                borderRadius:'50%',
                                backgroundColor:'#FFF',
                                border:'1px solid #313131',
                                fontSize:'15px',
                                }}></i>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">رقم الهاتف:</div>
                        <div className="p-1 item-delete-edit user-profile-info">{user.phone}</div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">البريد الإليكتروني:</div>
                        <div className="p-1 item-delete-edit user-profile-info">{user.email}</div>
                    </Col>
                </Row>
                <hr
                    className='
                    mx-auto
                    my-4
                    '
                    style={{
                    width:'75%',
                    borderTop:'1.5px solid #2D2E32'
                    }}
                />
                <Row className="mt-5">
                    <Col xs={9} md={6} className="mx-auto mx-md-3">
                        <div className="admin-content-text mb-3 text-center text-md-end mx-md-3">تغيير كملة المرور</div>
                        <input
                            type="password"
                            className=" text-inputs d-block mt-1 px-3"
                            placeholder="أدخل كلمة المرور القديمة"
                            value={oldPassword}
                            onChange={onChangeOldPass}
                        />
                        <input
                            type="password"
                            className=" text-inputs d-block mt-3 px-3"
                            placeholder="أدخل كلمة المرور الجديدة"
                            value={newPassword}
                            onChange={onChangeNewPass}
                        />
                        <input
                            type="password"
                            className=" text-inputs d-block mt-3 px-3"
                            placeholder="تأكيد كلمة المرور الجديدة"
                            value={confirmPassword}
                            onChange={onChangeConfirmPass}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={9} md={6} className="d-flex justify-content-center mx-auto mx-md-3 ">
                        <button onClick={changePassword} className="btn-save d-inline mt-2 mb-4 w-100 ">{
                            isPressPass?(
                                loadingPass?(
                                    <Spinner style={{
                                        width:'20px',
                                        height:'20px',
                                    }} animation="border" variant="light" role="status" />
                                    ):null
                            ):"حفظ كلمة المرور الجديدة"
                        }</button>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default UserProfile
