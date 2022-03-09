export default function campGroundReducer(state = [], action) {
    switch (action.type) {
      case "GET_CAMPS":
        return { ...state, getCampGrounds: action.payload };
      case "GET_CAMPS_BY_ID":
        return { ...state, getCampById: action.payload };
      case "CREATE_BOOKING":
        return { ...state, createCampBooking: action.payload };
      case "GET_BOOKINGS_BY_CAMP_ID":
        return { ...state, getBookingByCampId: action.payload };
      case "DELETE_BOOKING":
        return { ...state, deleteCampBooking: action.payload };
      case "UPDATE_BOOKING":
        return { ...state, updateCampBooking: action.payload };
      case "CREATE_REVIEW":
        return { ...state, createCampReview: action.payload };
      case "GET_REVIEWS_BY_CAMP_ID":
        return { ...state, getReviewsByCampId: action.payload };
      case "UPDATE_REVIEW":
        return { ...state, updateCampReview: action.payload };
      case "DELETE_REVIEW":
        return { ...state, deleteCampReview: action.payload };
      case "CREATE_MESSAGE":
        return { ...state, creatCampMessage: action.payload };
      case "CREATE_MESSAGE_REPLAY":
        return { ...state, creatCampMsgReplay: action.payload };
        case "GET_ALL_MESSAGES":
        return { ...state, getAllCampMessages: action.payload };
      case "UPDATE_MESSAGE":
        return { ...state, updateCampMessage: action.payload };
      case "DELETE_MESSAGE":
        return { ...state, deleteCampMessage: action.payload };
      default:
        return state;
    }
  }
  