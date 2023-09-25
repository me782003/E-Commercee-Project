
import  {GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_PAY, UPDATE_ORDER_DELIVER}  from "../Type";
import {useGetData, useGetDataToken} from "../../Hooks/useGetData";
import { useInsertData, useInsertDataWithImage } from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// get all orders
export const getAllOrders = (limit, page) => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type: GET_ALL_ORDERS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ALL_ORDERS,
            payload: e.response ,
        })
    }
}
// get one order
export const getOneOrder = (orderId) => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/orders/${orderId}`);
        dispatch({
            type: GET_ONE_ORDER,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ONE_ORDER,
            payload: e.response ,

        })
    }
}
// change order pay 
export const changeOrderPay = (orderId) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/orders/${orderId}/pay`);
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: e.response ,

        })
    }
}
// change order deliver 
export const changeOrderDeliver = (orderId) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/orders/${orderId}/deliver`);
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: e.response ,

        })
    }
}