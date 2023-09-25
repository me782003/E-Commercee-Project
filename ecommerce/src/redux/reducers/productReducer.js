import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_ERROR,
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

const initial = {
  product: [],
  allProducts: [],
  oneProduct: [],
  productLike: [],
  deleteProduct: [],
  updateProduct: [],
  allProductsCat: [],
  allProductsBrand: [],
  mostSold: [],
  latestFashion: [],
  allElectronics: [],
  allPhones:[],
  allHeadPhones:[],
  allWatches: [],
  allShoes: [],
  allEDevices: [],
  allLaptops: [],
  loading: true,
};
const productsReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETALIS:
      return {
        ...state,
        oneProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_LIKE:
      return {
        ...state,
        productLike: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProduct: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };
    case GET_ALL_PRODUCTS_CATEGORY:
      return {
        ...state,
        allProductsCat: action.payload,
      };
    case GET_ALL_PRODUCTS_BRAND:
      return {
        ...state,
        allProductsBrand: action.payload,
      };
    case GET_MOST_SOLD:
      return {
        ...state,
        mostSold: action.payload,
      };
    case GET_LATEST_FASHION:
      return {
        ...state,
        latestFashion: action.payload,
      };
    case GET_ELECTRONICS:
      return {
        ...state,
        allElectronics: action.payload,
      };
    case GET_ALL_PHONES:
      return {
        ...state,
        allPhones: action.payload,
      };
    case GET_ALL_HEADPHONES:
      return {
        ...state,
        allHeadPhones: action.payload,
      };
    case GET_ALL_WATCHES:
      return {
        ...state,
        allWatches: action.payload,
      };
    case GET_ALL_SHOES:
      return {
        ...state,
        allShoes: action.payload,
      };
    case GET_ALL_EDEVICES:
      return {
        ...state,
        allEDevices: action.payload,
      };
    case GET_ALL_LAPTOPS:
      return {
        ...state,
        allLaptops: action.payload,
      };
    default:
      return state;
  }
};
export default productsReducer;
