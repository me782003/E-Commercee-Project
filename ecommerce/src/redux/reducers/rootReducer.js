import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer';
import subCategoryReducer from "./subCategoryReucer";
import productsReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";
import wishListReducer from "./wishListReducer";
import couponReducer from "./couponReducer";
import userAddressReducer from "./userAddressesReducer";
import userCartReducer from "./cartReducer";
import checkoutReducer from "./checkoutReducer";
import orderReducer from "./orderReducer";

export default combineReducers ({
    allCategory: categoryReducer,
    allBrand   : brandReducer,
    subCategory: subCategoryReducer,
    productsReducer: productsReducer,
    authReducer : authReducer,
    reviewReducer : reviewReducer,
    wishListReducer: wishListReducer,
    couponReducer: couponReducer,
    userAddressReducer:userAddressReducer,
    userCartReducer:userCartReducer,
    checkoutReducer:checkoutReducer,
    orderReducer:orderReducer,
});