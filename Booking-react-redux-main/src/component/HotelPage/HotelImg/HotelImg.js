import React, { useEffect, useState } from "react";
import "./HotelImg.css";
import Modal from "react-bootstrap/Modal";
import Run from "./CustomImg/RunImg";
import RunAllImg from "./CustomImg/RunAllImg";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function HotelImg(props) {
  const [show, setShow] = useState(false);
  let [hotel, setHotel] = useState(props.hotel);

  let star = [];
  for (let i = 0; i < props.hotel.starRating; i++) {
    star.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#febb02"
        className="bi bi-star-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }

  useEffect(() => {
    setHotel(props.hotel);
  }, []);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="d-flex my-2">
        <div className="me-2">
          <h6 className="pt-2">
            <span class="badge bg-secondary bg-opacity-50">
              {t("HotelPage.HotelImg.Hotel")}
            </span>
          </h6>
        </div>
        <div className="me-2">
          <h3>
            {" "}
            {localStorage.getItem("i18nextLng") == "ar"
              ? props.hotel.hotelNameAR
              : props.hotel.hotelName}{" "}
          </h3>
        </div>
        <div className="me-2">
          <h6 className="pt-2">
            <span class="badge bg-warning text-dark">
              {t("HotelPage.HotelImg.New to Booking.com")}
            </span>
          </h6>
        </div>
        <span className="me-2 pt-1">{star}</span>

        <span className="me-2 pt-1">
          <svg
            aria-hidden="true"
            data-bui-component="Tooltip"
            data-et-mouseenter="
          customGoal:TPOaXGZCHQGPGJIMADXRT:1
          "
            data-tooltip-position="bottom"
            data-tooltip-text="
          This is a Preferred Partner property. It is committed to providing guests with a positive experience thanks to its commendable service and good value. This property may pay Booking.com a bit more to be in this Programme. 
          "
            fill="#FEBB02"
            height="24"
            rel="300"
            width="24"
            viewBox="0 0 128 128"
            role="presentation"
            focusable="false"
          >
            <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"></path>
          </svg>
        </span>
      </div>

      <div className="d-flex my-2">
        <div className="me-2">
          <p>
            <svg
              className="me-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#0071c2"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            {localStorage.getItem("i18nextLng") == "ar"
              ? props.hotel.streetAddressAR
              : props.hotel.streetAddress}{" "}
            ,{" "}
            {localStorage.getItem("i18nextLng") == "ar"
              ? props.hotel.cityAR
              : props.hotel.city}{" "}
            ,
            {localStorage.getItem("i18nextLng") == "ar"
              ? props.hotel.countryAR
              : props.hotel.country}
          </p>
        </div>
      </div>

      <div variant="primary" onClick={() => setShow(true)}>
        <Run hotel={props.hotel} />
      </div>

      <Modal
        show={show}
        size="xl"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h3> {props.hotel.hotelName} </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RunAllImg hotel={props.hotel} />
        </Modal.Body>
      </Modal>
      <div className="d-flex mt-3 border">
        <div className="p-3">
          <svg
            className="mt-2"
            width="75"
            height="75"
            fill="#0071c2"
            viewBox="0 0 24 24"
          >
            <path d="M18 9a1.5 1.5 0 0 0-1.5-1.5h-2.25l.75.75V6a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 9 6v2.25l.75-.75H7.5A1.5 1.5 0 0 0 6 9v3a1.5 1.5 0 0 0 1.5 1.5h2.25L9 12.75V15a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 15 15v-2.25l-.75.75h2.25A1.5 1.5 0 0 0 18 12V9zm-1.5 0v3h-2.25a.75.75 0 0 0-.75.75V15h-3v-2.25a.75.75 0 0 0-.75-.75H7.5V9h2.25a.75.75 0 0 0 .75-.75V6h3v2.25c0 .414.336.75.75.75h2.25zm-15-5.077v7.614c0 5.237 3.225 9.933 8.113 11.813l1.041.4a3.75 3.75 0 0 0 2.692 0l1.041-.4A12.657 12.657 0 0 0 22.5 11.537V3.923a2.234 2.234 0 0 0-1.306-2.044A22.463 22.463 0 0 0 11.993 0C8.846-.03 5.715.61 2.818 1.874A2.24 2.24 0 0 0 1.5 3.928zM3 3.918a.736.736 0 0 1 .43-.675A20.937 20.937 0 0 1 11.993 1.5a20.969 20.969 0 0 1 8.589 1.748c.252.116.42.38.418.67v7.619c0 4.616-2.843 8.756-7.151 10.413l-1.041.4c-.52.2-1.096.2-1.616 0l-1.041-.4A11.157 11.157 0 0 1 3 11.537V3.923z"></path>
          </svg>
        </div>
        <div className="p-2">
          <h4 className="mt-3">
            {t("HotelPage.HotelImg.Extra health & safety measures")}
          </h4>
          <p>
            {t(
              "HotelPage.HotelImg.This property has taken extra health and hygiene measures to ensure that your safety is their priority"
            )}{" "}
            <a className="text-decoration-none" href="#">
              {t("HotelPage.HotelImg.See health & safety details")}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
