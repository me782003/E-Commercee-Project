import {ADD_USER_ADDRESS, GET_ALL_USER_ADDRESSES, DELETE_USER_ADDRESS, GET_ONE_USER_ADDRESS, EDIT_USER_ADDRESS} from '../Type';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';
import {useGetData, useGetDataToken} from '../../Hooks/useGetData';
import useDeleteData from '../../Hooks/useDeleteData';
import { useUpdateData } from '../../Hooks/useUpdateData';

//add user address
export const userAddAddress = (body) => async(dispatch)=> {
    try{
        const response = await useInsertData(`/api/v1/addresses` , body);
        dispatch({
            type: ADD_USER_ADDRESS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: ADD_USER_ADDRESS,
            payload:e.response,
        })
    }
}
//get  all user addresses
export const getAllUserAddresses = () => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/addresses`);
        dispatch({
            type: GET_ALL_USER_ADDRESSES,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ALL_USER_ADDRESSES,
            payload:e.response,
        })
    }
}

//delete user address
export const deleteUserAddress = (addressID) => async(dispatch)=> {
    try{
        const response = await useDeleteData(`/api/v1/addresses/${addressID}`);
        dispatch({
            type: DELETE_USER_ADDRESS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: DELETE_USER_ADDRESS,
            payload:e.response,
        })
    }
}

//get one address
export const getOneUserAddress = (addressID) => async(dispatch)=> {
    try{
        const response = await useGetDataToken(`/api/v1/addresses/${addressID}`);
        // console.log(response)
        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ONE_USER_ADDRESS,
            payload:e.response,
        })
    }
}
//edit user address
export const editUserAddress = (addressID, body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/addresses/${addressID}`, body);
        // console.log(response)
        dispatch({
            type: EDIT_USER_ADDRESS,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: EDIT_USER_ADDRESS,
            payload:e.response,
        })
    }
}