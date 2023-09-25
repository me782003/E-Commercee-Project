import  {ADD_TO_CART, GET_ALL_USER_CART, CLEAR_ALL_USER_CART, DELETE_ITEM_FROM_CART,UPDATE_ITEM_FROM_CART, APPLY_COUPON_CART}  from "../Type";
import {useGetData, useGetDataToken} from "../../Hooks/useGetData";
import { useInsertData, useInsertDataWithImage } from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";


// add a product the cart
export const addproductToCart = (body) => async(dispatch)=> {
    try{
        const response = await useInsertData(`/api/v1/cart`, body);
        dispatch({
            type: ADD_TO_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: ADD_TO_CART,
            payload: e.response ,

        })
    }
}

// get all cart items 
export const getAllUserCartItems = () => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/cart`);
        dispatch({
            type: GET_ALL_USER_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ALL_USER_CART,
            payload: e.response ,

        })
    }
}
// clear all cart items 
export const clearAllCartItems = () => async(dispatch)=> {
    try{
        const response = await useDeleteData(`/api/v1/cart`);
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: e.response ,

        })
    }
}

// dlete  cart item
export const deleteCartItem = (cartId) => async(dispatch)=> {
    try{
        const response = await useDeleteData(`/api/v1/cart/${cartId}`);
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: e.response ,

        })
    }
}
// update  cart item
export const updateCartItem = (cartId, body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/cart/${cartId}`, body);
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: e.response ,

        })
    }
}

// apply coupon 
export const applyCouponCart = (body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
        dispatch({
            type: APPLY_COUPON_CART,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: APPLY_COUPON_CART ,
            payload: e.response ,

        })
    }
}