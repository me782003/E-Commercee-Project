import  {GET_ALL_ORDERS, GET_ONE_ORDER, UPDATE_ORDER_PAY, UPDATE_ORDER_DELIVER}  from "../Type";

const initial = {
    getAllOrders :[],
    getOneOrder :[],
    changePay :[],
    changeDeiver :[],

}
 const orderReducer = (state = initial  , action) =>{
    switch(action.type){
        case GET_ALL_ORDERS:
            return{
                ...state,
                getAllOrders: action.payload,
            }
        case GET_ONE_ORDER:
            return{
                ...state,
                getOneOrder: action.payload,
            }
        case UPDATE_ORDER_PAY:
            return{
                ...state,
                changePay: action.payload,
            }
        case UPDATE_ORDER_DELIVER:
            return{
                ...state,
                changeDeiver: action.payload,
            }

            default:
                return state;
    }
}
export default orderReducer;