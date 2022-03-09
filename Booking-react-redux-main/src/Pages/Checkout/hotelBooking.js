import React from "react";
import Booking from "../../component/checkOut/Booking";
import BookingDetails from "../../component/checkOut/BookingDetails";
import { useParams, useLocation } from "react-router-dom";
export default function HotelBooking(props) {
  const { state } = useLocation();
  const { reservationInfo, prop, type } = state;
  console.log(prop);
  return (
    <div className="container py-3">
      <div className="row py-3">
        <div className="col-md-4">
          <BookingDetails info={reservationInfo} property={prop} type={type} />
        </div>
        <div className="col-md-8">
          <Booking info={reservationInfo} property={prop} type={type} />
        </div>
      </div>
    </div>
  );
}
