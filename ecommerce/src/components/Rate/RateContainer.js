import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../images/rate.png'
import Pagination from '../Utilities/Pagination'
import RateItem from './RateItem';
import RatePost from './RatePost';
import ViewAllReviewsHook from '../../pojectHooks/Review/view-all-reviews-hook';
import { useParams } from 'react-router-dom';

const RateContainer = ({rateAvg , rateQty}) => {
    const {id} = useParams();
    const [allReview, onPress] = ViewAllReviewsHook(id);

    return (
        <div  className='rate-container mt-5 mb-3 '  style={{backgroundColor:'#ffffff', borderRadius:'10px'}}>
            <Row>
                <Col className=" d-flex mx-4  justify-content-between align-items-center px-3 py-1">
                    <div className="sub-title d-inline p-1  fs-3">التعليقات</div>
                    <div className='d-flex mx-4 justify-content-between align-items-center'>
                        
                        <div className="cat-rate  d-inline  p-1 pt-2 fs-2 ef "><i className="fas fa-star  fs-6 " style={{color:'#FFC107'}}></i> {rateAvg}</div>
                        <div className="rate-count d-inline p-1 pt-2 fw-bolder  fs-6">({`${rateQty} تقييم`})</div>
                    </div>
                </Col>
            </Row>
                <RatePost clasName=''/>


            {
                allReview.data && allReview.data.length >= 1?(
                     allReview.data.map((review, index)=>{
                        return (
                         <RateItem key={index} review={review}/>
                        )
                     })
                ):<h6 className='fs-2 text-dark-emphasis text-center mt-3'>لا يوجد تعليقات</h6>
            }
            
            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >=2 ? (
                    <Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages:0} onPress={onPress} />
                ):null
            }

        </div>
    )
}

export default RateContainer