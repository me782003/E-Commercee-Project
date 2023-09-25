import React, { useState } from 'react'
import { Row, Col, Modal , Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import editIcon from '../../images/edit.png'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCoupon } from '../../redux/actions/couponAction';
import { deleteUserAddress } from '../../redux/actions/userAddressesAction';
import notify from '../../pojectHooks/useNotification';
import DeleteUserAddressHook from '../../pojectHooks/user/delete-user-address-hook';

const UserAddressCard = ({item}) => {

    const [show, handleShow, handleClose, handleDelete, loading, isPress] = DeleteUserAddressHook(item._id);


    return (
        <div className="user-address-card my-3 pe-2 pe-md-4 ps-2 pt-3" style={{borderRadius:'0'}}>

            {/* deletion modal */}
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تأكيد عملية الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5'>هل أنت متأكد من حذف هذا العنوان؟</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" style={{borderRadius:'0'}} onClick={handleClose}>
                    تراجع
                </Button>
                <Button variant="danger" style={{borderRadius:'0'}} onClick={handleDelete}>
                    {
                        isPress?(
                            loading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"حذف"
                    }
                </Button>
                </Modal.Footer>
            </Modal>

            <Row className="d-flex justify-content-between ">
                <Col xs="1" sm  className=''>
                    <div className="p-2 fw-bolder" style={{fontSize:'20px' , color:'#2D2E32'}}>{item.alias}</div>
                </Col>
                <Col xs="4" sm className="d-flex justify-content-end ">
                    <div className="d-flex p-2 grid gap-2">
                        <Link to={`/user/edit-address/${item._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-flex mx-2">
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
                        </Link>
                        <div onClick={handleShow} className="d-flex ">
                        <i className="fas fa-trash-alt text-center delete-comment-icon" style={{
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
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#363635",
                            fontFamily: "Almarai",
                            fontSize: "15px",
                            fontWeight:'bolder'
                        }}>
                            {item.details}
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item.phone}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UserAddressCard
