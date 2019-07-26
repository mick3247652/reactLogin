import { ACTION_SET_TOKEN, ACTION_SET_USER_PROFILE } from "./actions";

const InitialState = {
  token: "",
  userProfile: {},
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_SET_TOKEN:
      console.log("token is save");
      return {
        ...state,
        token: action.token,
      };
    case ACTION_SET_USER_PROFILE:
      return {
        ...state,
        userProfile: {...action.profile}
      };

    default:
      return state;
  }
};

export default reducer;
