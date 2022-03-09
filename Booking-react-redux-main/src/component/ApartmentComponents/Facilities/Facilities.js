import React, { useEffect, useState } from "react";
import "./Facilities.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function Facilities(props) {
   let [apartment, setApartment] = useState(props.apartment);
  
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
              {t("ApartmentComponents.Facilities.Facilities of")} {" "}
              {props.apartment.apartmentName}
            </h4>
          </div>
        </div>

        <div class="d-flex flex-row  mb-3 flex-wrap">
          <div className="d-flex flex-column">
            <p className="fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-gear-wide"
                viewBox="0 0 16 16"
              >
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
              </svg>{" "}
              {t("ApartmentComponents.Facilities.General")}
            </p>
            {apartment &&
              apartment.facilities.general.map((x) => {
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

          <div className="d-flex flex-column">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 3A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3A.75.75 0 0 0 6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5zM21 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-3 4.5a3 3 0 0 1 3 3v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5A4.5 4.5 0 0 0 19.5 9a.75.75 0 0 0 0 1.5zm-5.25-6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path>
              </svg>

              {t("ApartmentComponents.Facilities.Entertainment")}
            </p>
            {apartment &&
              apartment.facilities.entertainment.map((x) => {
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

          <div className="d-flex flex-column ms-3">
            <p className="fw-bold">
              <svg
                className="me-2"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M23.25 11.248a5.99 5.99 0 0 0-3.486-5.43l.423.82a3.704 3.704 0 0 0-3.699-4.388 1.27 1.27 0 0 0-.184.015l-.016.002c-.029.004-.024.004-.02.004l.047.748.618-.425a5.987 5.987 0 0 0-9.866 0l.618.425.048-.748c.003 0 .007 0-.021-.004l-.016-.002A1.311 1.311 0 0 0 7.5 2.25a3.701 3.701 0 0 0-3.687 4.389L4.55 6.5l-.313-.681a5.989 5.989 0 0 0 1.264 11.3l-.526-.419a4.832 4.832 0 0 0 7.51 1.654L12 17.782l-.485.572a4.832 4.832 0 0 0 7.51-1.657l-.681-.315.156.734a5.998 5.998 0 0 0 4.75-5.866zm-1.5.002a4.498 4.498 0 0 1-3.562 4.398.75.75 0 0 0-.525.42 3.333 3.333 0 0 1-5.178 1.142.75.75 0 0 0-.97 0 3.332 3.332 0 0 1-5.179-1.14.75.75 0 0 0-.525-.419 4.489 4.489 0 0 1-.947-8.47.75.75 0 0 0 .423-.82A2.204 2.204 0 0 1 7.488 3.75h.001l.012.003c.05.007.089.011.136.014a.75.75 0 0 0 .666-.323 4.487 4.487 0 0 1 7.394 0 .75.75 0 0 0 .666.323c.047-.003.087-.007.136-.014l.012-.002c.008-.001.005-.001-.011-.001a2.204 2.204 0 0 1 2.213 2.611.75.75 0 0 0 .424.82 4.49 4.49 0 0 1 2.613 4.07zm-10.5-3v15a.75.75 0 0 0 1.5 0v-15a.75.75 0 0 0-1.5 0zm.75 7.5c3.414 0 5.25-1.836 5.25-5.25a.75.75 0 0 0-1.5 0c0 2.586-1.164 3.75-3.75 3.75a.75.75 0 0 0 0 1.5zm-.045-4.499a2.793 2.793 0 0 1-2.956-2.956.75.75 0 0 0-1.498-.09 4.295 4.295 0 0 0 4.544 4.544.75.75 0 1 0-.09-1.498z"></path>
              </svg>

              {t("ApartmentComponents.Facilities.Outdoor & View")}
            </p>
            {apartment &&
              apartment.facilities.cookingAndCleaening.map((x) => {
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

          <div className="d-flex flex-column ms-3">
            <p className="fw-bold">
              <span>
                <svg
                  className="me-2"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M21 12v9.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75V12zm1.5 0V2.25A2.25 2.25 0 0 0 20.25 0H3.75A2.25 2.25 0 0 0 1.5 2.25v19.5A2.25 2.25 0 0 0 3.75 24h16.5a2.25 2.25 0 0 0 2.25-2.25V12zM5.25 4.5h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm-3 3h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zM16.5 15a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm0-10.875a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zm-4.5 0a.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5 1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5zM10.5 15a1.5 1.5 0 0 1 1.5-1.5.75.75 0 0 0 0-1.5 3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0z"></path>
                </svg>
                {t("ApartmentComponents.Facilities.Cooking & Cleaening")}{" "}
              </span>
            </p>
            {apartment &&
              apartment.facilities.cookingAndCleaening.map((x) => {
                return (
                  <span className="mt-1">
                    <svg
                      height="20"
                      width="20"
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
