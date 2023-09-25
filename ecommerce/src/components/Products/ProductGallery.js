import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../pojectHooks/products/view-product-details-hook';
import { Carousel } from 'react-bootstrap'
import { Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom} from "react-image-magnifiers";

import girl from '../../images/girl.png'


import ReactImageMagnify from 'react-image-magnify';


const ProductGallery = () => {

    const {id} = useParams();
    const [item, images, cat, brand, ,loading] = ViewProductDetailsHook(id );
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

return (
        <div className="product-gallary-card  h-100 w-100 " style={{overflow:'visible'}}>

        <Carousel activeIndex={index} onSelect={handleSelect} className={`prodSlider ${images?.length === 1 ?'oneImg':''}  w-100 h-100 d-flex justify-content-center align-items-center`}>
            {
                images && images.length >= 1 ?(
                    images.map((img, index)=>{
                        return(
                            <Carousel.Item key={index} className="  " interval={1500}>
                                <div className="d-flex  justify-content-center align-items-center ">
                                    <GlassMagnifier

                                        style={{width:'500px'}}
                                        imageSrc={img}
                                        imageAlt={item.title}
                                        largeImageSrc= {img} // Optional
                                        square={true}
                                        magnifierSize={navigator.maxTouchPoints != 1 ? '50%' : '0%'}
                                        magnifierBorderSize={1}
                                        magnifierBorderColor='rgba(0, 0, 0, 0.692)'
                                    />

                                    {/* <ReactImageMagnify
                                    
                                    {...{
                                        smallImage: {
                                            alt: "Wristwatch by Ted Baker London",
                                            isFluidWidth: true,
                                            src:img,
                                          },
                                          largeImage: {
                                            src:img,
                                            width: 1000,
                                            height: 480,
                                          },
                                          enlargedImageContainerStyle: {
                                            zIndex: "1500",
                                          },
                                          enlargedImageContainerDimensions: {
                                            width: "100%",
                                            height: "100%",
                                          },
                                    }} /> */}

                                </div>
                            </Carousel.Item>
                        )
                    })
                ):null
            }
        </Carousel>
    </div>

    // <div>
    //     <ReactImageMagnify
                                    
    //         {...{
    //             smallImage: {
    //                 alt: "Wristwatch by Ted Baker London",
    //                 isFluidWidth: true,
    //                 src:girl,
    //               },
    //               largeImage: {
    //                 src:girl,
    //                 width: 1000,
    //                 height: 480,
    //               },
    //               enlargedImageContainerStyle: {
    //                 zIndex: "1500",
    //               },
    //               enlargedImageContainerDimensions: {
    //                 width: "100%",
    //                 height: "100%",
    //               },
    //         }} />
    // </div>
)
}

export default ProductGallery
