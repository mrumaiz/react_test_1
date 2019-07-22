import {signUpApiCall} from '../../api/api';
export const SIGN_UP = 'SIGN_UP';
export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP';
export const SIGN_UP_SUCCESS = 'RECEIVE_SIGN_UP';
export const SIGN_UP_FAILED = 'REJECT_SIGN_UP';
export const SIGN_UP_ABORT = 'ABORT_SIGN_UP';

export function dispatchSignUp(userDetails){
   return dispatch => {
      dispatch(requestSignUp(userDetails));
      console.log("dispatchSignUp called 2");
      return signUpApiCall(userDetails).then(response => {
         dispatch(signupSucess(response));
         return response;
      }).catch(error => dispatch(signupFailed(error)));
   }
}

export const requestSignUp = (userDetails) => {
   console.log("requestSignUp");
   return{
      type: REQUEST_SIGN_UP,
      userDetails
  }
}

export const signupSucess = (response) => {
   console.log("signupSucess",response);
   return{
      type: SIGN_UP_SUCCESS,
      respStatus: response.status,
      response:  response.data
  }
}

export const signupFailed = (err) => {
   console.log("signupFailed",err);
   return{
      type: SIGN_UP_FAILED,
      error: err
  }
}

export const abortSignUp = () => {
   return{
      type: SIGN_UP_ABORT
  }
}