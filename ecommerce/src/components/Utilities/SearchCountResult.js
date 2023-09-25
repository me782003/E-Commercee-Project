import React, { useEffect, useLayoutEffect, useState } from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
import { Col, Row } from 'react-bootstrap';
const SearchCountResult = ({title, onClick}) => {
    const handler=()=> {

    }



    const clickMe = (key)=>{
        localStorage.setItem("sortType", key);
        onClick()
    }


    
    useEffect(()=>{
        document.querySelectorAll('.card-filter-item').forEach((item) =>{
           
                
            item.addEventListener('click' , ()=>{
                document.querySelectorAll('.card-filter-item').forEach(item =>{
                    item.classList.remove('active')
                })
                    item.classList.add('active')
            })
        })
    }, [localStorage.getItem('sortType')])

    useEffect(()=>{
        document.querySelectorAll('.card-filter-item').forEach((item) =>{

            if(item.dataset.type == localStorage.getItem('sortType')){
                item.classList.add('active')
            }
        })
    }, [])

    
    return (
        <Row className="d-flex justify-content-center justify-content-md-between  align-items-center pt-3 px-2">
            <Col xs='12' md='6'>
                <div className="sub-tile fw-bolder fs-4 text-center text-md-end">{title}</div>
            </Col>
            <Col xs='12' md='6' className='mt-3 mt-md-0'>
                <div className="search-count-text d-flex justify-content-center align-items-center  text-md-end">
                    <UnopDropdown
                    className=''
                        onAppear={handler}
                        onDisappearStart={handler}
                        trigger={
                            <p className="mx-1 ">
                                <img
                                    width="20px"
                                    height="20px"
                                    className="ms-1"
                                    src={sort}
                                    alt=""
                                />
                                ترتيب حسب ({localStorage.getItem('sortType')===''? 'عشوائي' : localStorage.getItem('sortType')})
                            </p>
                        }
                        delay={300}
                        align="CENTER"
                        hover= {false}
                        closeOnClickOut={true}
                        closeOnDropdownClicked={true}
                        >
                        <div className="card-filter">
                            <div onClick={()=>clickMe("")} data-type='' className="border-bottom card-filter-item">عشوائي</div>
                            <div onClick={()=>clickMe("الاكثر مبيعا")} data-type='الاكثر مبيعا' className="border-bottom card-filter-item">الاكثر مبيعا</div>
                            <div onClick={()=>clickMe("الاعلى تقييما")}data-type='الاعلى تقييما'  className="border-bottom card-filter-item">الاعلي تقييما</div>
                            <div onClick={()=>clickMe("السعر من الاقل للاعلى")}  data-type='السعر من الاقل للاعلى' className="border-bottom card-filter-item">
                                السعر من الاقل للاعلي
                            </div>
                            <div onClick={()=>clickMe("السعر من الاعلى للاقل")}  data-type ='السعر من الاعلى للاقل' className=" card-filter-item">السعر من الاعلي للاقل</div>
                        </div>
                    </UnopDropdown>
                </div>
            </Col>
        </Row>
    )
}

export default SearchCountResult