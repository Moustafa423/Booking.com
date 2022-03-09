export default function postReducer(state = [], action) {
    switch (action.type) {
      case "GET_POSTS":
        return { ...state, getPosts: action.payload };
      case "GET_POST_BY_ID":
        return { ...state, getPostById: action.payload };
      case "GET_POST_BY_USER_ID":
        return { ...state, getPostByUserId: action.payload };
      case "POST_POST_BY_ID":
        return { ...state, postPostById: action.payload };
      case "PUT_POST_BY_ID":
        return { ...state, putPostById: action.payload };
      case "DELETE_POST_BY_ID":
        return { ...state, deletePostById: action.payload };
      default:
        return state;
    }
}