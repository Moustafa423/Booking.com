export default function userReducer(state = [], action) {
  switch (action.type) {
    case "GET_USER_BY_ID":
      return { ...state, displayUserById: action.payload };
    case "UPDATE_USER":
      return { ...state, updateUser: action.payload };
    case "DELETE_USER":
      return { ...state, deleteUser: action.payload };
    default:
      return state;
  }
}
