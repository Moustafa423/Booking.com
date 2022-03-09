import { axiosInstance } from "../network";

export const displayUserById = (userId) => (dispatch) => {
  return axiosInstance.get("user/" + userId).then((result) => {
    dispatch({ type: "GET_USER_BY_ID", payload: result.data });
  });
};

export const updateUser = (userId) => (dispatch) => {
  return axiosInstance.put("user/" + userId).then((result) => {
    dispatch({ type: "UPDATE_USER", payload: result.data });
  });
};

export const deleteUser = (userId) => (dispatch) => {
  return axiosInstance.delete("user/" + userId).then((result) => {
    dispatch({ type: "DELETE_USER", payload: result.data });
  });
};
