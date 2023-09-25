import  {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST}  from "../Type";

const initial = {
    addWishList: [],
    removeWishList: [],
    allWishList: [],
}
 const wishListReducer = (state = initial , action) =>{
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return {
                ...state,
                addWishList: action.payload,
            }
            case REMOVE_FROM_WISHLIST:
                return {
                    ...state,
                    removeWishList: action.payload,
                }
                case USER_WISHLIST:
                    return {
                        ...state,
                        allWishList: action.payload,
                    }
                    default:
                        return state;
    }
}
export default wishListReducer;