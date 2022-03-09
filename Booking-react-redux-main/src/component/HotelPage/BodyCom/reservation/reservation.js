import React, { useState, useEffect } from "react";
import "./reservation.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next";
export default function Reservation(props) {
  const [hotelWith, setHotelWith] = useState([]);
  const [parking, setParking] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    let viewElement = [];
    for (let view of props.hotel.amenities.view) {
      switch (view) {
        case "City view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25h-9.5zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25zm0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25h-3.5zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zm0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5zM7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zM15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5zM19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.City view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Garden view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.361 6.625a6.75 6.75 0 0 0 7.413 6.721 6.93 6.93 0 0 0 6.087-6.988V2.125a1.5 1.5 0 0 0-2.4-1.2l-1.8 1.35h.9L13.461.7c-.8-.6-1.9-.6-2.7 0l-2.1 1.575h.9l-1.8-1.35a1.5 1.5 0 0 0-2.4 1.2v4.5zm1.5 0v-4.5l1.8 1.35c.267.2.633.2.9 0l2.1-1.575a.75.75 0 0 1 .9 0l2.1 1.575c.267.2.633.2.9 0l1.8-1.35V6.37a5.428 5.428 0 0 1-4.754 5.486 5.25 5.25 0 0 1-5.746-5.23zm4.5 6v10.5a.75.75 0 0 0 1.5 0v-10.5a.75.75 0 0 0-1.5 0zm-5.359 3.811c1.473.285 2.458 1.077 2.374 1.51-.084.432-1.292.801-2.765.516-1.473-.284-2.458-1.076-2.374-1.51.084-.432 1.292-.8 2.765-.516zm.285-1.473c-2.179-.42-4.233.206-4.523 1.705-.29 1.5 1.383 2.846 3.562 3.267 2.179.421 4.233-.205 4.523-1.705.29-1.5-1.383-2.846-3.562-3.267zm14.699 2.09c.084.434-.9 1.226-2.374 1.51-1.473.285-2.681-.084-2.765-.516-.084-.433.9-1.226 2.374-1.51 1.473-.285 2.681.084 2.765.517zm1.473-.284c-.29-1.5-2.344-2.126-4.523-1.705-2.178.421-3.851 1.767-3.562 3.267.29 1.5 2.344 2.126 4.523 1.705 2.179-.42 3.852-1.767 3.562-3.267z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Garden view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Pool view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-pool"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M23.097 21.71c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm0-4.5c-.896.187-1.71-.114-2.442-.76a4.629 4.629 0 0 1-.74-.837.75.75 0 0 0-1.272-.004 3.557 3.557 0 0 1-2.925 1.661 2.98 2.98 0 0 1-2.559-1.608.75.75 0 0 0-1.26-.11 4.418 4.418 0 0 1-3.286 1.719c-1.121-.058-2.216-.68-2.876-1.677a.75.75 0 0 0-1.214-.05 6.17 6.17 0 0 1-1.125 1.033c-.833.588-1.677.85-2.49.675a.75.75 0 1 0-.315 1.466c1.285.276 2.526-.107 3.67-.915a7.084 7.084 0 0 0 1.438-1.33l-1.214-.05a5.257 5.257 0 0 0 4.126 2.346c1.807-.084 3.417-.926 4.476-2.303l-1.26-.11a4.49 4.49 0 0 0 3.892 2.414 5.07 5.07 0 0 0 4.192-2.361l-1.272-.004c.192.308.533.739 1.022 1.17 1.057.931 2.32 1.4 3.74 1.104a.75.75 0 0 0-.306-1.468zm-1.722-8.64a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zM7.777 14.636l3.831-2.4a.75.75 0 0 0 .166-1.13L8.964 7.9a2.25 2.25 0 0 1 .687-3.494l4.264-2.135a.751.751 0 1 1 .686 1.333l-.01.006-3.405 1.702a1.502 1.502 0 0 0-.448 2.334l5.375 6.142a.75.75 0 1 0 1.128-.988l-5.377-6.145-.002-.003v-.001l3.394-1.697.027-.013A2.25 2.25 0 0 0 13.238.93L8.98 3.065a3.749 3.749 0 0 0-1.144 5.824l2.81 3.206.166-1.13-3.831 2.4a.75.75 0 0 0 .796 1.272z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Pool view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Landmark view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-landmark"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4.5 8.911h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-3zm4.5 12H3l.75.75v-2.25h16.5v2.25l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-2.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v2.25c0 .414.336.75.75.75h18zm-19.5 3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zm0-3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5zm18.75-15.75v2.25H3.75v-2.25l-.415.67L12 1.5l8.665 4.332-.415-.671zm1.5 0a.75.75 0 0 0-.415-.67L12.67.157a1.503 1.503 0 0 0-1.34 0L2.666 4.49a.75.75 0 0 0-.415.671v2.25a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-2.25zM3 5.911h18a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Landmark view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Quiet street view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-landscape_view"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M-.002 15.75v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0zm11.25 0v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0zm11.25 0v7.5a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-1.5 0zm.75 1.5H.748a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zm0 3H.748a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zM1.914 13.374l6.75-4.5h-.832l6.75 4.5a.75.75 0 1 0 .832-1.248l-6.75-4.5a.75.75 0 0 0-.832 0l-6.75 4.5a.75.75 0 1 0 .832 1.248zM14.998 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-4.084 8.374l6-4h-.832l5.252 3.501a.75.75 0 0 0 .832-1.248l-5.252-3.501a.75.75 0 0 0-.832 0l-6 4a.75.75 0 1 0 .832 1.248z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Quiet street view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Sea view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-sea_view"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M.658 23.994A6.261 6.261 0 0 0 5.77 22.29l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 21.75l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zm0-4.5A6.261 6.261 0 0 0 5.77 17.79l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 17.25l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zm0-4.5A6.261 6.261 0 0 0 5.77 13.29l-1.077-.037a5.297 5.297 0 0 0 7.864 0L12 12.75l-.557.503a5.297 5.297 0 0 0 7.864 0l-.557-.503-.52.54a6.261 6.261 0 0 0 5.112 1.704.75.75 0 1 0-.184-1.488 4.761 4.761 0 0 1-3.888-1.296.75.75 0 0 0-1.077.037 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.113 0 3.797 3.797 0 0 1-5.637 0 .75.75 0 0 0-1.076-.037 4.761 4.761 0 0 1-3.888 1.296.75.75 0 1 0-.184 1.488zM4.65 1.2L6.3 3.4a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L7.5 2.5 5.85.3a.75.75 0 0 0-1.2.9zm6.75 4.5l1.65 2.2a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L14.25 7 12.6 4.8a.75.75 0 1 0-1.2.9zm6.75-4.5l1.65 2.2a1.5 1.5 0 0 0 2.4 0l1.65-2.2a.75.75 0 1 0-1.2-.9L21 2.5 19.35.3a.75.75 0 1 0-1.2.9z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Sea view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Mountain view":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-mountains"
                height="16"
                width="16"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M127.5 104.38l-45.33-82a4.323 4.323 0 0 0-.33-.5 10.858 10.858 0 0 0-2-2c-4.7-3.567-11.398-2.674-15 2a3.61 3.61 0 0 0-.33.5l-25.44 46-7.87-10.47a4 4 0 0 0-6.75.55l-24 46A4 4 0 0 0 4 110.31h120a4 4 0 0 0 3.5-5.93zM71.32 26.57a2.73 2.73 0 0 1 3.68-.32c.128.093.246.2.35.32L89 51.35l-7.33 6.87-2.54-2.84a7.85 7.85 0 0 0-5.83-2.68 7.88 7.88 0 0 0-5.87 2.68l-2.54 2.83-7.24-6.91zM28.61 67.79l6.21 8.28-14.51 26.24H10.6zm.84 34.52L42.83 78.1c.196-.265.358-.554.48-.86l10.34-18.7 5.86 5.6a7.78 7.78 0 0 0 5.71 2.17 7.89 7.89 0 0 0 5.56-2.67l2.52-2.83 2.53 2.83a7.85 7.85 0 0 0 5.55 2.67h.32a7.75 7.75 0 0 0 5.37-2.17l6-5.58 24.19 43.74z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Mountain view")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        case "Terrace":
          viewElement.push(
            <div className="d-flex align-items-center">
              <svg
                class="bk-icon -streamline-resort"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M.768 11.413l1.5 6.75a.75.75 0 0 0 1.464-.326l-1.5-6.75a.75.75 0 0 0-1.464.326zM2.22 23.456l1.5-5.25L3 18.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 0 1.5 0V19.5A2.25 2.25 0 0 0 6 17.25H3a.75.75 0 0 0-.721.544l-1.5 5.25a.75.75 0 1 0 1.442.412zm19.547-12.369l-1.5 6.75a.75.75 0 1 0 1.464.326l1.5-6.75a.75.75 0 1 0-1.464-.326zm1.453 11.957l-1.5-5.25A.75.75 0 0 0 21 17.25h-3a2.25 2.25 0 0 0-2.25 2.25v3.75a.75.75 0 0 0 1.5 0V19.5a.75.75 0 0 1 .75-.75h3l-.721-.544 1.5 5.25a.75.75 0 1 0 1.442-.412zM11.25 6.75v16.5a.75.75 0 0 0 1.5 0V6.75a.75.75 0 0 0-1.5 0zm-4.5 7.5h10.5a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5zM1.5 6l10.064-4.37c.297-.161.575-.161.803-.033l10.178 4.425L22.5 6H1.5zm0 1.5h21a1.5 1.5 0 0 0 .689-2.832L13.034.255c-.616-.35-1.452-.35-2.136.034L.858 4.646c-.544.28-.856.792-.857 1.352A1.5 1.5 0 0 0 1.499 7.5z"></path>
              </svg>
              <span className="ms-1">
                {t("HotelPage.BodyCom.reservation.Terrace")}
              </span>
            </div>
          );
          setHotelWith(viewElement);
          break;
        default:
          break;
      }
    }
    if (props.hotel.facilities.parking) {
      let parking = (
        <div className="d-flex mx-3 align-items-center ">
          <div className="me-2">
            <span class="badge bg-dark fs-6 p-2 h-50">
              <b>P</b>
            </span>
          </div>
          <div>
            <p className="mt-3">
              {t("HotelPage.BodyCom.reservation.Free parking!")}
            </p>
          </div>
        </div>
      );
      setParking(parking);
    }
  }, []);
  let Name;
  if (props.hotel) {
    Name = "hotel";
  }
  return (
    <>
      <div>
        <div className="Reservation mt-3">
          <div className="p-3">
            <h6>
              {t("HotelPage.BodyCom.reservation.Perfect for a 1-night stay!")}
            </h6>
            <div className="d-flex">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#0071c2"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                </svg>
              </p>
              <p>
                {" "}
                {t("HotelPage.BodyCom.reservation.Located in")}{" "}
                {props.hotel.country} this {Name} has {props.rate}{" "}
                {t("HotelPage.BodyCom.reservation.location score of")}{" "}
                {props.hotel.avgReviews}
              </p>
            </div>

            <div className="d-flex flex-column">
              <h6 className="text-secondary">
                {t("HotelPage.BodyCom.reservation.Hotel with")}
              </h6>
              <div className="ms-0">
                {hotelWith.map((item) => {
                  return item;
                })}
              </div>
            </div>
          </div>
          {parking}
          <div className="p-3">
            <a className="btn btn-primary w-100 rounded-0" href="#ReV">
              {t("HotelPage.BodyCom.reservation.Reserve")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
