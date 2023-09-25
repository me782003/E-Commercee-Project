import  {ADD_USER_ADDRESS, GET_ALL_USER_ADDRESSES, DELETE_USER_ADDRESS, GET_ONE_USER_ADDRESS, EDIT_USER_ADDRESS}  from "../Type";

const initial = {
    addAddress : [],
    allAddresses : [],
    deleteAddress : [],
    oneAddress : [],
    editAddress : [],
}
 const userAddressReducer = (state = initial  , action) =>{
    switch(action.type){
        case ADD_USER_ADDRESS:
            return{
                ...state,
                addAddress: action.payload,
            }
        case GET_ALL_USER_ADDRESSES:
            return{
                ...state,
                allAddresses: action.payload,
            }
        case DELETE_USER_ADDRESS:
            return{
                ...state,
                deleteAddress: action.payload,
            }
        case GET_ONE_USER_ADDRESS:
            return{
                ...state,
                oneAddress: action.payload,
            }
        case EDIT_USER_ADDRESS:
            return{
                ...state,
                editAddress: action.payload,
            }
            default:
                return state;
    }
}
export default userAddressReducer;