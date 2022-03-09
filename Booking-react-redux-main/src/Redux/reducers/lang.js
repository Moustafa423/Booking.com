export const langReducer = (state = "en", action) => {
  switch (action.type) {
    case "CURRENT_TYPE":
      return action.payload;
    default:
      return state;
  }
};
