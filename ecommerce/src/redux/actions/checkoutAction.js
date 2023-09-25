

import  {CREATE_ORDER_CASH, CREATE_ORDER_CARD}  from "../Type";
import {useGetData, useGetDataToken} from "../../Hooks/useGetData";
import { useInsertData, useInsertDataWithImage } from "../../Hooks/useInsertData";

// create order cash for user
export const createOrderCash = (cartId, body) => async(dispatch)=> {
    try{

        const response = await useInsertData(`/api/v1/orders/${cartId}`, body);

        dispatch({
            type: CREATE_ORDER_CASH,
            payload: response,

        });

    }catch (e){
        dispatch({
            type: CREATE_ORDER_CASH,
            payload: e.response ,

        })
    }
}
// create order with card for user
export const createOrderCard = (cartId, body) => async(dispatch)=> {
    try{

        const response = await useGetDataToken(`/api/v1/orders/checkout-session/${cartId}`, body);
        console.log(response)
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: response,

        });

    }catch (e){
        dispatch({
            type: CREATE_ORDER_CARD,
            payload: e.response ,

        })
    }
}