
import {CREATE_REVIEW, ALL_REVIEW_PRODUCT, DELETE_REVIEW_PRODUCT , UPDATE_REVIEW} from '../Type';
import { useInsertData, useInsertDataWithImage } from '../../Hooks/useInsertData';
import {useGetData, useGetDataToken} from '../../Hooks/useGetData';
import useDeleteData from '../../Hooks/useDeleteData';
import { useUpdateData, useUpdateDataWithImage } from '../../Hooks/useUpdateData';


// action for creating a review
export const createReview = (ProdId, body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/v1/products/${ProdId}/reviews`, body);
        dispatch({
            type: CREATE_REVIEW,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_REVIEW,
            payload: e.response,
        })
    }
}


// action to get all reviews on a product
export const allReviewProduct = (prodId, page, limit) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/v1/products/${prodId}/reviews?page=${page}&limit=${limit}`);
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: e.response,
        })
    }
}

// action to get all reviews on a product
export const deleteReviewOnProduct = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/v1/reviews/${id}`);
        dispatch({
            type: DELETE_REVIEW_PRODUCT,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: DELETE_REVIEW_PRODUCT,
            payload: e.response,
        })
    }
}

// action to get all reviews on a product
export const updateReviewOnProduct = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/v1/reviews/${id}` , body);
        dispatch({
            type: UPDATE_REVIEW,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: UPDATE_REVIEW,
            payload: e.response,
        })
    }
}



