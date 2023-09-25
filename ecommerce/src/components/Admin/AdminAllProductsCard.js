import React, {useRef, useState} from 'react'
import { Col,Card,Row, Button, Modal, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import { deleteProduct, getOneProduct } from '../../redux/actions/productAction'
import { useDispatch } from 'react-redux'
import notify from '../../pojectHooks/useNotification'
const AdminAllProductsCard = ({item}) => {

    const card = useRef(null);

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



        const handleDelete = async()=>{
            setIsPress(true)
            setLoading(true)
                await dispatch(deleteProduct(item._id));
            setLoading(false)
            setIsPress(false)
            setShow(false);
            card.current.remove();
            notify('تم حذف المنتج بنجاح', 'success')
        }
        let english = /^[A-Za-z0-9]/;

    
    return (
        <Col ref={card} xs="6" sm="6" md="4" lg="2" className="d-flex m-0 p-2 admin-card">
                

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header className=''  closeButton>
                <Modal.Title ><div className='text-dark-emphasis'>تأكيد عملية الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body className='fs-5 '>هل أنت متأكد من حذف ذلك المنتج؟</Modal.Body>
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

            <Card
                className="my-2 mx-0"
                style={{
                    width: "100%",
                    minHeight: "350px",
                    borderRadius: "0px",
                    border: "none",
                    padding:'10px',
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center py-2">
                    <Col className=" d-flex justify-content-between ">
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
                        <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
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
                    </Col>
                </Row>

                <div className=" d-flex align-items-center position-relative " style={{
                    height: "228px",
                    width: "100%",
                    backgroundColor: '#FFF',
                    
                }}>
                    {
              item.quantity == 0?(
              
              <span className="text-center position-absolute"
                style={{
                  bottom:'0px',
                  left:'0px',
                  // height: "35px",
                  // width: "35px",
                  backgroundColor:'#e32222d5',
                  // borderRadius:'50%',
                  boxShadow:'1px 1px 7px 1px #9a0707 inset',
                  padding:'4px',
                  color:'#FFF'
              }}
              >
                  <div className=" منتهي من المخزون"> منتهى من المخزون</div>
                
              </span>

              ):(
                item.quantity <=6 ?(
              <span className="text-center position-absolute"
                style={{
                  bottom:'0px',
                  left:'0px',
                  // height: "35px",
                  // width: "35px",
                  backgroundColor:'#f9a50bd5',
                  // borderRadius:'50%',
                  boxShadow:'1px 1px 7px 1px #b55c03 inset',
                  padding:'4px',
                  color:'#FFF'
              }}
              >
                  <div className=" منتهي من المخزون">الكمية قليلة</div>
                
              </span>

                ):(
                  null
                )

              )

              }
              
                <Link to={`/products/${item._id}`} title={item.title} className=' mx-auto d-flex justify-content-center align-items-center' style={{ textDecoration: "none" , objectFit:'contain',height:'100%', overflow:'hidden'} }>
                  <Card.Img
                    className=' '
                    style={{
                      maxHeight:'100%',
                      objectFit:'contain',
                      borderRadius:'0',
                    }}
                    src={item.imageCover}
                  />
                </Link>
          </div>
                {/* <Link to={`/products/${item._id} `}style={{ textDecoration: "none" }}> */}
                    {/* <Card.Img  variant='top' style={{ height: "228px", width: "100%" }} src={item.imageCover}/> */}
                    <Card.Body className="m-0 p-0">
                        <Card.Title>
                        <div className="card-title fw-bolder my-2 py-1" style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            direction:english.test(item.description)? 'ltr':'rtl',
                            }}>
                            <Link to={`/products/${item._id}`} title={item.title} className='text-dark' style={{ textDecoration: "none" , objectFit:'contain',height:'100%', overflow:'hidden'} }>
                                {item.title}
                            </Link>
                        </div>
                        <div className="card-title pt-1" style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            fontSize:'13px',
                            direction:english.test(item.description)? 'ltr':'rtl',
                            }}>{item.description}
                        </div>
                        </Card.Title>
                        <Card.Text>
                            <div style={{height:'100px', textAlign:'end'}} className="">
              
                                <div className="">
                                    {
                                    item.priceAfterDiscount >=1 ?(
                                        <div className="">
                                        <span className="card-price font-monospace  d-block " style={{textDecoration: 'line-through', color: '#636363'}}>{(item.price).toFixed(2).toLocaleString()}</span>
                                        <span className="card-currency font-monospace d-block"><span className="card-price font-monospace">{(item.priceAfterDiscount).toFixed(2).toLocaleString()}</span> EGP</span>
                                        <span className="px-2 " style={{color:'#f9f9fa', fontSize:'13px', backgroundColor:'#4e5051', borderRadius:'20px'}}> خصم <span className=" font-monospace">%{Math.round(100-((item.priceAfterDiscount/item.price)*100))}</span></span>

                                        </div>
                                    ):(
                                        <span className="card-currency font-monospace d-block "><span className="card-price font-monospace">{(item.price).toFixed(2).toLocaleString()}</span> EGP</span>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='d-flex justify-content-start align-items-center'>
                                <span className="fw-normal font-monospace ms-1" style={{color:'#b5b5b5'}}>({item.ratingsQuantity || 0})</span>
                                <div style={{ borderRadius:'100px' , padding:'2px 8px' ,backgroundColor: '#38AE04' , fontSize:'11px'}} className=" d-inline-flex justify-content-center align-items-center ">
                                    <i className="fas fa-star" style={{
                                    color:'#fff',
                                    fontSize: '9px'
                                    }}></i>
                                    <div className="card-rate fs-6 lh-1 font-monospace me-1">{item.ratingsAverage || 0}</div>
                                </div> 
                            </div>
                        </Card.Text>
                    </Card.Body>
                {/* </Link> */}
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard