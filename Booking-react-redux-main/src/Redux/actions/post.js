import { axiosInstance } from "../network";

export const getPosts = () => (dispatch) => {
  return axiosInstance.get("post").then((result) => {
    
    dispatch({ type: "GET_POSTS", payload: result.data });
  });
};

export const getPostById = (postId) => (dispatch) => {
  return axiosInstance.get("post/" + postId).then((result) => {
    dispatch({ type: "GET_POST_BY_ID", payload: result.data });
  });
};

export const getPostByUserId = (userId) => (dispatch) => {
  return axiosInstance.get("post/" + userId).then((result) => {
    dispatch({ type: "GET_POSTS_BY_USER_ID", payload: result.data });
  });
};
export const postPostById = (post) => (dispatch) => {
  return axiosInstance.post("post/" , post).then((result) => {
    dispatch({ type: "POST_POST_BY_USER_ID", payload: result.data });
  });
};
export const putPostById = (postId,put) => (dispatch) => {
  return axiosInstance.put("post/" + postId,put).then((result) => {
    dispatch({ type: "PUT_POSTS_BY_ID", payload: result.data });
  });
};
export const deletePostById = (postId) => (dispatch) => {
  return axiosInstance.delete("post/" + postId).then((result) => {
    dispatch({ type: "DELETE_POSTS_BY_ID", payload: result.data });
  });
};