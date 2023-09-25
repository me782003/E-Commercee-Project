import {
  GET_ERROR,
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETALIS,
  GET_PRODUCTS_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_CATEGORY,
  GET_ALL_PRODUCTS_BRAND,
  GET_MOST_SOLD,
  GET_LATEST_FASHION,
  GET_ELECTRONICS,
  GET_ALL_PHONES,
  GET_ALL_HEADPHONES,
  GET_ALL_WATCHES,
  GET_ALL_SHOES,
  GET_ALL_EDEVICES,
  GET_ALL_LAPTOPS,
} from "../Type";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import { useGetData } from "../../Hooks/useGetData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData";

//create product
export const createProduct = (formatData) => async (dispatch) => {
  try {
    // const res = await baseUrl.get('/api/v1/categories');
    const response = await useInsertDataWithImage(
      `/api/v1/products`,
      formatData
    );
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// get product

export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all products with pagination with pages number
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get all products with query string
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// action for getting a specific product
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// action for getting products thate have the same category of the selected product
export const getProductsLike = (catID) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${catID}`);
    dispatch({
      type: GET_PRODUCTS_LIKE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// action for deleting a product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// action for updating  product data
export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// get all products by category
export const getAllProductsByCategory =
  (page, limit, catId) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category=${catId}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_CATEGORY,
        payload: e.response,
      });
    }
  };
// get all products by brand
export const getAllProductsByBrand =
  (page, limit, brandID) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`
      );
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_BRAND,
        payload: e.response,
      });
    }
  };

//=================================================================
//home actions

export const getTheMostSold = () => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?sort=-sold`);
    dispatch({
      type: GET_MOST_SOLD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_MOST_SOLD,
      payload: e.response,
    });
  }
};
export const getLatestFashion = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=65089f740435186f8bc26ae3`
    );
    dispatch({
      type: GET_LATEST_FASHION,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_LATEST_FASHION,
      payload: e.response,
    });
  }
};
export const getElectronics = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=64ff927b9e016bd1b786af7b`
    );
    dispatch({
      type: GET_ELECTRONICS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ELECTRONICS,
      payload: e.response,
    });
  }
};
export const getAllPhones = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=650cf5957fcf30bac1a52ffe`
    );
    dispatch({
      type: GET_ALL_PHONES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_PHONES,
      payload: e.response,
    });
  }
};
export const getHeadphones = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=650a2ee3c3d4660e2b2e3866`
    );
    dispatch({
      type: GET_ALL_HEADPHONES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_HEADPHONES,
      payload: e.response,
    });
  }
};
export const getWatches = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=650e1ed3470d7b9d47918173`
    );
    dispatch({
      type: GET_ALL_WATCHES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_WATCHES,
      payload: e.response,
    });
  }
};
export const getShoes = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=64f905f92ea1130b7c4d8076`
    );
    dispatch({
      type: GET_ALL_SHOES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_SHOES,
      payload: e.response,
    });
  }
};
export const getElectricDevices = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=6508b27d0435186f8bc26d8c`
    );
    dispatch({
      type: GET_ALL_EDEVICES,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_EDEVICES,
      payload: e.response,
    });
  }
};
export const getLaptops = () => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?category=650f744578ff9b9c369ec3bd`
    );
    dispatch({
      type: GET_ALL_LAPTOPS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_LAPTOPS,
      payload: e.response,
    });
  }
};
