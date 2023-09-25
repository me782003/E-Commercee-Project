import React from 'react'
import { Col,Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import AddRateHook from '../../pojectHooks/Review/add-rate-hook';
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

const RatePost = () => {

  const {id}= useParams()

  const [onChangeRateText, onChaneRateValue, rateText, rateValue , user, onSubmit] = AddRateHook(id);

  let name ='';
  if(user){
    name = user.name;
  }

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 0,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
            onChaneRateValue(newValue)
        }
    };

   
    
    return (
        <div className=' px-2 px-sm-5  mt-3'>
        <Row className="mx-2">
          <Col sm="12" className=" d-block d-sm-flex align-items-center justify-content-between mx-2">
            <div className="rate-name  fs-5 ">{name}</div>
            <div>
              <ReactStars classNames='mt-2 mt-md-0' {...setting} />
            </div>
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx  pb-2">
            <textarea
              onChange = {onChangeRateText}
              value = {rateText}
              className="input-form-area p-2 mt-2"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
            />
            <div className=" d-flex justify-content-end ">
              <div onClick={onSubmit} className="add-comment-btn py-2 text-center">تعليق</div>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default RatePost