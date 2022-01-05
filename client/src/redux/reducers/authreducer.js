import {AUTH, LOGOUT} from '../actiontypes'

 const AuthReducer = (state = {authState: null}, action) => {
    switch(action.type){
        case AUTH:
        console.log(action?.data)
        return state;

        default:
        return state;

    }
}
export default AuthReducer