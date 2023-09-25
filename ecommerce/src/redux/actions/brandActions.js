import  {GET_ALL_Brand , GET_ERROR , CREATE_Brand , GET_ONE_Brand}  from "../Type";
import {useGetData} from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";

// get all brands 
export const getAllBrand = (limit) => async(dispatch)=> {
    try{
        
        const response = await useGetData(`/api/v1/brands?limit=${limit}`);
        dispatch({
            type: GET_ALL_Brand,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ERROR,
            payload: "Error " +  e ,

        })
    }
}

export const getOneBrand = (id) => async(dispatch)=> {
    try{
        
        const response = await useGetData(`/api/v1/brands/${id}`);
        dispatch({
            type: GET_ONE_Brand,
            payload: response,
        });

    }catch (e){
        dispatch({
            type: GET_ERROR,
            payload: "Error " +  e ,

        })
    }
}

//get all brands with pagination
export const getAllBrandPage = (page) => async(dispatch)=> {
    try{
        const response = await useGetData(`/api/v1/brands?limit=20&page=${page}`);

        dispatch({
            type: GET_ALL_Brand,
            payload: response,

        });

    }catch (e){
        dispatch({
            type: GET_ERROR,
            payload: "Error " +  e ,

        })
    }
}

//insert brands with pagination
export const createBrand = (formData) => async(dispatch)=> {
    try{

        const response = await useInsertDataWithImage(`/api/v1/brands` , formData);

        dispatch({
            type: CREATE_Brand,
            payload: response,
            loading : true,
        });

    }catch (e){
        dispatch({
            type: GET_ERROR,
            payload: "Error " +  e ,
        })
    }
}