import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

export default function BookingDetails(props) {
    const { t, i18n } = useTranslation();
    function handleClick(lang) {
      i18n.changeLanguage(lang);
    }
  return (
    <>
      <div className="border p-3 my-3">
        <h6 className="fw-bold">
          {t("checkOut.BookingDetails.Your Booking Details")}
        </h6>
        <div className="row my-3">
          <div className="col-6">
            <span>{t("checkOut.BookingDetails.Check-in")}</span>
            <div className="border-end">
              <h6>{props.info.startAt}</h6>
              <span className="text-muted">
                {t("checkOut.BookingDetails.From")} {props.property.checkIn}
              </span>
            </div>
          </div>
          <div className="col-6">
            <span>{t("checkOut.BookingDetails.Check-out")}</span>
            <div>
              <h6>{props.info.endAt}</h6>
              <span className="text-muted">
                {t("checkOut.BookingDetails.Until")} {props.property.checkOut}
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <span>{t("checkOut.BookingDetails.Total length of stay")}</span>{" "}
          <br />
          <strong>
            {props.info.days}
            {t("checkOut.BookingDetails.Days")}
          </strong>
        </div>
        <hr />

        <div className="">
          <strong>{t("checkOut.BookingDetails.You selected")}</strong>
          <br />
          {props.type != "apartment" ? (
            <span>
              {props.info.roomsNum} {props.info.roomType}
            </span>
          ) : (
            <span>{props.property.apartmentName}</span>
          )}
        </div>
      </div>
      <div className="border p-3 my-3">
        <h6 className="fw-bold">
          {t("checkOut.BookingDetails.Your price summary")}
        </h6>

        <div>
          <div className="d-flex justify-content-between mb-1">
            {props.type != "apartment" && (
              <span>
                {props.info.roomsNum} {t("checkOut.BookingDetails.rooms")}
              </span>
            )}
             
            <span>
              {props.info.days} {t("checkOut.BookingDetails.Days")}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between my-3">
          <strong> {t("checkOut.BookingDetails.Price")}</strong>

          <strong>{props.info.totalPrice}$</strong>
        </div>
      </div>
    </>
  );
}
