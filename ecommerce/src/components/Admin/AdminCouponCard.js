import React from 'react'
import { Row, Col, Modal, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import deleteicon from '../../images/delete.png'
import editIcon from '../../images/edit.png'
import CouponCardHook from '../../pojectHooks/coupon/coupon-card-hook';

const AdminCouponCard = ({coupon}) => {

    const [show, handleShow, handleClose, handleDelete,  loading, isPress, couponCard] = CouponCardHook(coupon._id);


    return (
        <div ref={couponCard} className="user-address-card my-3 px-2 py-2">



        {/* deletion modal */}
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تأكيد عملية الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5 '>هل أنت متأكد من حذف هذا الكوبون؟</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} style={{borderRadius:'0'}}>
                    تراجع
                </Button>
                <Button variant="danger" onClick={handleDelete} style={{borderRadius:'0'}}>
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
                <Row>
                        <Col xs="12" className="d-flex justify-content-end">
                        <div className="d-flex p-2">
                            <Link to={`/admin/editcoupon/${coupon._id}`} style={{ textDecoration: "none" }}>
                                <div className="d-flex mx-3">
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

                <Row className=" ">
                    <Col xs='12' style={{flexGrow: '1'}}   className='mt-3  '>
                        <div className="p-2 fw-bolder fs-5 d-inline " style={{color:'#817e7e'}}>اسم الكوبون:</div>
                            <div
                                className='ef'
                                style={{
                                    marginRight:'20px',
                                    display:'inline',
                                    color: "#0c968d",
                                    fontFamily: "Almarai",
                                    fontSize: "16px",
                                    fontWeight: 'bolder',
                                }}>
                                {coupon.name}
                        </div>
                    </Col>
                </Row>

            </Row>

            

            <Row className="mt-3">
                <Col xs="12" className="d-flex ">
                    <div
                        style={{
                            color: "#2D2E32",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                            // fontWeight:'bolder'
                        }}
                        className='mx-2'
                        >
                            
                         تاريخ الإنتهاء: <span className='ef mx-3 fs-6 fw-bolder'>{(coupon.expire).match(/\d+-\d+-\d+/g)}</span>
                    </div>

                    
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#2D2E32",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                            // fontWeight:'bolder'
                        }}
                        className="mx-2">
                         نسبة الخصم: <span className='ef mx-3 fs-6 fw-bolder'> %{coupon.discount}</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default AdminCouponCard
