import React, { useEffect, useState } from "react";
import "./MostPopularFacilities.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function MostPopularFacilities(props) {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    let allFacilities = [];
    for (let Facilities of props.hotel.facilities.popularFacilities) {
      switch (Facilities) {
        case "Free WiFi":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="green"
                  class="bi bi-wifi"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
                  <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z" />
                </svg>
              </div>
              <div>
                <p>{t("HotelPage.MostPopularFacilities.Free Wifi")}</p>
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
                  height="25"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Fitness Center")}</p>
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
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Restaurant")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Room service":
          allFacilities.push(
            <div className="d-flex justify-content-between  ">
              <div className="me-2">
                <svg
                  height="25"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Room service")}</p>
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
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Family Rooms")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Airport shuttle":
          allFacilities.push(
            <div className="d-flex justify-content-between  ">
              <div className="me-2">
                <svg
                  height="25"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Airport shuttle")}</p>
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
                  fill="green"
                  height="25"
                  width="25"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enable-background="new 0 0 1000 1000"
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M29,990V623.4c0,0,250.1,0.2,293.9,0c9.7,0,17.4,8.7,17.4,21.9c0,338,0,344.7,0,344.7H29L29,990z" />
                    <path d="M320,573.7c-60.9,0-233.8,0-291.1,0c0-19.7,0-68.7,0-78.3c17.2-32.5,43.7-51,67.6-23.2c32.8-47.2,63-41,107.8,4.8c26.6-8.8,58.4,0,70.3,49.8C302.1,532.8,320,548.7,320,573.7z" />
                    <path d="M358.5,475.3c-19.6-4.8-50.2,69.6-33.8,40.8c5.2-9.3,18.5-24.4,33.8-26.3c19.8-2.5,24-13.3,44.2-33.2C424.7,434.8,373.1,478.9,358.5,475.3z" />
                    <path d="M318.8,440.3c-19.6-4.8-50.2,69.6-33.8,40.8c5.2-9.3,18.5-24.4,33.8-26.3c19.8-2.5,24-13.3,44.2-33.2C385,399.8,333.4,443.9,318.8,440.3z" />
                    <path d="M279.1,405.3c-19.6-4.8-50.2,69.6-33.8,40.8c5.2-9.3,18.5-24.4,33.8-26.3c19.8-2.5,24-13.3,44.2-33.2C345.2,364.8,293.6,408.9,279.1,405.3z" />
                    <path d="M952.5,580.1H704.2c-6.3,0-15.6,0.8-22.4,7.7c-5.2,5.2-7.7,12.7-7.6,22.9c0.3,32.8,0.1,66.2-0.1,98.4v1c-0.2,36-0.3,73.3,0.1,110c0.1,4.2-0.7,6.5-1.4,7.1c-0.1,0.1-1.3,1.2-6.1,1.2H425.5c-15.7,0-27,12.5-27,29.9v109.7c0,12.1,9.9,22,22,22h12.4c12.1,0,22-9.9,22-22l-0.4-82.9h253.9c12.2,0,22.2-10,22.2-22.2V635.7h221.9c10.2,0,18.6-8.3,18.6-18.6V599C971,588.5,962.7,580.1,952.5,580.1z" />
                    <path d="M506.3,479.4c5-2.4,10.2-4.6,17.9-8.1c0,9.6,0,16,0,22.3c0,85.2,1.1,170.3-0.7,255.5c-0.5,25.4,8.6,42.8,26.5,57.9c9.7,8.3,32.1,10.3,41.5,2.5c14.9-12.4,25.2-26.8,24.9-48.2c-0.8-63.9-0.2-127.7-0.2-191.6c0-5.8,0-11.5,0-19.2c46.1,9,89.7,20.9,133.3,29.4h150c6.3-5.7,8.8-7.6,11.2-9.9c38-34,44.7-61.4,24.1-108.7c-19.6-44.8-40.9-88.9-61.2-133.4c-17.6-38.7-35.7-77.3-51.8-116.6c-15.3-37.4-46.4-45.7-81.4-47.4c-34.3-1.7-58.8,12.9-73.2,44.8c-17.6,39.1-37.6,77.2-54,116.7c-9.1,21.9-26.1,39.7-47.7,49.6c-30.6,14-60.2,30.1-89.8,46.1c-18.3,9.8-24.6,29.1-16.1,45C469.2,484.3,486.2,489.1,506.3,479.4z M654.5,398.5c16.9-19.2,25.3-45.9,39.5-73.3c22.6,53.2,43.6,102.8,67,158.1c-60.9-13.3-116.7-25.4-172.8-37.6C611.9,429.3,637.5,417.7,654.5,398.5z" />
                    <path d="M660.9,145.6c35.6-0.6,65.1-32.6,64.9-70.2c-0.2-35.7-31.6-66-67.6-65.4c-35.4,0.6-64.9,30.9-64.4,66.2C594.2,115.2,624.2,146.2,660.9,145.6z" />
                    <path d="M901,195.6c11.7-10.5,4.7-21.1-5.5-27.5c-14-8.8-45.9-20.4-46.9-18.9c8.4,13.2,16.1,27,25.5,39.4C880.6,197.1,890.4,205.1,901,195.6z" />
                    <path d="M482.9,183.2c12.8,3.2,17.8-6.1,19.4-17.2c2.3-15.6,4.3-31.2,6.5-48c-18.7,11.6-30.7,23.5-38,40C466.5,167.8,469.7,180,482.9,183.2z" />
                    <path d="M591.7,272.3c5.4-0.8,12.9-12,13.1-18.8c0.5-15.4-2.8-30.9-4.9-49c-15.8,14.2-22.4,30-23.2,48.8C576.2,264.5,580.7,273.9,591.7,272.3z" />
                    <path d="M887,693.1c1.1,13,1.9,24.9,4.6,36.4c1,4.1,5.1,9.5,10.8,10.2c3.9,0.5,10.4,0.7,12.5-2.1c3.8-5.1,4.3-9.1,3.6-13.5C916.5,709.7,886.6,687.2,887,693.1z" />
                  </g>
                </svg>
              </div>
              <div>
                <p>{t("HotelPage.MostPopularFacilities.Sauna")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Water park":
          allFacilities.push(
            <div className="d-flex justify-content-between">
              <div className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Water Park")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Swimming pool":
          allFacilities.push(
            <div className="d-flex justify-content-between  mt-3">
              <div className="me-2">
                <svg
                  height="25"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Swimming pool")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Spa":
          allFacilities.push(
            <div className="d-flex justify-content-between mt-3">
              <div className="me-2">
                <svg
                  height="25"
                  width="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Spa")}</p>
              </div>
            </div>
          );
          setFacilities(allFacilities);
          break;
        case "Air conditioning":
          allFacilities.push(
            <div className="d-flex justify-content-between   mt-3">
              <div className="me-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
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
                <p>{t("HotelPage.MostPopularFacilities.Air conditioning")}</p>
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
          {t("HotelPage.MostPopularFacilities.Most popular facilities")}{" "}
        </h5>
      </div>

      <div className="d-flex align-items-center me-3 flex-wrap">
        {facilities.map((item) => {
          return (
            <div className="d-flex align-items-center me-3 flex-wrap">
              {item}
            </div>
          );
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
              <b>
                {t(
                  "HotelPage.MostPopularFacilities.No credit card needed to book."
                )}
              </b>{" "}
              {t(
                "HotelPage.MostPopularFacilities.We'll send you an email confirming your reservation"
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
                "HotelPage.MostPopularFacilities.Lock in a great price for your upcoming stay"
              )}
            </p>
            <p className="text-dark ms-3">
              {t(
                "HotelPage.MostPopularFacilities.Prices may go up, so secure your reservation today"
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
