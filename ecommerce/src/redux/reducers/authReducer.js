// brand section reducer
import  {CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD, VERIFY_PASSWORD, RESETE_PASSWORD, UPDATE_USER_PROFILE, UPDATE_USER_PASSWORD}  from "../Type";

const initial = {
    createUser : [],
    loginUser: [],
    currentUser: [],
    forgetPassword: [],
    verifyPassword: [],
    resetePassword: [],
    userProfile: [],
    updateUserPassword: [],
    loading: true, 
}
 const authReducer = (state = initial  , action) =>{

    switch(action.type){
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
                loading: false,
            }
            case LOGIN_USER:
                return {
                    ...state,
                    loginUser: action.payload,
                }
                case GET_CURRENT_USER:
                    return {
                        ...state,
                        currentUser: action.payload,
                    }
                    case FORGET_PASSWORD:
                        return {
                            ...state,
                            forgetPassword: action.payload,
                        }
                        case VERIFY_PASSWORD:
                            return {
                                ...state,
                                verifyPassword: action.payload,
                            }
                            case RESETE_PASSWORD:
                                return {
                                    ...state,
                                    resetePassword: action.payload,
                                }
                            case UPDATE_USER_PROFILE:
                                return {
                                    ...state,
                                    userProfile: action.payload,
                                }
                            case UPDATE_USER_PASSWORD:
                                return {
                                    ...state,
                                    updateUserPassword: action.payload,
                                }
                                default:
                                    return state;
    }
}
export default authReducer;