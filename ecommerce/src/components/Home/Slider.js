import React , {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import sliderimg from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";
import prod3 from "../../images/prod3.png";
import prod4 from "../../images/prod4.png";
import shoes1 from '../../images/shoes1.png';
import headphone from '../../images/headphone.jpg';
import watch from '../../images/watch.jpg';
import makeup from '../../images/makeup.jpg';
import playstation from '../../images/playstation.jpg';
import clothes from '../../images/clothes.jpg';
import NavBarLogin from './../Utilities/NavBarLogin';

const Slider = () => {

  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
  }

  return (
    <div className='position-relative'>

      <Carousel activeIndex={index} onSelect={handleSelect} className='home position-relative'>
            <Carousel.Item className="slider-background5" interval={2000}>
                <div className="d-flex  justify-content-center align-items-center h-100">
                    <img
                        style={{ height: "", width: "80%" , borderRadius:'80%'}}
                        className=""
                        src={shoes1}
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex justify-content-center align-items-center h-100 ">
                    <img
                        style={{ height: "", width: "80%", boxShadow:'rgb(198 158 19 / 85%) 2px 2px 14px 3px', borderRadius:'20px'}}
                        className=""
                        src={headphone}
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2 position-relative" interval={2000}>
            <div className="d-flex  align-items-center h-100 ">
                    <img
                        style={{ height: "", width: "80%"}}
                        className=""
                        src={watch}
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3 position-relative" interval={2000}>
                <div className="d-flex justify-content-center align-items-center h-100 ">
                    <img
                        style={{ height: "", width: "80%", boxShadow:'#ab6c39 9px 4px 26px 2px', borderRadius:'20px'}}
                        className=""
                        src={makeup}
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4 position-relative" interval={2000}>
                <div className="d-flex justify-content-center align-items-center h-100 ">
                    <img
                        style={{ height: "", width: "80%" , borderRadius:'20px' , boxShadow:'#4A2899 9px 4px 29px 2px'}}
                        className=""
                        src={playstation}
                        alt="First slide"
                    />
                    
                </div>
            </Carousel.Item>
           
        </Carousel>
            <div className='slider-overlay ef' style={{
                position:'absolute',
                top:'0',
                bottom:'0',
                left:'0',
                right:'0',
                backgroundColor:'rgb(11 40 46 / 52%)',
                color:'#FFF',
                zIndex:'100',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontSize: 'calc(1.925rem + 5.1vw)',
                fontWeight:'bolder',
                direction:'ltr',
                flexDirection:'column',                
            }}>

                <div className='ef mt-5 lh-sm' ><span className='ef' style={{color:'#fab234'}}>E</span>market</div>
                <div className='d-block lh-sm' style={{display:'block', fontSize: 'calc(1.925rem + 1.1vw)',}}>*  منذ  <span className='ef' style={{color:'#FAB234'}}>1996</span> *</div>
                
            </div>
    </div>
  )
}

export default Slider
