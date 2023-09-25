
import  {ADD_COUPON, GET_ALL_COUPONS, DELETE_COUPON , GET_ONE_COUPON, EDIT_COUPON}  from "../Type";
import {useGetData, useGetDataToken} from "../../Hooks/useGetData";
import { useInsertData} from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import {useUpdateData} from "../../Hooks/useUpdateData";


// add coupon
export const addCoupon = (body) => async(dispatch)=> {
    try{
        const response = await useInsertData(`/api/v1/coupons`, body);
        dispatch({
            type: ADD_COUPON,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: ADD_COUPON,
            payload: e.response ,

        })
    }
}

// get all coupons 
export const getAllCoupons = () => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/coupons`);
        dispatch({
            type: GET_ALL_COUPONS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ALL_COUPONS,
            payload: e.response ,
        })
    }
}

// delete a coupon
export const deleteCoupon = (couponID) => async(dispatch)=> {
    try{
        const response = await useDeleteData(`/api/v1/coupons/${couponID}`);
        dispatch({
            type: DELETE_COUPON,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: DELETE_COUPON,
            payload: e.response ,
        })
    }
}

// get one coupon for editing
export const getOneCoupon = (couponID) => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/coupons/${couponID}`);
        dispatch({
            type: GET_ONE_COUPON,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response ,
        })
    }
}

// edit coupon
export const editCoupon = (couponID, body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/coupons/${couponID}`, body);
        dispatch({
            type: EDIT_COUPON,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: EDIT_COUPON,
            payload: e.response ,
        })
    }
}