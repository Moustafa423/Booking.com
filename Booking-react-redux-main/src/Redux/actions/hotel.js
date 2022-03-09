import { axiosInstance } from "../network";

export const getHotels = () => (dispatch) => {
  return axiosInstance.get("hotel").then((result) => {
    dispatch({ type: "GET_HOTELS", payload: result.data });
  });
};

export const getHotelById = (hotelId) => (dispatch) => {
  return axiosInstance.get("hotel/" + hotelId).then((result) => {
    dispatch({ type: "GET_HOTEL_BY_ID", payload: result.data });
  });
};

//Booking actions

export const createBooking = (hotelId, roomId, booking) => (dispatch) => {
  return axiosInstance
    .post("hotel/booking/" + hotelId + "/" + roomId, booking)
    .then((result) => {
      dispatch({ type: "CREATE_BOOKING", payload: result.data });
    });
};

export const getBookingByHotelId = (hotelId) => (dispatch) => {
  return axiosInstance.get("hotel/booking/" + hotelId).then((result) => {
    dispatch({ type: "GET_BOOKINGS_BY_HOTEL_ID", payload: result.data });
  });
};

export const deleteBooking = (hotelId, roomId, bookingId) => (dispatch) => {
  return axiosInstance
    .delete("hotel/booking/" + hotelId + "/" + roomId + "/" + bookingId)
    .then((result) => {
      dispatch({ type: "DELETE_BOOKING", payload: result.data });
    });
};

export const updateBooking =
  (hotelId, roomId, bookingId, Booking) => (dispatch) => {
    return axiosInstance
      .put("hotel/booking/" + hotelId + "/" + roomId + "/" + bookingId, Booking)
      .then((result) => {
        dispatch({ type: "UPDATE_BOOKING", payload: result.data });
      });
  };

//review actions

export const createReview = (hotelId, review) => (dispatch) => {
  return axiosInstance
    .post("hotel/review/" + hotelId, review)
    .then((result) => {
      dispatch({ type: "CREATE_REVIEW", payload: result.data });
    });
};

export const getReviewsByHotelId = (hotelId) => (dispatch) => {
  return axiosInstance.get("hotel/review/" + hotelId).then((result) => {
    dispatch({ type: "GET_REVIEWS_BY_HOTEL_ID", payload: result.data });
  });
};

export const updateReview = (hotelId, reviewId, review) => (dispatch) => {
  return axiosInstance
    .put("hotel/review/" + hotelId + "/" + reviewId, review)
    .then((result) => {
      dispatch({ type: "UPDATE_REVIEW", payload: result.data });
    });
};

export const deleteReview = (hotelId, reviewId) => (dispatch) => {
  return axiosInstance
    .delete("hotel/review/" + hotelId + "/" + reviewId)
    .then((result) => {
      dispatch({ type: "DELETE_REVIEW", payload: result.data });
    });
};

// Messages Api
export const creatMessage = (hotelId, message) => (dispatch) => {
  return axiosInstance
    .post("hotel/message/" + hotelId, message)
    .then((result) => {
      dispatch({ type: "CREATE_MESSAGE", payload: result.data });
    });
};

export const getAllMessages = (hotelId) => (dispatch) => {
  return axiosInstance.get("hotel/message/" + hotelId).then((result) => {
    dispatch({ type: "GET_ALL_MESSAGES", payload: result.data });
  });
};

export const updateMessage = (hotelId, messagId, message) => (dispatch) => {
  return axiosInstance
    .put("hotel/message/" + hotelId + "/" + messagId, message)
    .then((result) => {
      dispatch({ type: "UPDATE_MESSAGE", payload: result.data });
    });
};

export const deleteMessage = (hotelId, messagId) => (dispatch) => {
  return axiosInstance
    .delete("hotel/message/" + hotelId + "/" + messagId)
    .then((result) => {
      dispatch({ type: "DELETE_MESSAGE", payload: result.data });
    });
};
