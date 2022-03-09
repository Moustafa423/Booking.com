import { axiosInstance } from "../network";

export const getCommentsById = (commentId) => (dispatch) => {
  return axiosInstance.get("comment/" + commentId).then((result) => {
    dispatch({ type: "GET_COMMENT_BY_ID", payload: result.data });
  });
};

export const getCommentByPostId = (postId) => (dispatch) => {
   return axiosInstance.get("comment/post/" + postId).then((result) => {
 
    dispatch({ type: "GET_COMMENT_BY_POST_ID", payload: result.data });
  });
};

export const postCommentsByPostId = (postId,comment) => (dispatch) => {
  return axiosInstance.post("comment/" + postId,comment).then((result) => {

    dispatch({ type: "POST_COMMENT_BY_POST_ID", payload: result.data });
  });
};

export const putCommentById = (commentId,comment) => (dispatch) => {
  return axiosInstance.put("comment/" + commentId,comment).then((result) => {
    dispatch({ type: "PUT_COMMENT_BY_ID", payload: result.data });
  });
};

export const deleteCommentById = (commentId) => (dispatch) => {
  return axiosInstance.delete("comment/" + commentId).then((result) => {
    dispatch({ type: "DELETE_COMMENT_BY_ID", payload: result.data });
  });
};