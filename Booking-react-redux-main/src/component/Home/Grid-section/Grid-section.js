import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../Redux/network";
import "./Grid-section.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function Gridsection() {
  const [sharmHotels, setSharmHotels] = useState();
  const [alamainHotels, setAlamainHotels] = useState();
  const [hurghadaHotels, setHurghadaHotels] = useState();
  const [alexHotels, setAlexHotels] = useState();
  const [cairoHotels, setCairoHotels] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    axiosInstance.get("/filter/search/hotel/Egypt/Luxor").then((result) => {
      if (result.data.success) {
        setAlamainHotels(result.data.data);
      }
    });
    axiosInstance.get("/filter/search/hotel/Egypt/Hurghada").then((result) => {
      if (result.data.success) setHurghadaHotels(result.data.data);
    });
    axiosInstance
      .get("/filter/search/hotel/Egypt/Alexandria")
      .then((result) => {
        if (result.data.success) setAlexHotels(result.data.data);
      });
    axiosInstance.get("/filter/search/hotel/Egypt/Cairo").then((result) => {
      if (result.data.success) setCairoHotels(result.data.data);
    });
  }, []);
  return (
    <>
      <div className="container my-3">
        <div className="grid-images">
          <div className="row d-flex flex-wrap">
            <div className="col-lg-6 col-12  position-relative  ">
              <div className="unified-postcard__header first-img-row">
                <h3>
                  <a href="">
                    {t("Home.Grid-section.Sharm El Shiekh")}
                    <img
                      src="https://cf.bstatic.com/static/img/flags/24/eg/94c2ce480065a13673761094eee3253d71aaf5df.png"
                      alt="Egypt"
                      valign="middle"
                    />
                  </a>
                </h3>
                {sharmHotels && (
                  <p>
                    {" "}
                    {sharmHotels.length} {t("Home.Grid-section.Hotels")}
                  </p>
                )}
              </div>
              <img
                className="grid-country-img w-100 mb-4"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/8_A_resort_in_Sharm_El_Sheikh.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12  position-relative ">
              <div className="unified-postcard__header first-img-row">
                <h3>
                  <a href="">
                    {t("Home.Grid-section.Al almain")}
                    <img
                      className="ms-2"
                      src="https://cf.bstatic.com/static/img/flags/24/eg/94c2ce480065a13673761094eee3253d71aaf5df.png"
                      alt="Egypt"
                      valign="middle"
                    />
                  </a>
                </h3>
                {alamainHotels && (
                  <p>
                    {" "}
                    {alamainHotels.length} {t("Home.Grid-section.Hotels")}
                  </p>
                )}
              </div>
              <img
                className="grid-country-img w-100 mb-4"
                src="https://almalnews.com/wp-content/uploads/2019/08/Alalameen.png"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-3 position-relative secound-img-row ">
              <div className="unified-postcard__header secound-img-row">
                <h3>
                  <a href="">
                    {t("Home.Grid-section.Hurghada")}
                    <img
                      className="ms-2"
                      src="https://cf.bstatic.com/static/img/flags/24/eg/94c2ce480065a13673761094eee3253d71aaf5df.png"
                      alt="Egypt"
                      valign="middle"
                    />
                  </a>
                </h3>
                {hurghadaHotels && (
                  <p>
                    {" "}
                    {hurghadaHotels.length} {t("Home.Grid-section.Hotels")}
                  </p>
                )}
              </div>
              <img
                className="grid-country-img2 w-100 mb-4"
                src="https://tourflag.com/wp-content/uploads/%D9%85%D9%86%D8%AA%D8%AC%D8%B9%D8%A7%D8%AA-%D8%B5%D9%86%D9%8A-%D8%AF%D8%A7%D9%8A%D8%B2-%D8%A7%D9%84%D8%A8%D9%84%D8%A7%D8%B3%D9%8A%D9%88-1.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-12 position-relative secound-img-row">
              <div className="unified-postcard__overlay">
                <div className="unified-postcard__header secound-img-row">
                  <h3>
                    <a href="">
                      {t("Home.Grid-section.Alexandria")}
                      <img
                        className="ms-2"
                        src="https://cf.bstatic.com/static/img/flags/24/eg/94c2ce480065a13673761094eee3253d71aaf5df.png"
                        alt="Egypt"
                        valign="middle"
                      />
                    </a>
                  </h3>
                  {alexHotels && (
                    <p>
                      {" "}
                      {alexHotels.length} {t("Home.Grid-section.Hotels")}
                    </p>
                  )}
                </div>
                <img
                  className="grid-country-img2 w-100 mb-4 secound-img-row"
                  src="https://images.memphistours.com/large/42fdf09a747ff19d3e2e64928cdd23cb.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-12 position-relative">
              <div className="unified-postcard__overlay">
                <div className="unified-postcard__header secound-img-row">
                  <h3>
                    <a href="">
                      {t("Home.Grid-section.Cairo")}
                      <img
                        className="ms-2"
                        src="https://cf.bstatic.com/static/img/flags/24/eg/94c2ce480065a13673761094eee3253d71aaf5df.png"
                        alt="Egypt"
                        valign="middle"
                      />
                    </a>
                  </h3>
                  {cairoHotels && (
                    <p>
                      {" "}
                      {cairoHotels.length} {t("Home.Grid-section.Hotels")}
                    </p>
                  )}
                </div>
              </div>
              <img
                className="grid-country-img2 w-100 mb-4"
                src="https://media.istockphoto.com/photos/mosque-and-pyramids-picture-id1174818077?k=20&m=1174818077&s=612x612&w=0&h=vAutxzWDTokCJkf6010sguiHP6yc8Nzt8qePG9DEew0="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
