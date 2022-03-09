import React, { useEffect, useState } from "react";
import "./Facilities.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function Facilities(props) {
  let [hotel, setHotel] = useState(props.hotel);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="mt-5" id="Facilities">
        <div class="d-flex mb-3">
          <div class="me-auto ">
            <h4 className="fw-bold">
              {t("HotelPage.Facilities.Facilities of")} {props.hotel.hotelName}
            </h4>
          </div>
        </div>

        <div class="d-flex flex-row  mb-3 flex-wrap">
          <div className="d-flex flex-column col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="18"
                width="18"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5.999.75v22.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0zm3 0V7.5a2.259 2.259 0 0 1-2.252 2.25 2.258 2.258 0 0 1-2.248-2.252V.75a.75.75 0 0 0-1.5 0V7.5a3.76 3.76 0 0 0 3.748 3.75 3.76 3.76 0 0 0 3.752-3.748V.75a.75.75 0 0 0-1.5 0zm6.75 15.75h3c1.183.046 2.203-.9 2.25-2.111a2.22 2.22 0 0 0 0-.168c-.25-6.672-.828-9.78-3.231-13.533a1.508 1.508 0 0 0-2.77.81V23.25a.75.75 0 0 0 1.5 0V1.503c0 .003.001 0 .003 0a.006.006 0 0 1 .008.002c2.21 3.45 2.75 6.354 2.99 12.773v.053a.696.696 0 0 1-.721.67L15.749 15a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              {t("HotelPage.Facilities.Food & Drink")}
            </p>
            {hotel &&
              hotel.amenities.food.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>

          <div className="d-flex flex-column col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M103.8 49.8A8 8 0 0 1 96 56H32a8 8 0 0 1-3.6-15.2L46.1 32a39.7 39.7 0 0 1 9.2-3.3 7.9 7.9 0 0 0-7.2-4.7H8V8h40.1a23.9 23.9 0 0 1 23.7 20.6 39.7 39.7 0 0 1 10 3.4l17.8 8.8a8 8 0 0 1 4.2 9zM32 64s-8 11.6-8 16a8 8 0 0 0 16 0c0-4.4-8-16-8-16zm8 48a8 8 0 0 0 16 0c0-4.4-8-16-8-16s-8 11.6-8 16zm-32 0a8 8 0 0 0 16 0c0-4.4-8-16-8-16s-8 11.6-8 16zm64 0a8 8 0 0 0 16 0c0-4.4-8-16-8-16s-8 11.6-8 16zm40-16s-8 11.6-8 16a8 8 0 0 0 16 0c0-4.4-8-16-8-16zM64 64s-8 11.6-8 16a8 8 0 0 0 16 0c0-4.4-8-16-8-16zm23 16a8 8 0 0 0 16 0c0-4.4-8-16-8-16s-8 11.6-8 16z"></path>
              </svg>
              {t("HotelPage.Facilities.Bathroom")}
            </p>
            {hotel &&
              hotel.amenities.bathroom.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>

          <div className="d-flex flex-column col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22.5 10.375v6.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-13a.25.25 0 0 1 .25-.25h20.5a.25.25 0 0 1 .25.25v6.5zm1.5 0v-6.5a1.75 1.75 0 0 0-1.75-1.75H1.75A1.75 1.75 0 0 0 0 3.875v13c0 .966.784 1.75 1.75 1.75h20.5a1.75 1.75 0 0 0 1.75-1.75v-6.5zm-16.5 12h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5zm3.75-4.5v3.75a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 0-1.5 0z"></path>
              </svg>
              {t("HotelPage.Facilities.Media & Technology")}
            </p>
            {hotel &&
              hotel.amenities.media.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>

          <div className="d-flex flex-column col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M14.244 14.156a6.75 6.75 0 0 0-6.75-5.906A6.747 6.747 0 0 0 .73 14.397a.75.75 0 0 0 1.494.134 5.25 5.25 0 0 1 5.27-4.781 5.253 5.253 0 0 1 5.262 4.594.75.75 0 1 0 1.488-.188zM10.125 4.125a2.625 2.625 0 1 1-5.25 0V1.5h5.25v2.625zm1.5 0V1.5a1.5 1.5 0 0 0-1.5-1.5h-5.25a1.5 1.5 0 0 0-1.5 1.5v2.625a4.125 4.125 0 0 0 8.25 0zM23.25 22.5H.75l.75.75v-7.5a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v7.5l.75-.75zm0 1.5a.75.75 0 0 0 .75-.75v-7.5a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 15.75v7.5c0 .414.336.75.75.75h22.5zM4.376 5.017a9.42 9.42 0 0 1 3.12-.517 9.428 9.428 0 0 1 3.133.519.75.75 0 0 0 .49-1.418A10.917 10.917 0 0 0 7.498 3a10.91 10.91 0 0 0-3.611.6.75.75 0 0 0 .49 1.417zM15.75 14.27a3.001 3.001 0 0 1 6 .16.75.75 0 1 0 1.5.04 4.501 4.501 0 1 0-9-.24.75.75 0 1 0 1.5.04zm3.75-3.77V8.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0zM17.25 9h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              {t("HotelPage.Facilities.Services")}
            </p>
            {hotel &&
              hotel.amenities.services.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>

          <div className="d-flex flex-column mt-3 col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                xmlSpace="preserve"
                height="17"
                width="17"
              >
                <g>
                  <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                    <path d="M4563.7,2304.2c-1081.9-87.9-2245.4-519-3369.2-1249.3C878.5,849.8,434.8,517,248.6,341.3C110.5,211.5,100,196.9,100,113.2c0-73.2,12.5-104.6,71.1-165.3c127.7-136,609-508.5,939.6-728.2C2717.9-1849.8,4333.5-2276.7,5854.9-2036C7077-1841.4,8399.5-1222,9525.4-317.9C9849.8-56.4,9900,2.2,9900,117.3c0,85.8-8.4,100.5-131.8,213.5c-194.6,182.1-544.1,447.8-870.6,667.6C7443.2,1967.3,5955.3,2417.2,4563.7,2304.2z M5735.6,1825c1021.2-148.6,2096.9-606.9,3113.9-1326.8C9102.7,318.2,9335,132,9335,109c0-33.5-397.6-334.8-732.4-554.6c-968.9-638.3-1906.4-1017.1-2869.1-1163.5c-422.7-64.9-1038-64.9-1460.7,0c-772.2,117.2-1582.1,408.1-2354.3,841.3C1506.3-533.5,671.3,52.5,671.3,109c0,52.3,738.7,579.7,1138.4,814.1c426.9,251.1,975.2,502.2,1414.6,648.7C4101.2,1864.7,4902.7,1946.3,5735.6,1825z" />
                    <path d="M4793.9,1414.8c-343.2-67-661.3-257.4-878.9-529.4c-330.6-412.3-374.6-929.2-119.3-1383.3c90-159.1,370.4-437.4,537.8-529.4c416.4-228.1,845.4-238.6,1276.5-29.3c242.8,117.2,519,389.2,632,621.5c108.8,223.9,154.8,464.6,125.6,669.7c-48.1,332.7-146.5,523.2-399.7,774.3c-280.4,276.2-544.1,395.5-912.4,408.1C4940.4,1421.1,4823.2,1419,4793.9,1414.8z M5214.5,967c481.3-92.1,791-527.4,711.5-998.2c-67-395.5-353.7-665.5-768-724.1c-655-94.2-1180.3,395.5-1077.7,1006.6C4168.2,766.1,4653.7,1073.7,5214.5,967z" />
                  </g>
                </g>
              </svg>
              {t("HotelPage.Facilities.View")}
            </p>
            {hotel &&
              hotel.amenities.view.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>
          <div className="d-flex flex-column mt-3 col-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM12 15h8.5c.69 0 1.25.56 1.25 1.25v2.5l.75-.75H12l.75.75v-4.5L12 15zm0-1.5a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-2.5a2.75 2.75 0 0 0-2.75-2.75H12zm-10.5 6h21l-.75-.75v3l.75-.75h-21l.75.75v-3l-.75.75zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h21a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75h-21zm.75 5.25v-9a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0zm21 0v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM19.4 6.001L19.403 6H15.1v.001l.562-4.5V1.5h3.176L19.4 6zm1.49-.187l-.564-4.5A1.5 1.5 0 0 0 18.838 0h-3.176a1.5 1.5 0 0 0-1.488 1.314l-.563 4.5A1.499 1.499 0 0 0 15.102 7.5H19.4a1.499 1.499 0 0 0 1.49-1.687zm-4.39.936v4.5a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-1.5 0z"></path>
              </svg>
              {t("HotelPage.Facilities.Room")}
            </p>
            {hotel &&
              hotel.amenities.room.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>

          <div className="d-flex flex-column mt-3 col-3 ">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zm-6.182 15.093l.188 1.5A.75.75 0 0 0 18 22.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5a4.5 4.5 0 0 0-7.2-3.6.75.75 0 1 0 .9 1.2 3 3 0 0 1 4.8 2.4v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3l.744.657-.188-1.5a.75.75 0 0 0-1.488.186zM6.75 5.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM5.444 20.157l-.188 1.5L6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 4.8-2.4.75.75 0 1 0 .9-1.2A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3a.75.75 0 0 0 .744-.657l.188-1.5a.75.75 0 0 0-1.488-.186zM13.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM15 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3a4.5 4.5 0 0 0-4.5 4.5v.75c0 .414.336.75.75.75h1.5l-.74-.627.75 4.5a.75.75 0 0 0 .74.627H12a.75.75 0 0 0 0-1.5h-1.5l.74.627-.75-4.5a.75.75 0 0 0-.74-.627h-1.5l.75.75v-.75a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zm0 1.5a3 3 0 0 1 3 3v.75l.75-.75h-1.5a.75.75 0 0 0-.74.627l-.75 4.5.74-.627H12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 .74-.627l.75-4.5-.74.627h1.5a.75.75 0 0 0 .75-.75v-.75A4.5 4.5 0 0 0 12 12a.75.75 0 0 0 0 1.5z"></path>
              </svg>
              {t("HotelPage.Facilities.Entertainment")}
            </p>
            {hotel &&
              hotel.amenities.entertainment.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>
          <div className="d-flex flex-column mt-3 col-3 ">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="17"
                width="17"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M13.125 3.56a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0zm1.5 0a3.375 3.375 0 1 0-6.75 0 3.375 3.375 0 0 0 6.75 0zm3.454 18.335l-1.836-3.67a.75.75 0 0 0-.671-.415H11.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v6c0 .414.336.75.75.75h3.75a.75.75 0 0 1 .671.415l2.25 4.5a.75.75 0 0 1-1.342.67zm-1.342.671a2.25 2.25 0 1 0 4.026-2.012l-2.25-4.5A2.25 2.25 0 0 0 16.5 14.81h-3.75l.75.75v-6a2.25 2.25 0 0 0-4.5 0v7.5a2.25 2.25 0 0 0 2.25 2.25h4.322l-.67-.415 1.835 3.672zm-4.362-.958a5.25 5.25 0 0 1-5.25-9.096.75.75 0 1 0-.75-1.299 6.75 6.75 0 1 0 6.75 11.694.75.75 0 1 0-.75-1.3z"></path>
              </svg>
              {t("HotelPage.Facilities.Accessibility")}
            </p>
            {hotel &&
              hotel.amenities.accessibility.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="17"
                      width="17"
                      viewBox="0 0 128 128"
                      role="presentation"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
                    </svg>
                    {x}
                  </span>
                );
              })}
          </div>
        </div>
 
      </div>
    </>
  );
}
