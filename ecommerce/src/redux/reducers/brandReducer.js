


// brand section reducer
import  {CREATE_Brand, GET_ALL_Brand , GET_ERROR ,GET_ONE_Brand}  from "../Type";

const initial = {
    brand : [],
    oneBrand: [], 
    loading: true, 
}
 const btandReducer = (state = initial  , action) =>{

    switch(action.type){
        case GET_ALL_Brand:
            return {
                ...state,
                brand: action.payload,
                loading: false,
            }
        case GET_ONE_Brand:
            return {
                ...state,
                oneBrand: action.payload,
                loading: false,
            }
            case CREATE_Brand:
                return{
                    
                    brand: action.payload,
                    loading: false,
                }
                case GET_ERROR:
                    return{
                        loading: true,
                        brand: action.payload,
                    }
        default:
            return state;
    }
}
export default btandReducer;