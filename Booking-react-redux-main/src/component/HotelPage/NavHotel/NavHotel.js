import React, { useState } from "react";
import "./NavHotel.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
// import Scrollspy from "react-scrollspy";

export default function NavHotel() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      {/* <Scrollspy
        className="scrollspy"
        items={["infoPrices", "Facilities", "houseRules"]}
        currentClassName="isCurrent"
      > */}
      <nav className="NAV">
        <ul>
          <li>
            <a className=" text-my-color fw-bold " href="#infoPrices">
              {t("HotelPage.NavHotel.Info & prices")}
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#Facilities">
              {t("HotelPage.NavHotel.Facilities")}
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#houseRules">
              {t("HotelPage.NavHotel.Hous rules")}
            </a>
          </li>
          <li>
            <a className=" text-my-color fw-bold " href="#idReviews">
              {t("HotelPage.NavHotel.Guest review")}
            </a>
          </li>
        </ul>
      </nav>
      {/* </Scrollspy> */}
    </>
  );
}
