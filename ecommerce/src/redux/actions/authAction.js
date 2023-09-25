
import {CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD, VERIFY_PASSWORD, RESETE_PASSWORD, UPDATE_USER_PROFILE, UPDATE_USER_PASSWORD} from '../Type';
import { useInsertData, useInsertDataWithImage } from "../../Hooks/useInsertData";
import {useGetData, useGetDataToken} from '../../Hooks/useGetData';
import { useUpdateData } from '../../Hooks/useUpdateData';


// create new user
export const createNewUser = (data) => async(dispatch)=> {
    try{

        const response = await useInsertData(`/api/v1/auth/signup`, data);
        dispatch({
            type:  CREATE_NEW_USER,
            payload: response,
            loading : true,
        });

    }catch (e){
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

// login registered user
export const loginUser = (data) => async(dispatch)=> {
    try{

        const response = await useInsertData(`/api/v1/auth/login`, data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading : true,
        });

    }catch (e){
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}


// to know if the user logged in or not 
export const getLoggedUser = (data) => async(dispatch)=> {
    try{

        const response = await useGetDataToken(`/api/v1/users/getMe`, data);
        dispatch({
            type:  GET_CURRENT_USER,
            payload: response,
            loading : true,
        });

    }catch (e){
        dispatch({
            type: GET_CURRENT_USER,
            payload: e.response,
        })
    }
}
//1- forget the password action
export const forgetPassword = (data) => async(dispatch)=> {
    try{

        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);
        dispatch({
            type:  FORGET_PASSWORD,
            payload: response,
            loading : true,
        });

    }catch (e){
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
        })
    }
}


//2- verify code
export const verifyPassword = (data) => async(dispatch)=> {
    try{
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);
        dispatch({
            type:  VERIFY_PASSWORD,
            payload: response,
            loading : true,
        });
    }catch (e){
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        })
    }
}


//3- resete Password
export const resetePassword = (data) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);
        dispatch({
            type:  RESETE_PASSWORD,
            payload: response,
            loading : true,
        });
    }catch (e){
        dispatch({
            type: RESETE_PASSWORD,
            payload: e.response,
        })
    }
}

//update user data
export const updateUserProfileData = (body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/users/updateMe`, body);
        dispatch({
            type:  UPDATE_USER_PROFILE,
            payload: response,
        });
    }catch (e){
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        })
    }
}

//update user pasword
export const updateUserPassword = (body) => async(dispatch)=> {
    try{
        const response = await useUpdateData(`/api/v1/users/changeMyPassword`, body);
        dispatch({
            type:  UPDATE_USER_PASSWORD,
            payload: response,
        });
    }catch (e){
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        })
    }
}












