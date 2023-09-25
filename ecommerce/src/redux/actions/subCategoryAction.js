import  { GET_ERROR , CREATE_SUB_CATEGORY , GET_SUB_CATEGORY}  from "../Type";
import {useGetData} from "../../Hooks/useGetData";
import { useInsertData, useInsertDataWithImage } from "../../Hooks/useInsertData";


export const createSubCategory = (data) => async(dispatch)=> {
    try{
        // const res = await baseUrl.get('/api/v1/categories');
        const response = await useInsertData(`/api/v1/subcategories` , data);
        dispatch({
            type: CREATE_SUB_CATEGORY,
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

//get subCategory depend on categoey Id
export const getOneCategory = (id) => async(dispatch)=> {
    try{
        // const res = await baseUrl.get('/api/v1/categories');
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
            type: GET_SUB_CATEGORY,
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