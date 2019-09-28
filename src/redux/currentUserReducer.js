let initialState = {
  id: null,
  username: '',
  token: '',
  loading: false
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_TO_STATE":
      let userObj = action.payload.user;
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        token: action.payload.jwt
      };
    //   Login
    case "LOGIN_REQUEST_START":
      return { ...state, loading: true };

    case "LOGIN_REQUEST_SUCCESS":
      return { ...state, loading: false };

    case "LOGIN_REQUEST_FAILURE":
      return { ...state, loading: false };
    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};