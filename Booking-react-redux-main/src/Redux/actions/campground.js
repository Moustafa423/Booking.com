import { axiosInstance } from "../network";

export const getCampGrounds = () => (dispatch) => {
  return axiosInstance.get("campground").then((result) => {
    dispatch({ type: "GET_CAMPS", payload: result.data });
  });
};

export const getCampById = (campId) => (dispatch) => {
  return axiosInstance.get("campground/" + campId).then((result) => {
    dispatch({ type: "GET_CAMPS_BY_ID", payload: result.data });
  });
};

//Booking actions

export const createCampBooking = (campId, roomId, booking) => (dispatch) => {
  return axiosInstance
    .post("campground/booking/" + campId + "/" + roomId, booking)
    .then((result) => {
      dispatch({ type: "CREATE_BOOKING", payload: result.data });
    });
};

export const getBookingByCampId = (campId) => (dispatch) => {
  return axiosInstance.get("campground/booking/" + campId).then((result) => {
    dispatch({ type: "GET_BOOKINGS_BY_CAMP_ID", payload: result.data });
  });
};

export const deleteCampBooking = (campId, roomId, bookingId) => (dispatch) => {
  return axiosInstance
    .delete("campground/booking/" + campId + "/" + roomId + "/" + bookingId)
    .then((result) => {
      dispatch({ type: "DELETE_BOOKING", payload: result.data });
    });
};

export const updateCampBooking =
  (campId, roomId, bookingId, Booking) => (dispatch) => {
    return axiosInstance
      .put("campground/booking/" + campId + "/" + roomId + "/" + bookingId, Booking)
      .then((result) => {
        dispatch({ type: "UPDATE_BOOKING", payload: result.data });
      });
  };

//review actions

export const createCampReview = (campId, review) => (dispatch) => {
  return axiosInstance
    .post("campground/review/" + campId, review)
    .then((result) => {
      dispatch({ type: "CREATE_REVIEW", payload: result.data });
    });
};

export const getReviewsByCampId = (campId) => (dispatch) => {
  return axiosInstance.get("campground/review/" + campId).then((result) => {
    dispatch({ type: "GET_REVIEWS_BY_CAMP_ID", payload: result.data });
  });
};

export const updateCampReview = (campId, reviewId, review) => (dispatch) => {
  return axiosInstance
    .put("campground/review/" + campId + "/" + reviewId, review)
    .then((result) => {
      dispatch({ type: "UPDATE_REVIEW", payload: result.data });
    });
};

export const deleteCampReview = (campId, reviewId) => (dispatch) => {
  return axiosInstance
    .delete("campground/review/" + campId + "/" + reviewId)
    .then((result) => {
      dispatch({ type: "DELETE_REVIEW", payload: result.data });
    });
};

// Messages Api
export const creatCampMessage = (campId, message) => (dispatch) => {
  return axiosInstance
    .post("campground/message/" + campId, message)
    .then((result) => {
      dispatch({ type: "CREATE_MESSAGE", payload: result.data });
    });
};

export const creatCampMsgReplay = (campId,msgId, message) => (dispatch) => {
    return axiosInstance
      .post("campground/message/replay/" + campId +'/'+msgId, message)
      .then((result) => {
        dispatch({ type: "CREATE_MESSAGE_REPLAY", payload: result.data });
      });
  };

export const getAllCampMessages = (campId) => (dispatch) => {
  return axiosInstance.get("campground/message/" + campId).then((result) => {
    dispatch({ type: "GET_ALL_MESSAGES", payload: result.data });
  });
};

export const updateCampMessage = (campId, messagId, message) => (dispatch) => {
  return axiosInstance
    .put("campground/message/" + campId + "/" + messagId, message)
    .then((result) => {
      dispatch({ type: "UPDATE_MESSAGE", payload: result.data });
    });
};

export const deleteCampMessage = (campId, messagId) => (dispatch) => {
  return axiosInstance
    .delete("campground/message/" + campId + "/" + messagId)
    .then((result) => {
      dispatch({ type: "DELETE_MESSAGE", payload: result.data });
    });
};
