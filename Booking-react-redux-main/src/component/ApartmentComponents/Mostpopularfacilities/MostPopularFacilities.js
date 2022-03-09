import React, { useEffect, useState } from "react";
import "./MostPopularFacilities.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function MostPopularFacilities(props) {
  const [facilities, setFacilities] = useState([]);
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    let allFacilities = [];

    for (let Facilities of props.apartment.facilities.general) {
      switch (Facilities) {
        case "Air conditioning":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="me-2">
                <svg
                  height="30"
                  width="30"
                  viewBox="0 0 128 128"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  fill="green"
                >
                  <path d="M89.6 44.6L94 28.3a4 4 0 0 1 4.9-2.9 4 4 0 0 1 2.8 5l-2.3 8.5 7.7-4.4a4 4 0 0 1 5.5 1.4 4 4 0 0 1-1.5 5.5l-7.7 4.4 8.6 2.4a4 4 0 0 1 2.8 4.9 4 4 0 0 1-4.9 2.8l-16.3-4.4-15.5 9a4 4 0 0 1-5.5-1.5 4 4 0 0 1 1.5-5.5zM53.9 74.5a4 4 0 0 0 1.4-5.5 4 4 0 0 0-5.4-1.5l-15.6 9L18 72.2a4 4 0 0 0-5 2.8 4 4 0 0 0 2.9 5l8.4 2.2-7.5 4.3a4 4 0 0 0-1.4 5.5 4 4 0 0 0 5.4 1.5l7.8-4.5-2.4 8.8a4 4 0 0 0 2.9 4.9 4 4 0 0 0 4.9-2.9l4.4-16.4zM60 32.2V50a4 4 0 0 0 4 4 4 4 0 0 0 4-4V32l11.9-11.9a4 4 0 0 0 0-5.6 4 4 0 0 0-5.7 0L68 20.7V12a4 4 0 0 0-4-4 4 4 0 0 0-4 4v8.9l-6.4-6.4a4 4 0 0 0-5.6 0 4 4 0 0 0 0 5.7zM114.8 75a4 4 0 0 0-4.9-2.8l-16.3 4.3-15.5-9a4 4 0 0 0-5.5 1.5 4 4 0 0 0 1.5 5.5l15.5 8.9 4.3 16.4a4 4 0 0 0 4.9 2.8 4 4 0 0 0 2.8-4.9L99.3 89l7.7 4.5a4 4 0 0 0 5.5-1.5 4 4 0 0 0-1.5-5.4l-7.6-4.4 8.6-2.3a4 4 0 0 0 2.8-4.9zM68 95.8V78a4 4 0 0 0-4-4 4 4 0 0 0-4 4v18l-11.9 11.9a4 4 0 0 0 0 5.6 4 4 0 0 0 5.7 0l6.2-6.2v8.7a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-8.9l6.4 6.4a4 4 0 0 0 5.6 0 4 4 0 0 0 0-5.7zM13.2 53a4 4 0 0 0 4.8 2.8l16.3-4.3 15.5 9a4 4 0 0 0 5.5-1.5 4 4 0 0 0-1.4-5.5l-15.5-8.9-4.3-16.4a4 4 0 0 0-5-2.8 4 4 0 0 0-2.8 4.9l2.3 8.7-7.7-4.5a4 4 0 0 0-5.4 1.5 4 4 0 0 0 1.4 5.5l7.6 4.3-8.5 2.3a4 4 0 0 0-2.9 4.9z"></path>
                </svg>
              </div>
              <div>
                <p>
                  {t(
                    "ApartmentComponents.MostPopularfacilitites.Air conditioning"
                  )}
                </p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Heating":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="ms-3">
                <svg
                  className="me-2"
                  height="30"
                  width="30"
                  fill="green"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 115.51 122.88"
                >
                  <path d="M9.39,40.32h96.73a9.41,9.41,0,0,1,9.39,9.38v54.81a9.41,9.41,0,0,1-9.39,9.38H94.84V122a.92.92,0,0,1-.92.92H85.35a.93.93,0,0,1-.93-.92v-8.07H31.08V122a.92.92,0,0,1-.92.92H21.59a.93.93,0,0,1-.93-.92v-8.07H9.39A9.39,9.39,0,0,1,0,104.51V49.7a9.39,9.39,0,0,1,9.39-9.38ZM24.66,2.79A2.08,2.08,0,0,1,26.25.11a2.64,2.64,0,0,1,3.17,1.33c3,7.54.85,12.88-1.05,17.58-1.64,4-3,7.49.63,11.38a1.89,1.89,0,0,1-.42,3A2.86,2.86,0,0,1,25.05,33c-5.37-5.71-3.57-10.16-1.46-15.36C25.26,13.59,27.14,9,24.66,2.79ZM72,2.78A2.06,2.06,0,0,1,73.58.11a2.64,2.64,0,0,1,3.18,1.33C79.76,9,77.6,14.32,75.7,19c-1.63,4-3,7.49.63,11.38a1.89,1.89,0,0,1-.42,3A2.84,2.84,0,0,1,72.38,33C67,27.3,68.81,22.85,70.92,17.64,72.59,13.59,74.45,9,72,2.78Zm15.75,0A2.06,2.06,0,0,1,89.33.12a2.64,2.64,0,0,1,3.18,1.32c3,7.55.84,12.89-1.06,17.58-1.63,4-3,7.49.63,11.38a1.89,1.89,0,0,1-.42,3A2.86,2.86,0,0,1,88.13,33c-5.37-5.7-3.57-10.16-1.46-15.36,1.67-4,3.54-8.68,1.08-14.86Zm-47.33,0A2.06,2.06,0,0,1,42,.11a2.64,2.64,0,0,1,3.18,1.33C48.18,9,46,14.32,44.12,19c-1.63,4-3,7.49.63,11.38a1.89,1.89,0,0,1-.42,3A2.84,2.84,0,0,1,40.8,33c-5.37-5.7-3.57-10.15-1.46-15.36C41,13.59,42.87,9,40.42,2.78Zm15.75,0A2.06,2.06,0,0,1,57.75.12a2.64,2.64,0,0,1,3.18,1.32c3,7.55.84,12.89-1.06,17.58-1.63,4-3,7.49.63,11.38a1.89,1.89,0,0,1-.42,3A2.86,2.86,0,0,1,56.55,33c-5.37-5.7-3.57-10.16-1.46-15.36,1.67-4,3.54-8.68,1.08-14.86Zm38,50.37a2.77,2.77,0,0,1,5.53,0v48.13a2.77,2.77,0,1,1-5.53,0V53.16Zm-15.63,0a2.77,2.77,0,0,1,5.53,0v48.13a2.77,2.77,0,1,1-5.53,0V53.16Zm-15.63,0a2.77,2.77,0,0,1,5.53,0v48.13a2.77,2.77,0,1,1-5.53,0V53.16Zm-15.63,0a2.77,2.77,0,0,1,5.53,0v48.13a2.77,2.77,0,1,1-5.53,0V53.16Zm-15.63,0a2.76,2.76,0,0,1,5.52,0v48.13a2.76,2.76,0,1,1-5.52,0V53.16ZM16,53.16a2.76,2.76,0,1,1,5.52,0v48.13a2.76,2.76,0,1,1-5.52,0V53.16Zm90.08-7.5H9.39a4.06,4.06,0,0,0-4,4v54.81a4.06,4.06,0,0,0,4,4h96.73a4.06,4.06,0,0,0,4-4V49.7a4.06,4.06,0,0,0-4-4Z" />
                </svg>
              </div>
              <div>
                <p>
                  {" "}
                  {t("ApartmentComponents.MostPopularfacilitites.Heating")}
                </p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Free WiFi":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="ms-3">
                <svg
                  className="me-2"
                  fill="green"
                  height="30"
                  width="30"
                  viewBox="0 0 128 128"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="64" cy="100" r="12"></circle>
                  <path d="M118.3 32.7A94.9 94.9 0 0 0 64 16 94.9 94.9 0 0 0 9.7 32.7a4 4 0 1 0 4.6 6.6A87 87 0 0 1 64 24a87 87 0 0 1 49.7 15.3 4 4 0 1 0 4.6-6.6zM87.7 68.4a54.9 54.9 0 0 0-47.4 0 4 4 0 0 0 3.4 7.2 47 47 0 0 1 40.6 0 4 4 0 0 0 3.4-7.2z"></path>
                  <path d="M104 50.5a81.2 81.2 0 0 0-80 0 4 4 0 0 0 4 7 73.2 73.2 0 0 1 72 0 4 4 0 0 0 4-7z"></path>
                </svg>
              </div>
              <div>
                <p>
                  {t("ApartmentComponents.MostPopularfacilitites.Free Wifi 5G")}
                </p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Electric vehicle charging station":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="ms-3">
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
                  fill="green"
                  height="30"
                  width="30"
                >
                  <g>
                    <path d="M10,481.6c0-1.3,0-2.5,0-3.8c0.3-0.5,0.9-1,1-1.5c3.2-18.1,8.8-35.5,17.8-51.4c6.6-11.5,16.9-19.8,30.3-21.5c13.7-1.7,27.7-1.5,41.5-1.7c4.6,0,6.7-1.1,8.4-5.9c22.9-64.2,46-128.3,69.1-192.4c5.9-16.4,15.3-30.4,29-41.2c27.8-22,60.4-33.9,94.1-42c42.9-10.3,87-12.4,130.9-14c73.1-2.6,146.1-1.8,218.9,6c35.7,3.8,70.3,11.6,103.5,25.4c16.9,7.1,32.8,16,45.9,29.3c11.3,11.4,17.3,25.7,22.6,40.3c22.9,62.9,45.6,125.8,68.3,188.7c1.5,4.2,3.2,6,8,5.8c10.3-0.4,20.7-0.7,30.9,0.1c7.2,0.5,14.6,2,21.2,4.7c15,6.2,23.2,18.7,28.3,33.5c3.3,9.7,6.8,19.3,10.1,28.9c0,5.5,0,11,0,16.4c-1.8,2.7-3.2,5.7-5.3,8.1c-5.3,6.1-12.6,7.1-20.1,7.2c-11.8,0.1-23.5,0-35.3,0c0,1.1-0.1,1.8,0,2.3c0.6,2,1.2,4,2,5.9c8.2,20,10.8,40.8,10.7,62.3c-0.2,94.8-0.1,189.6-0.1,284.5c0,20.3-8.2,32.5-26.6,39.4c-47.6,0-95.3,0-142.9,0c-16.4-5.1-25.6-16.1-26.8-33.2c-0.7-9.2-0.4-18.5-0.5-27.8c-0.1-12,0-23.9,0-36.2c-163.3,0-325.8,0-489.1,0c0,2.6,0,4.9,0,7.1c0,17.1,0.5,34.2-0.2,51.2c-0.3,7.1-2,14.6-4.8,21.2c-4.1,9.5-12.5,14.8-22.3,17.7c-47.6,0-95.3,0-142.9,0c-17.7-6.6-26.6-18.7-26.6-36.8c0-100-0.2-200.1,0.3-300.1c0.1-12.8,3.9-25.6,6.6-38.3c1.3-6.3,4-12.2,6.4-19.2c-12.7,0-24.4,0.1-36.1,0c-7.7-0.1-15.3-1.4-20.5-7.8C13.3,489.7,12,485.4,10,481.6z M818.2,415.4c-15.2-63.5-36.4-123.3-58.6-182.9c-5.1-13.6-13.4-21.6-26-26.9c-22.1-9.3-45.3-14.5-68.9-17c-35.1-3.7-70.4-7.6-105.6-8.5c-78.9-1.9-158-2.6-236.4,9.6c-21,3.3-41.7,7.6-60.8,17.7c-8.4,4.4-15.2,10.4-18.9,19.5c-19.1,47.1-36.2,94.8-49.5,143.9c-3.9,14.5-7.5,29.1-11.3,43.8c1.5,0.6,2.2,1,3,1.3c61.9,17.6,125.4,25.7,189.4,30.3c32.1,2.3,64.4,3.3,96.6,4.2c62.8,1.8,125.6-0.4,188-7.1c36.7-3.9,73.2-10.2,109.6-16.2C785.4,424.2,801.5,419.4,818.2,415.4z M779.8,651.6c0-0.6,0-1.2,0-1.8c17.1,0,34.2,1.2,51.1-0.4c14.2-1.4,28.4-5.1,42.1-9.5c10.4-3.3,17.9-11.1,18.8-23c1.3-19.1,2.3-38.4-3.3-56.9c-1.6-5.3-7.6-11-13-13.3c-15.7-6.7-32.1-4.7-48.1,0.2c-38,11.7-74.1,28.2-109.5,46.3c-9.4,4.8-17.8,11.6-20.8,23.1c-2,7.9-0.8,14.8,3.7,21.2c6.3,8.9,16.2,11.2,26,12C744.4,650.8,762.1,650.9,779.8,651.6z M221.3,652.4c0-0.5,0.1-0.9,0.1-1.4c10.5,0,21.1,0.5,31.6-0.1c12.7-0.7,25.4-0.8,37.8-5.6c10-3.8,16.5-19.9,13.5-29.1c-3.9-11.9-12.4-19.2-22.6-24c-29.1-13.6-58.5-26.6-88.1-38.8c-18.1-7.5-36.8-12.9-57-10.1c-13.1,1.9-24.8,9.5-25.5,23.8c-0.7,15.3-1.9,30.6-2.1,45.9c-0.1,9.9,3.8,19,13.3,23.4c9.6,4.4,19.7,9.1,30,10.5C175.1,649.8,198.3,650.7,221.3,652.4z" />
                  </g>
                </svg>
              </div>

              <div>
                <p>
                  {t(
                    "ApartmentComponents.MostPopularfacilitites.Electric vehicle charging station"
                  )}
                </p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        default:
          break;
      }
    }
  }, []);

  return (
    <>
      <div className="my-4">
        <h5 className="fw-bold">
          {t(
            "ApartmentComponents.MostPopularfacilitites.Most popular facilities"
          )}{" "}
        </h5>
      </div>

      <div className="d-flex align-items-center me-3 flex-wrap">
        {facilities.map((item) => {
          return item;
        })}
      </div>

      <div
        class="alert alert-success border border-success rounded-0 mt-5"
        role="alert"
      >
        <div className="d-flex align-items-center ms-3 p-2">
          <div className="me-2">
            <svg
              fill="#008009"
              height="24"
              role="presentation"
              width="24"
              viewBox="0 0 128 128"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M108 24H20A12 12 0 0 0 8 36v56a12 12 0 0 0 12 12h88a12 12 0 0 0 12-12V36a12 12 0 0 0-12-12zm-88 8h88a4 4 0 0 1 4 4v4H16v-4a4 4 0 0 1 4-4zm88 64H20a4 4 0 0 1-4-4V56h96v36a4 4 0 0 1-4 4zM24 72h48v8H24z"></path>
            </svg>
          </div>
          <div>
            <span className="text-dark">
              {t(
                "ApartmentComponents.MostPopularfacilitites.No credit card needed to book"
              )}
            </span>
          </div>
        </div>
      </div>

      <div
        class="alert alert-success border border-success rounded-0"
        role="alert"
      >
        <div className="d-flex align-items-center ms-3 ">
          <div className="Svg">
            <svg
              fill="#008009"
              height="30"
              width="30"
              viewBox="0 0 128 128"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M104 48H44V36a20 20 0 0 1 36.7-11 4 4 0 1 0 6.6-4.5A28 28 0 0 0 36 36v12H24a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zM64 96a12 12 0 1 1 12-12 12 12 0 0 1-12 12z"></path>
            </svg>
          </div>
          <div>
            <p className="text-dark ms-3">
              {t(
                "ApartmentComponents.MostPopularfacilitites.Lock in a great price for your upcoming stay"
              )}
            </p>
            <p className="text-dark ms-3">
 
              {t(
                "ApartmentComponents.MostPopularfacilitites.Prices may go up, so secure your reservation today"
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
