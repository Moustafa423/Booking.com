export default function hotelReducer(state = [], action) {
  switch (action.type) {
    case "GET_HOTELS":
      return { ...state, getHotels: action.payload };
    case "GET_HOTEL_BY_ID":
      return { ...state, getHotelById: action.payload };
    case "CREATE_BOOKING":
      return { ...state, createBooking: action.payload };
    case "GET_BOOKINGS_BY_HOTEL_ID":
      return { ...state, getBookingById: action.payload };
    case "DELETE_BOOKING":
      return { ...state, deleteBooking: action.payload };
    case "UPDATE_BOOKING":
      return { ...state, updateBooking: action.payload };
    case "CREATE_REVIEW":
      return { ...state, createReview: action.payload };
    case "GET_REVIEWS_BY_HOTEL_ID":
      return { ...state, getReviewsById: action.payload };
    case "UPDATE_REVIEW":
      return { ...state, updateReview: action.payload };
    case "DELETE_REVIEW":
      return { ...state, deleteReview: action.payload };
    case "CREATE_MESSAGE":
      return { ...state, creatMessage: action.payload };
    case "GET_ALL_MESSAGES":
      return { ...state, getAllMessages: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, updateMessage: action.payload };
    case "DELETE_MESSAGE":
      return { ...state, deleteMessage: action.payload };
    default:
      return state;
  }
}
