import { axiosInstance } from "../network";

 

export const getApartments = () => (dispatch) => {
  return axiosInstance.get("apartment").then((result) => {
    dispatch({ type: "GET_APARTMENT", payload: result.data });
  });
};

export const displayApartmentById = (apartmentId) => (dispatch) => {
  return axiosInstance.get("apartment/" + apartmentId).then((result) => {
    dispatch({ type: "GET_APARTMENT_BY_ID", payload: result.data });
  });
};

// Booking

export const createBooking = (apartmentId, bookingObject) => (dispatch) => {
console.log(bookingObject);
  return axiosInstance
    .post("apartment/booking/" + apartmentId,  bookingObject)
    .then((result) => {
      dispatch({ type: "CREATE_BOOKING", payload: result.data });
    }).catch(erorr =>console.log(erorr))
};

export const updateBooking = (apartmentId, bookingId, bookingObject) => (dispatch) => {
   return axiosInstance
    .put("apartment/booking/" + apartmentId +'/'+ bookingId, bookingObject)
    .then((result) => {
      dispatch({ type: "UPDATE_BOOKING", payload: result.data });
     })
    .catch((erorr) => console.log(erorr));
};

export const deleteBooking = (apartmentId, bookingId,  ) => (dispatch) => {

    return axiosInstance
      .delete(
        "apartment/booking/" + apartmentId + "/" + bookingId
          
        
      )
      .then((result) => {
        dispatch({ type: "DELETE_BOOKING", payload: result.data });
      })
      .catch((erorr) => console.log(erorr));

};

export const displayAllBookings =
  (apartmentId) => (dispatch) => {
     return axiosInstance
       .get("apartment/booking/" + apartmentId)
       .then((result) => {
         dispatch({ type: "DISPLAY_BOOKING", payload: result.data });
       })
       .catch((erorr) => console.log(erorr));
  };

// message

export const displayAllMessages = (apartmentId) => (dispatch) => {
  return axiosInstance
    .get("apartment/message/" + apartmentId).then((result) => {
      dispatch({ type: "GET_MESSAGE", payload: result.data });
    });
};

export const createMessage = (apartmentId, messageObject) => (dispatch) => {
  return axiosInstance
    .post("apartment/message/" + apartmentId, messageObject)
    .then((result) => {
      dispatch({ type: "CREATE_MESSAGE", payload: result.data });
    });
}; 

export const updateMessage = (apartmentId, messageId, messageObject) => (dispatch) => {
  return axiosInstance
    .put("apartment/message/" + apartmentId + "/" + messageId, messageObject)
    .then((result) => {
      dispatch({ type: "UPDATE_MESSAGE", payload: result.data });
    });
};

export const deleteMessage = (apartmentId, messageId ) => (dispatch) => {
  return axiosInstance
    .delete("apartment/message/" + apartmentId + "/" + messageId)
    .then((result) => {
      dispatch({ type: "DELETE_MESSAGE", payload: result.data });
    });
};

export const createReplay = (apartmentId, messageId, replayObject) => (dispatch) => {
  return axiosInstance
    .post(
      "apartment/message/replay/" + apartmentId + "/" + messageId,
      replayObject,
       
    )
    .then((result) => {
      dispatch({ type: "CREATE_REPLAY", payload: result.data });
    });
};

//review

export const createReview = (apartmentId, reviewObject) => (dispatch) => {
  return axiosInstance
    .post("apartment/review/" + apartmentId, reviewObject)
    .then((result) => {
      dispatch({ type: "CREATE_REVIEW", payload: result.data });
    });
};

export const displayAllReviews = (apartmentId) => (dispatch) => {
  return axiosInstance
    .get("apartment/review/" + apartmentId)
    .then((result) => {
      dispatch({ type: "DISPLAY_REVIEW", payload: result.data });
    });
};

export const updateReview = (apartmentId, reviewId, reviewObject) => (dispatch) => {
  return axiosInstance
    .put("apartment/review/" + apartmentId + "/" + reviewId, reviewObject)
    .then((result) => {
      dispatch({ type: "UPDATE_REIVEW", payload: result.data });
    });
};

export const deleteReview = (apartmentId, reviewId) => (dispatch) => {
  return axiosInstance
    .delete(
      "apartment/review/" + apartmentId + "/" + reviewId)
    .then((result) => {
      dispatch({ type: "DELETE_REVIEW", payload: result.data });
    });
};
