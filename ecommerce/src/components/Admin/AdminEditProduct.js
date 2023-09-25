import React, { useState , useEffect, useRef } from 'react';
import { Row, Col, Container, Spinner } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import add from '../../images/add.png'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import { ToastContainer } from 'react-toastify';
import AdminAddProductHook from '../../pojectHooks/products/admin-add-product-hook';
import { useParams } from 'react-router-dom'
import AdminEditProductHook from '../../pojectHooks/products/edit-product-hook';

const AdminEditProduct = () => {

    const {id} = useParams();
    const [
            catID,
            brandID,
            prodName,
            priceBefore,
            priceAfter,
            qty,
            handleError,
            images,
            setImages,
            onShowColorPicker,
            onSelectCategory,
            onChangeQuantity,
            onChangePriceBefore,
            onChangePriceAfter,
            onChangeProductDescription,
            onChangeProductName, 
            prodDescription,
            category, options,
            onSelect,
            onRemove,
            onSelectBrand,
            brand,
            colors,
            removeColor,
            showColor,
            handleChangeComplete,
            handleSubmit,
            loading,
            isPress,
            ] = AdminEditProductHook(id);

  return (
        <Container className='mt-4'>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">تعديل المنتج - {prodName}</div>
                <Col xs='12' md="8">
                    <div className="text-form pb-2"> صور المنتج</div>

                    <MultiImageInput
                     handleError={handleError} 
                        allowCrop = {false}
                        images={images}
                        setImages={setImages}
                        theme={{
                            background: '#ffffff',
                            outlineColor: '#111111',
                            textColor: 'rgba(255,255,255,0.6)',
                            buttonColor: '#ff0e1f',
                            modalColor: '#ffffff',
                          }}
                          max={10}
                    />

                    <input
                        value={prodName}
                        onChange={onChangeProductName}
                        type="text"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        value={prodDescription}
                        onChange={onChangeProductDescription}
                        className="text-inputs p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        value={priceBefore}
                        onChange={onChangePriceBefore}
                        type="number"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        value={priceAfter}
                        onChange={onChangePriceAfter}
                        type="number"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم (إختياري) "
                    />
                    <input
                        value={qty}
                        onChange={onChangeQuantity}
                        type="number"
                        className="text-inputs d-block mt-3 px-3"
                        placeholder=" الكمية المتاحة"
                    />
                    <select
                        value={catID}
                        onChange={onSelectCategory}
                        defaultValue={"0"}
                        name="cat"
                        className=" text-inputs mt-3 px-2 ">
                        
                        <option  value="0" disabled hidden >التصنيف الرئيسي</option>
                        
                        {

                            category.data? (
                                category.data.map(item=>{
                                    return(
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    )
                                })
                            ):null
                        }
                    </select>

                    <Multiselect
                        className="mt-3 text-inputs-Multiselect  text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}

                    />

                    <select
                        onChange={onSelectBrand}
                        defaultValue={'0'}
                        name="brand"
                        id="brand"
                        value={brandID}
                        className=" text-inputs mt-3 px-2 ">
                        <option value="0" disabled hidden  >إختر ماركة</option>
                        
                        {

                            brand.data? (
                                brand.data.map(item=>{
                                    return(
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    )
                                })
                            ):null
                        }

                    </select>
                    <div className="text-form mt-3 "> ضع الألوان المتاحة للمنتج (إختياري)</div>
                    <div className="mt-1 d-flex">
                        {

                            colors.length >= 1 ? (
                                colors.map((color , index)=>{
                                    return(
                                        <div key={index}
                                            onClick={()=> removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color }}>
                                        </div>
                                    )
                                })
                                
                                
                            ):null

                        }
                        <img src={add} alt="" width="30px" height="35px" className="ms-5"  style={{cursor: 'pointer'}} onClick={onShowColorPicker}/>
                        {
                            showColor === true ?(
                                <CompactPicker onChangeComplete={handleChangeComplete}/>
                            ):null
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs='12' md="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 mb-3 ">
                        {
                        isPress?(
                            loading?(
                                <Spinner style={{
                                    width:'20px',
                                    height:'20px',
                                }} animation="border" variant="light" role="status" />
                                ):null
                        ):"حفظ تعديلات المنتج"
                        }
                    </button>
                </Col>
            </Row>
        </Container>
  )
}

export default AdminEditProduct
