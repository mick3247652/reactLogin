export {
  ACTION_SIGNIN_SEND,
  ACTION_SIGNIN_TOKEN,
  ACTION_SIGNIN_ERROR,
  ACTION_SIGNUP_SEND,
  ACTION_SIGNUP_OK,
  ACTION_SIGNUP_ERR,
} from "./actions";

const InitialState = {
  token: "",
  isSignIn: false,
  isSignUp: false,
  signInError: "",
  signUpError: "",
  isSignInProcess: false,
  isSignUpProcess: false,
};


const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_SIGNIN_SEND:
      return {
        ...state,
        token: '',
        isSignIn: false,
        signInError: false,
        isSignInProcess: true,
      };
    case ACTION_SIGNIN_TOKEN:
      return {...state,
        token: action.token,
        isSignIn: true,
        signInError: "",
        isSignInProcess: false,};
    case ACTION_SIGNIN_ERROR:
      return {
        ...state,
        token: '',
        isSignIn: false,
        signInError: action.err,
        isSignInProcess: false,};
    case ACTION_SIGNUP_SEND:
      return {
        ...state,
        token: '',
        isSignUp: false,
        signUpError: "",
        isSignUpProcess: true,};
    case ACTION_SIGNUP_OK:
      return {
        ...state,
        token: '',
        isSignUp: true,
        signUpError: "",
        isSignUpProcess: false,};
    case ACTION_SIGNUP_ERR:
      return {
        ...state,
        token: '',
        isSignUp: false,
        signUpError: action.err,
        isSignUpProcess: false,};

    default:
      return state;
  }
};

export default reducer;
