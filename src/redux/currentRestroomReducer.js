let initialState = {
  user: {},
  restrooms: [],
  name:"",
  loading:true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RESTROOMS":
      return {
        ...state,
        loading: true,
        restrooms: action.payload
      };
    case "CURENT_RESTROOM_SUCCESS":
      debugger;
      return { ...action.problem, loading: false };
    case "GET_CURRENT_HABIT_FAILURE":
      return { ...state, loading: false };
    default:
      return state;
  }
}
