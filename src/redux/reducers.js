import { ACTION_SET_TOKEN, ACTION_SET_USER_PROFILE } from "./actions";

const InitialState = {
  token: "",
  userProfile: {
    firstName: "",
    lastName: "",
    email: "",
    created: "",
  },
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
        userProfile:{
          firstName: action.profile.name.firstName,
          lastName: action.profile.name.lastName,
          email: action.profile.email,
          created: action.profile.created,
        }
      };

    default:
      return state;
  }
};

export default reducer;
