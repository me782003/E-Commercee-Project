import React from 'react';
import { Row, Col, Modal ,Button , Container} from 'react-bootstrap';
import rate from '../../images/rate.png';
import deleteIcon from '../../images/delete.png';
import editIcon from '../../images/edit.png';
import DeleteRateHook from '../../pojectHooks/Review/delete-rate-hook';
import { useParams } from 'react-router-dom';
import EditRateHook from '../../pojectHooks/Review/edit-rate-hook';
import ReactStars from "react-rating-stars-component";
import { ToastContainer } from 'react-toastify';


const RateItem = ({review}) => {

const {id} = useParams();

    const [isUser, handleDeleteReview, handleClose , handleShow , showDelete] = DeleteRateHook(id, review);
    const [newRateText, onChangeNewRateText , handleEditReview, handleCloseEdit , handleShowEdit , showEdit , onChaneNewRateValue , newRateValue] = EditRateHook(review);


    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
            onChaneNewRateValue(newValue)
        }
    };

    const commentRate = {
        size: 15,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: review.rating,
        a11y: true,
        isHalf: true,
        edit:false,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    }
        
    return (
        <div className={`${isUser? 'user-comment': ''} p-2 px-1 mt-4 mb-2 comment mx-3 mx-sm-5`}>
            {/* MODAL FOR DELETING THE COMMNENT */}
            <Modal centered show={showDelete} onHide={handleClose}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تأكيد عملية الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5 '>هل أنت متأكد من حذف هذا التعليق؟</Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    تراجع
                </Button>
                <Button variant="danger" onClick={handleDeleteReview}>
                    حذف
                </Button>
                </Modal.Footer>
            </Modal>

            {/* MODAL FOR EDITING THE COMMNENT */}
            <Modal centered show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasise'>تعديل التعليق</div></Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    <div  className='fs-5 '>
                        <div className=' d-flex ju text-center grid gap-3 '>
                            <span style={{color:"#323232" }}>تقييمك الجديد:</span>
                            <ReactStars  {...setting}/>
                        </div>
                        <input 
                            placeholder='تعليقك الجديد...'
                            type="text" 
                            className='  w-100 my-5'
                            style={{border: 'none' , borderBottom: '2px solid #6a6666',  outline: 'none'}} 
                            value={newRateText} 
                            onChange={onChangeNewRateText}
                            />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                    تراجع
                </Button>
                <Button variant="success" onClick={handleEditReview}>
                    تعديل
                </Button>
                </Modal.Footer>
            </Modal>
            <Row className="mt-3">
                
                <div className='' style={{direction:'ltr'}}>
                    <ReactStars classNames={' mx-2 mx-md-5'} {...commentRate} />
                </div>
                <Col className="d-felx flex-wrap mx-2 mx-md-5 " >

                    <div className=' d-block d-sm-flex  justify-content-between align-items-center '>
                        <div className=' d-flex '>
                            <div className="rate-name fw-bolder fs-5 m-0 p-0">{review.user.name}</div>
                            <div className='me-2 text-black-50 '>{isUser? '(أنت)' : null}</div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
            <Row className="  mt-2 mx-2">
                <Col className="d-felx py-2 mx-2 mx-md-5">
                    <div className="rate-description  d-inline fs-6">
                        {review.review}
                    </div>

                   {
                    isUser === true ?(
                        <div className=' d-inline d-flex justify-content-end grid gap-3 '>
                            <i className="fas fa-trash-alt text-center delete-comment-icon" onClick={handleShow} style={{
                                cursor: 'pointer',
                                width:'35px',
                                height:'35px',
                                lineHeight:'40px',
                                padding:'0',
                                color:'#6e6c6c',
                                borderRadius:'50%',
                                backgroundColor:'#FFF',
                                border:'1px solid #313131',
                                fontSize:'20px',
                                
                            }}></i>
                            <i className="fas fa-cog edit-comment-icon text-center"  onClick={handleShowEdit} style={{
                                cursor: 'pointer',
                                width:'35px',
                                height:'35px',
                                lineHeight:'40px',
                                padding:'0',
                                color:'#6e6c6c',
                                borderRadius:'50%',
                                backgroundColor:'#FFF',
                                border:'1px solid #313131',
                                fontSize:'20px',
                                }}></i>

                        </div>
                        
                    ):null
                   } 
                </Col>
            </Row>
        </div>
    )
}

export default RateItem
