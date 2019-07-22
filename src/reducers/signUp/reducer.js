import { SIGN_UP, REQUEST_SIGN_UP,SIGN_UP_SUCCESS,SIGN_UP_FAILED } from '../../actions/signUp/actions'

const initialState = {
   abortController: null,
   aborted: false,
   error: null,
   loading: false,
   response: null,
   userDetails: null
};

export default function signUp(state=initialState, action) {
   console.log(action);
   switch (action.type) {
      case REQUEST_SIGN_UP:
         return {
            ...state,
            loading: true,
            userDetails: action.userDetails,
            error: null
         };
      case SIGN_UP_SUCCESS:
         return {
            ...state,
            loading: false,
            response: action.response
         };
      case SIGN_UP_FAILED:
         return {
            ...state,
            loading: false,
            response: null,
            error: action.error
         };
      default:
         return state
   }
}
