let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    // case "GET_CURRENT_HABITS_SUCCESS":
    // debugger
    // return action.habits

    case "CREATE_RESTROOM_SUCCESS":
      return [...state, action.restroom];

    default:
      return state;
  }
};
