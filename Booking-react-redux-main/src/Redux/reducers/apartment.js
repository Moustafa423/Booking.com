export default function apartmentReducer(state = [], action) {
  switch (action.type) {
    case "GET_APARTMENT":
      return { ...state, getApartments: action.payload };
    case "GET_APARTMENT_BY_ID":
      return { ...state, displayApartmentById: action.payload };
    case "CREATE_BOOKING":
      return { ...state, createBooking: action.payload };
    case "UPDATE_BOOKING":
      return { ...state, updateBooking: action.payload };
    case "DELETE_BOOKING":
      return { ...state, deleteBooking: action.payload };
    case "DISPLAY_BOOKING":
      return { ...state, displayAllBookings: action.payload };
    case "GET_MESSAGE":
      return { ...state, displayAllMessages: action.payload };
    case "CREATE_MESSAGE":
      return { ...state, createMessage: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, updateMessage: action.payload };
    case "DELETE_MESSAGE":
      return { ...state, deleteMessage: action.payload };
    case "CREATE_REPLAY":
      return { ...state, createReplay: action.payload };
    case "CREATE_REVIEW":
      return { ...state, createReview: action.payload };
    case "DISPLAY_REVIEW":
      return { ...state, displayAllReviews: action.payload };
    case "UPDATE_REIVEW":
      return { ...state, updateReview: action.payload };
    case "DELETE_REVIEW":
      return { ...state, deleteReview: action.payload };
    default:
      return state;
  }
}
