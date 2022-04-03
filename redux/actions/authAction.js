import { SET_IS_FETCHING, SET_USER } from "../constants";

export const setIsFetching = (payload) => {
  return {
    type: SET_IS_FETCHING,
    payload: payload,
  };
};

export const loginUser = (data, Alert, navigation) => (dispatch) => {
  dispatch(setIsFetching(true));
  try {
    setTimeout(async function () {
      dispatch(setIsFetching(false));
      await dispatch({ type: SET_USER, payload: data });
      Alert.alert(JSON.stringify(data));
      navigation.navigate("Home");
    }, 1500);
  } catch {
    dispatch(setIsFetching(false));
  }
};
