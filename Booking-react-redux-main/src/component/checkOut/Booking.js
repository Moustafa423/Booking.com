import React, { useEffect, useState } from "react";
import Like from "../Properties/images/like.svg";
import Paypal from "./Paypal";
import { axiosInstance } from "../../Redux/network";
 import "animate.css";
 import Alert from "@mui/material/Alert";
 import Stack from "@mui/material/Stack";

import { useTranslation } from "react-i18next";
import i18n from "../../i18next";


export default function Booking(props) {
     const { t, i18n } = useTranslation();
     function handleClick(lang) {
       i18n.changeLanguage(lang);
     }
  const [checkout, setCheckout] = useState(false);
  const [reviewScore, setReviewScore] = useState();
  const [reservation, setReservation] = useState({});
  const [facilities, setFacilities] = useState([]);
  const [cancelDate, setCancelDate] = useState();
  const [loggedUser, setLoggedUse] = useState();
  const [paypalButton, setPaypalButton] = useState(false);
  const [disabledCheckOut, setDisabledCheckOut] = useState(true);
  const [isReserved, setIsReserved] = useState(false);
  const handleResevationChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
    if (
      reservation.firstName &&
      reservation.lastName &&
      reservation.fullGuestName &&
      reservation.guestEmail
    ) {
      setDisabledCheckOut(false);
    } else {
      setDisabledCheckOut(true);
    }
  };
  const beforePaypal = () => {
    setReservation({
      ...reservation,
      totalPrice: props.info.totalPrice,
      startAt: props.info.startAt,
      endAt: props.info.endAt,
      days: props.info.days,
      numOfRooms: props.info.roomsNum && +props.info.roomsNum,
    });
    console.log(reservation);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    let cancelDays = props.property.cancellation * 86400000;
    let startAt = +new Date(props.info.startAt);
    setCancelDate(new Date(startAt - cancelDays).toDateString());

    if (props.property.avgReviews >= 1 && props.property.avgReviews <= 3) {
      setReviewScore("bad");
    } else if (
      props.property.avgReviews > 3 &&
      props.property.avgReviews <= 6
    ) {
      setReviewScore("good");
    } else if (
      props.property.avgReviews > 6 &&
      props.property.avgReviews <= 8
    ) {
      setReviewScore("very good");
    } else if (
      props.property.avgReviews > 8 &&
      props.property.avgReviews <= 10
    ) {
      setReviewScore("excellent");
    }
    let allFacilities = [];
    if (props.type != "apartment") {
      for (let Facilities of props.property.facilities.popularFacilities) {
        switch (Facilities) {
          case "Free WiFi":
            allFacilities.push(
              <div className="d-flex justify-content-between">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="green"
                    class="bi bi-wifi"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                    <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                  </svg>
                </div>
                <div>
                  <p>
                   
                    {t("checkOut.Booking.Free Wifi")}
                  </p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Fitness center":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M80 85.6L42.4 48l5.6-5.6L85.6 80zM13.2 19a4 4 0 1 0 5.7-5.7l-4-4A4 4 0 0 0 9.2 15zM56 8l-8 8-8-8L8 40l8 8-8 8 8.1 8.1 48-48zm58.9 101.1a4 4 0 1 0-5.7 5.7l4 4a4 4 0 1 0 5.7-5.7zm5.2-37l-8.1-8.2-48 48 8.2 8.1 8-8 8 8 32-32-8-8z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Fitness Center")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Restaurant":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M44.1 8.9L48 44a12 12 0 0 1-12 12h-3.6l3.4 59.8a4 4 0 0 1-4 4.2h-7.6a4 4 0 0 1-4-4.2L23.6 56H20A12 12 0 0 1 8 44l3.9-35.1a1 1 0 0 1 1-.9H15a1 1 0 0 1 1 1v19a4 4 0 0 0 4 4h4.8L26 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l1.2 23H36a4 4 0 0 0 4-4V9a1 1 0 0 1 1-1h2.1a1 1 0 0 1 1 .9zM60 24v48h8l-3.8 43.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L80 8h-4a16 16 0 0 0-16 16zm60 8c0-13.3-7.2-24-16-24S88 18.8 88 32c0 11 5 20.2 11.6 23l-3.4 60.8a4 4 0 0 0 4 4.2h7.6a4 4 0 0 0 4-4.2L108.4 55c6.7-2.8 11.6-12 11.6-23z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Restaurant")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Room service":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M112 68a4 4 0 0 1-4 4H20a4 4 0 0 1 0-8h88a4 4 0 0 1 4 4zM26 56h76a2 2 0 0 0 2-2.1 40 40 0 0 0-32-37.1V16a8 8 0 0 0-16 0v.8a40 40 0 0 0-32 37 2 2 0 0 0 2 2.2zm77 24s-27 6-42.7 0C53.6 80 42 83 36 88s-20 15.5-20 15.5L32 120l19.8-19a12 12 0 0 1 8.5-3.5L81.7 96a4 4 0 0 0 2.4-.8l20.1-11.6A2 2 0 0 0 103 80z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Room service")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Family rooms":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M18 18a10 10 0 1 1 10 10 10 10 0 0 1-10-10zm26 16s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.5-4L40 77.6a4.3 4.3 0 0 1 1.3-2.7l1.9-1.8a4.3 4.3 0 0 0 1.2-2.6L48 40c.3-2.6.1-5-3.9-6zm20 23a8 8 0 1 0-8-8 8 8 0 0 0 8 8zm11.2 2.4A73.6 73.6 0 0 0 64 58a73.6 73.6 0 0 0-11.2 1.4c-2.8.7-3 2.3-2.7 4.1l2.3 21a3 3 0 0 0 1 1.9l1.2 1.2a3 3 0 0 1 1 2l2.4 27.7a3.1 3.1 0 0 0 3.1 2.7H67a3.1 3.1 0 0 0 3.1-2.8l2.5-27.7a3 3 0 0 1 1-1.9l1.2-1.2a3 3 0 0 0 .9-1.8l2.4-21c.2-1.9 0-3.5-2.8-4.2zM100 28a10 10 0 1 0-10-10 10 10 0 0 0 10 10zm16 6s-9.8-2-16-2-16 2-16 2c-4 1-4.3 3.4-4 6l3.4 30.5a4.3 4.3 0 0 0 1.3 2.6l1.8 1.8a4.3 4.3 0 0 1 1.3 2.7l3.6 38.4a4.4 4.4 0 0 0 4.5 4h8.2a4.4 4.4 0 0 0 4.4-4l3.6-38.4a4.3 4.3 0 0 1 1.3-2.7l1.8-1.8a4.3 4.3 0 0 0 1.3-2.6L120 40c.3-2.6.1-5-3.9-6z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Family Rooms")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Airport shuttle":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M92 100a10 10 0 1 1-10 10 10 10 0 0 1 10-10zm-66 10a10 10 0 1 0 10-10 10 10 0 0 0-10 10zM16 56h88.2a8 8 0 0 1 7.6 5.5l7.8 26.3a8 8 0 0 1 .4 2.5V106a6 6 0 0 1-6 6h-6.1a16 16 0 1 0-31.8 0H52a16 16 0 1 0-31.8 0H16a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8zm72 24l25 8-7-24H88zm-24 0h16V64H64zm-24 0h16V64H40zm-24 0h16V64H16zm28.2-44.6l8 4.5 4.4 8a.4.4 0 0 0 .6 0l1-1a.4.4 0 0 0 0-.3V37l6.5-5.9L76.1 46a1.4 1.4 0 0 0 2 .4l1-.5a1.4 1.4 0 0 0 .5-1.8L72 24.2l9-8.4a10.2 10.2 0 0 0 3-6.4A1.4 1.4 0 0 0 82.6 8a10.2 10.2 0 0 0-6.5 2.9L67.6 20l-19.8-7.5a1.4 1.4 0 0 0-1.8.6l-.5 1A1.4 1.4 0 0 0 46 16l15 11.5-5.8 6.2h-9.7a.4.4 0 0 0-.3.1l-1 1a.4.4 0 0 0 0 .6z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Airport shuttle")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Sauna":
            allFacilities.push(
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    fill="green"
                    class="bi bi-droplet-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Sauna")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Water park":
            allFacilities.push(
              <div className="d-flex justify-content-between   ">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="25"
                    fill="currentColor"
                    class="bi bi-water"
                    viewBox="0 0 16 16"
                    fill="green"
                  >
                    <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65zm0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65z" />
                  </svg>
                </div>
                <div>
                  <p>
               
                    {t("checkOut.Booking.Water Park")}
                  </p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Swimming pool":
            allFacilities.push(
              <div className="d-flex justify-content-between   ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M8.7 79.2a3.8 3.8 0 0 1 5.5-1.3c21 15 34.5 9 50 2.2 14.5-6.5 30.8-13.7 53.6-1.4a4.5 4.5 0 0 1 1.8 5.9 3.9 3.9 0 0 1-5.4 2c-19.5-10.7-32.8-4.8-47 1.5-8.7 3.9-17.6 7.9-28 7.9A50 50 0 0 1 9.9 85.2a4.6 4.6 0 0 1-1.2-6zm109 15.5c-22.7-12.4-39-5-53.5 1.4-15.5 6.9-29 12.9-50-2.2a3.8 3.8 0 0 0-5.6 1.3 4.6 4.6 0 0 0 1.2 6A50 50 0 0 0 39.3 112c10.3 0 19.2-4 28-7.9 14-6.3 27.4-12.2 46.9-1.6a3.9 3.9 0 0 0 5.4-2 4.5 4.5 0 0 0-1.8-5.8zM100 56a12 12 0 1 0-12-12 12 12 0 0 0 12 12zM64.2 72c7.2-3.3 15.2-7 23.8-8.2 0 0-4-8.8-6.8-13.9l-18-29.2c-2.5-4.3-7.5-6-13.5-3.6L27.9 26a6.2 6.2 0 0 0-3.5 7.8 6 6 0 0 0 8 3.4L50 29.7a4 4 0 0 1 5 1.7l6 13.2L24 72c17.6 9.8 26.3 6.3 40.3 0z"></path>
                  </svg>
                </div>
                <div>
                  <p>
                     
                    {t("checkOut.Booking.Swimming pool")}
                  </p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Spa":
            allFacilities.push(
              <div className="d-flex justify-content-between   ">
                <div className="me-2">
                  <svg
                    height="25"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                    fill="green"
                  >
                    <path d="M64.7 12.3a.8.8 0 0 0-1 0C57 18 38.4 37.8 59.2 59c.3.3 1.5 1.2 1.7-.3a.6.6 0 0 1 0-.1l3.2-21 3.2 20.8v.3c.3 1.3 1.2.7 1.6.4 21-21.1 2.5-40.8-4.2-46.8zM120 51.8v-.1a.8.8 0 0 0-.3-1C111.9 46.4 87 35.3 74.2 62c-.1.4-.6 1.8.9 1.5l20.8-4-18.4 10-.3.1c-1.2.7-.2 1.4.2 1.6C104.1 84 116.5 60 119.9 51.7zm-111.8.1a.8.8 0 0 1 .3-1c7.7-4.4 32.5-15.4 45.4 11.4.1.3.6 1.7-.9 1.5l-20.9-4 18.5 10h.2c1.2.7.3 1.4-.1 1.7C23.9 84.3 11.5 60.3 8 51.9zm94.5 64a.8.8 0 0 0 .8-.7c.8-8.8.7-36-28.9-36.9-.4 0-1.8.2-1 1.4l12.1 17.5-16.5-12.8-.2-.2c-1.2-.8-1.4.3-1.5.8-.7 29.7 26.2 31.3 35.2 31zm-77.1 0h-.1a.8.8 0 0 1-.8-.7c-.7-8.8-.7-36 29-36.9.3 0 1.8.2 1 1.4L42.3 97.3 59 84.4l.2-.2c1.1-.8 1.4.3 1.4.8.7 29.7-26.2 31.3-35.1 31z"></path>
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Spa")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          case "Air conditioning":
            allFacilities.push(
              <div className="d-flex justify-content-between   ">
                <div className="me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-fan"
                    fill="green"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                  </svg>
                </div>
                <div>
                  <p>{t("checkOut.Booking.Air conditioning")}</p>
                </div>
              </div>
            );
            setFacilities(allFacilities);
            break;
          default:
            break;
        }
      }
    }
  }, []);

  return (
    <>
      <div className="py-3 px-2">
        <div
          style={{ backgroundColor: "#FFF0E0" }}
          className="border border-danger d-flex p-3"
        >
          <div className="me-3">
            <svg
              className="bk-icon -iconset-info_sign bui-banner__icon"
              height="24"
              role="presentation"
              width="24"
              viewBox="0 0 128 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M49.4 85l4.2-17.2c.7-2.7.8-3.8 0-3.8a29 29 0 0 0-8.8 3.8l-1.8-3A48 48 0 0 1 66.7 53c3.7 0 4.3 4.3 2.5 11l-5 18c-.7 3.3-.3 4.3.5 4.3a19 19 0 0 0 8.2-4L75 85c-8.6 8.7-18.2 12-21.8 12s-6.4-2.3-3.8-12zM75 36a9.2 9.2 0 0 1-9.2 9c-4.4 0-7-2.7-6.8-7a9 9 0 0 1 9.1-9c4.6 0 6.9 3.2 6.9 7z"></path>
              <path d="M62 16a48 48 0 1 1-48 48 48 48 0 0 1 48-48m0-8a56 56 0 1 0 56 56A56 56 0 0 0 62 8z"></path>
            </svg>
          </div>
          <div>
            <p>
              {" "}
              {t(
                "checkOut.Booking.In response to the coronavirus (COVID-19), additional safety and sanitation measures are in effect at this property."
              )}
            </p>
            <strong>
              <a href="#" className="text-decoration-none">
                {t("checkOut.Booking.Read more")}
              </a>
            </strong>
          </div>
        </div>
        <div className="property my-3">
          <div className="card mb-3 p-3">
            <div className="row g-0">
              <div className="col-md-3 img">
                <img
                  style={{ height: "200px" }}
                  src={props.property.images[0]}
                  className=" rounded-3 w-100"
                  alt="..."
                />
                <i className="far fa-heart"></i>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title ">
                    <a href="#" className="text-decoration-none">
                      {props.property[props.type + "Name"]}
                    </a>
                  </h5>
                  <div className="stars">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>

                    <img src={Like} alt="" />
                  </div>
                  <div>
                    <a href="#" className="card-text ">
                      {props.property.country} , {props.property.city} ,{" "}
                      {props.property.streetAddress}
                    </a>{" "}
                    <span className="dotspan "></span>{" "}
                    <a href="#" className="card-text">
                      {" "}
                    </a>{" "}
                    <span className="dotspan"></span>
                  </div>
                  <p className="p-desc">
                    {props.property.description &&
                      props.property.description.substring(0, 100)}
                    ...
                  </p>
                  {props.property.facilities.parking && (
                    <div className=" border border-secondary px-1  mt-3 d-inline-block">
                      <span
                        data-bui-component="Tooltip"
                        data-tooltip-position="bottom"
                        data-tooltip-text="Public parking is available at a location nearby (reservation is not possible) and charges may apply."
                      >
                        <svg
                          aria-hidden="true"
                          className="me-1 -streamline-parking_sign bp-bui-badge__icon"
                          fill="currentColor"
                          focusable="false"
                          height="14"
                          width="14"
                          viewBox="0 0 24 24"
                          role="presentation"
                        >
                          <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.75-1.5a1.5 1.5 0 0 1-1.5 1.5H10.5l.75.75v-4.5L10.5 9h2.25a1.5 1.5 0 0 1 1.5 1.5zm1.5 0a3 3 0 0 0-3-3H10.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h2.25a3 3 0 0 0 3-3zm-4.5 6.75v-4.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0z"></path>
                        </svg>

                        {t("checkOut.Booking.Parking")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-2">
                <div className="row">
                  <div className="reviews col-lg-8 pt-2">
                    <a className="text-muted " href="#">
                      {t("checkOut.Booking.reviews")}
                      {props.property.totalReviews}
                    </a>
                    <p>{reviewScore}</p>
                  </div>
                  <div className="rate col-lg-4  d-flex justify-content-center ">
                    <a
                      className="align-self-center text-decoration-none"
                      href="#"
                    >
                      {props.property.avgReviews}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 "></div>
                </div>

                <button
                  style={{ fontSize: "15px", backgroundColor: "#0071C2" }}
                  className="btn btn-primary  mt-3"
                  type="button"
                >
                  {t("checkOut.Booking.Show Details")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border p-3 ">
          <h5>{t("checkOut.Booking.Good to know")}</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="20"
              role="presentation"
              width="80"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p>{t("checkOut.Booking.You'll pay by paypal.")}</p>
          </div>
        </div>

        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>{t("checkOut.Booking.Enter your details")}</h5>
          <div
            className="d-inline-block p-1 px-2 rounded"
            style={({ color: "#006607" }, { backgroundColor: "#d2edd5" })}
          >
            {t("checkOut.Booking.Almost done! Just fill in the")}{" "}
            <b style={{ color: "brown" }}>*</b>
            {t("checkOut.Booking.required info")}
          </div>

          <div>
            <strong>{t("checkOut.Booking.Are you traveling for work?")}</strong>{" "}
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="forWork"
                id="traveller"
                value="true"
                onChange={handleResevationChange}
              />
              <label className="form-check-label" for="traveller">
                {t("checkOut.Booking.Yes")}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="forWork"
                id="notTraveller"
                value="false"
                onChange={handleResevationChange}
              />
              <label className="form-check-label" for="notTraveller">
                {t("checkOut.Booking.No")}
              </label>
            </div>
          </div>

          <div className="row g-3 ">
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                {t("checkOut.Booking.First name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="firstName"
                required
                onChange={handleResevationChange}
              />
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" className="form-label">
                {t("checkOut.Booking.Last name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                alue="Otto"
                name="lastName"
                required
                onChange={handleResevationChange}
              />
            </div>
          </div>
        </div>

        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>{props.info.roomType && props.info.roomType}</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="20"
              role="presentation"
              width="80"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p>
              <span className="text-success fw-bold">
                {" "}
                {t("checkOut.Booking.FREE cancellation")}
              </span>{" "}
              until 11:59 PM on {cancelDate}
            </p>
          </div>

          <div className="d-flex m-2 flex-wrap">
            {facilities &&
              facilities.map((item) => {
                return <div className="me-3">{item}</div>;
              })}
          </div>

          <div>
            <strong>
              {t("checkOut.Booking.Guests")}{" "}
              {props.type != "apartment" &&
                [...Array(props.info.room.guestsNumber)].map((item) => {
                  return (
                    <svg
                      Name=""
                      height="16"
                      width="16"
                      viewBox="0 0 24 24"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0zM3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0z"></path>
                    </svg>
                  );
                })}
            </strong>
            {props.type != "apartment" && !props.info.room.smoking && (
              <span className="ms-2 fs-6">
                {" "}
                <svg
                  aria-label="No smoking"
                  className="bk-icon -streamline-no_smoking"
                  fill="#333333"
                  height="20"
                  role="img"
                  width="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19.5 9h2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 0 0 1.5h7.5A2.25 2.25 0 0 0 24 12.75v-3a2.25 2.25 0 0 0-2.25-2.25H19.5a.75.75 0 0 0 0 1.5zM5.25 13.5h-1.5l.75.75v-6L3.75 9h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 0 0 0-1.5zM15 12v2.25a.75.75 0 0 0 1.5 0V12a.75.75 0 0 0-1.5 0zM0 8.25v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0zm1.28 15.53l22.5-22.5A.75.75 0 0 0 22.72.22L.22 22.72a.75.75 0 1 0 1.06 1.06zM4.5.75A2.25 2.25 0 0 1 2.25 3 2.25 2.25 0 0 0 0 5.25a.75.75 0 0 0 1.5 0 .75.75 0 0 1 .75-.75A3.75 3.75 0 0 0 6 .75a.75.75 0 0 0-1.5 0z"></path>
                </svg>{" "}
                {t("checkOut.Booking.No smoking")}
              </span>
            )}
          </div>

          <div className="row g-3 mt-1 ">
            <div className="col-md-6 ">
              <label for="validationCustom01" className="form-label 6 fw-bold">
                {t("checkOut.Booking.Full Guest Name")}
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                name="fullGuestName"
                onChange={handleResevationChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" className="form-label 6 fw-bold">
                {t("checkOut.Booking.Guest email")}
                <span className="text-muted fw-normal">
                 
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                name="guestEmail"
                onChange={handleResevationChange}
                alue="Otto"
                required
              />
              <small style={({ fontSize: "12px" }, { color: "gray" })}>
                {t(
                  "checkOut.Booking.Emails are only used for sending reservation info. No commercial messages – guaranteed."
                )}
                {t("checkOut.Booking.messages")} –{" "}
                <span className="fw-bold">
                  {t("checkOut.Booking.guaranteed")}
                </span>
              </small>
            </div>
          </div>
          <hr />

          <div className="">
            <div className="col-sm-3 ">
              <div className=" text-success"> {props.info.totalPrice} $</div>
              {props.type != "apartment" && (
                <p className="text-muted">
                  {props.info.room.Guests} {t("checkOut.Booking.Guests")}
                  {props.info.days} {t("checkOut.Booking.Days")}
                </p>
              )}
            </div>
          </div>
        </div>
        <div
          className="Details p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>{t("checkOut.Booking.Special requests")}</h5>
          <p>
            {t(
              "checkOut.Booking.Special requests can't be guaranteed, but the property will do its best to meet your needs. You can always make a special request after your booking is complete."
            )}
          </p>
          <strong>
            {t(
              "checkOut.Booking.Please write your requests in English or Arabic."
            )}{" "}
          </strong>{" "}
          <small className="text-muted">
            {" "}
            {t("checkOut.Booking.(optional)")}
          </small>
          <br />
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              name="specialRequest"
              onChange={handleResevationChange}
            ></textarea>
            <label for="floatingTextarea2">
              {t("checkOut.Booking.Request")}
            </label>
          </div>
        </div>
        <div
          className="arrival p-3 border my-3"
          style={{ backgroundColor: "#ebf3ff" }}
        >
          <h5>{t("checkOut.Booking.Your arrival time")}</h5>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-checkmark_selected"
              fill="#008009"
              height="20"
              role="presentation"
              width="60"
              viewBox="0 0 110 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M56.62 93.54a4 4 0 0 1-2.83-1.18L28.4 67a4 4 0 1 1 5.65-5.65l22.13 22.1 33-44a4 4 0 1 1 6.4 4.8L59.82 91.94a4.06 4.06 0 0 1-2.92 1.59zM128 64c0-35.346-28.654-64-64-64C28.654 0 0 28.654 0 64c0 35.346 28.654 64 64 64 35.33-.039 63.961-28.67 64-64zm-8 0c0 30.928-25.072 56-56 56S8 94.928 8 64 33.072 8 64 8c30.914.033 55.967 25.086 56 56z"></path>
            </svg>
            <p>
              {" "}
              {t(
                "checkOut.Booking.Your property will be ready for check-in at"
              )}{" "}
              {props.property.checkIn}{" "}
            </p>
          </div>
          <div className="d-flex py-2">
            <svg
              className="bk-icon -streamline-front_desk"
              fill="#008009"
              height="20"
              width="60"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path>
            </svg>
            <p>
              {t(
                "checkOut.Booking.24-hour front desk – help whenever you need it!"
              )}
            </p>
          </div>

          <div className="bui-form__group bp-form-group bp-form-group__checkin_eta_hour  ">
            <label for="checkin_eta_hour">
              {t("checkOut.Booking.Add your estimated arrival time")}
              <span className="text-muted ms-2">
                {t("checkOut.Booking.(optional)")}
              </span>
            </label>
            <div>
              <select
                name="checkin_eta_hour"
                className="form-select"
                id="checkin_eta_hour"
                name="arrivalTime"
                onChange={handleResevationChange}
              >
                <option value="" disabled="" selected="">
                  {t("checkOut.Booking.Please select")}
                </option>
                <option value="">{t("checkOut.Booking.I don't know")}</option>
                <option value="12:00-1:00 AM">
                  12:00&nbsp;AM – 1:00&nbsp;AM{" "}
                </option>
                <option value="1:00-2:00 AM">
                  1:00&nbsp;AM – 2:00&nbsp;AM{" "}
                </option>
                <option value="2:00-3:00 AM">
                  2:00&nbsp;AM – 3:00&nbsp;AM{" "}
                </option>
                <option value="3:00-4:00 AM">
                  3:00&nbsp;AM – 4:00&nbsp;AM{" "}
                </option>
                <option value="4:00-5:00 AM">
                  4:00&nbsp;AM – 5:00&nbsp;AM{" "}
                </option>
                <option value="5:00-6:00 AM">
                  5:00&nbsp;AM – 6:00&nbsp;AM{" "}
                </option>
                <option value="6:00-7:00 AM">
                  6:00&nbsp;AM – 7:00&nbsp;AM{" "}
                </option>
                <option value="7:0-8:00 AM">
                  7:00&nbsp;AM – 8:00&nbsp;AM{" "}
                </option>
                <option value="8:00-9:00 AM">
                  8:00&nbsp;AM – 9:00&nbsp;AM{" "}
                </option>
                <option value="9:00-10:00 AM">
                  9:00&nbsp;AM – 10:00&nbsp;AM{" "}
                </option>
                <option value="10:00-11:00 AM">
                  10:00&nbsp;AM – 11:00&nbsp;AM{" "}
                </option>
                <option value="11:00-12:00 PM">
                  11:00&nbsp;AM – 12:00&nbsp;PM{" "}
                </option>
                <option value="12:00-1:00 PM">
                  12:00&nbsp;PM – 1:00&nbsp;PM{" "}
                </option>
                <option value="1:00-2:00 PM">
                  1:00&nbsp;PM – 2:00&nbsp;PM{" "}
                </option>
                <option value="2:00-3:00 PM">
                  2:00&nbsp;PM – 3:00&nbsp;PM{" "}
                </option>
                <option value="3:00-4:00 PM">
                  3:00&nbsp;PM – 4:00&nbsp;PM{" "}
                </option>
                <option value="4:00-5:00 PM">
                  4:00&nbsp;PM – 5:00&nbsp;PM{" "}
                </option>
                <option value="5:00-6:00 PM">
                  5:00&nbsp;PM – 6:00&nbsp;PM{" "}
                </option>
                <option value="6:00-7:00 PM">
                  6:00&nbsp;PM – 7:00&nbsp;PM{" "}
                </option>
                <option value="7:00-8:00 PM">
                  7:00&nbsp;PM – 8:00&nbsp;PM{" "}
                </option>
                <option value="8:00-9:00 PM">
                  8:00&nbsp;PM – 9:00&nbsp;PM{" "}
                </option>
                <option value="9:00-10:00 PM">
                  9:00&nbsp;PM – 10:00&nbsp;PM{" "}
                </option>
                <option value="10:00-11:00 PM">
                  10:00&nbsp;PM – 11:00&nbsp;PM{" "}
                </option>
                <option value="11:00-12:00 AM">
                  11:00&nbsp;PM – 12:00&nbsp;AM{" "}
                </option>
                <option value="12:00-1:00 next day">
                  12:00&nbsp;AM – 1:00&nbsp;AM{" "}
                  {t("checkOut.Booking.(the next day)")}
                </option>
                <option value="1:00-2:00 next day">
                  1:00&nbsp;AM – 2:00&nbsp;AM{" "}
                  {t("checkOut.Booking.(the next day)")}
                </option>
              </select>
            </div>
            <div
              id="form-field__helper--checkin_eta_hour"
              className="bui-form__helper js-form-field__helper--checkin_eta_hour"
            >
              {t("checkOut.Booking.Time is for time zone")}{" "}
              {props.property.country}
            </div>
          </div>
        </div>
        <div className="my-5">
          {!paypalButton && (
            <button
              disabled={disabledCheckOut}
              className="w-100 btn btn-outline-success"
              onClick={() => {
                setPaypalButton(true);
                beforePaypal();
              }}
            >
              {t("checkOut.Booking.Continue to check out")}
            </button>
          )}
          {isReserved && (
            <Stack
              sx={{ width: "100%" }}
              spacing={2}
              className="my-5 animate__animated animate__fadeInLeft"
            >
              <Alert variant="filled" severity="success">
                {t(
                  "checkOut.Booking.Congratulations, your reservation has been successfully confirmed"
                )}
              </Alert>
            </Stack>
          )}

          {paypalButton && (
            <Paypal
              reservation={reservation}
              info={props.info}
              property={props.property}
              room={props.info.room}
              type={props.type}
              setIsReserved={setIsReserved}
            />
          )}
        </div>
      </div>
    </>
  );
}
