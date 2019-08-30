export const createRestroom = ({restroomInfo={}})=> dispatch => {
  dispatch({ type: "FETCH_RESTROOMS" });

  return fetch(`http://localhost:3000/restrooms/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(restroomInfo)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({ type: "CREATE_RESTROOM_SUCCESS", restroom : restroom });
    })
    .catch(error => {
      dispatch({ type: "CREATE_RESTROOM_FAILURE", error: error });
    });
};
