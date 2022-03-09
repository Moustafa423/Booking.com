import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import { useNavigate } from "react-router-dom";
import "./GetInspiration.css";

export default function GetInspiration() {
  const navigate = useNavigate();
 const { t, i18n } = useTranslation();
 function handleClick(lang) {
   i18n.changeLanguage(lang);
 }

  return (
    <>
      <div className="container">
        <div className="grid-images">
          <div className="row">
            <div className="col-lg-4 col-12 position-relative">
              <img
                className="grid-country-img w-100 inspiration-img rounded-1"
                src="https://cf.bstatic.com/xdata/images/xphoto/700x350/123807895.webp?k=4a027e6bbbce887f4f9a7441a3efd6e033cc6ef6474481566ab6e9ca5f0ca191&o="
                alt=""
              />

              <p
                onClick={() => navigate("/BestCoffee")}
                className=" custtomClass  text-light
                   "
              >
                {t("Home.GetInspiration.Best Coffee Cities in the US")}

                <p className="fs-6 Span">
                  {t(
                    "Home.GetInspiration.Whether you like a basic brew or larger-than-life latte, here are five of the best."
                  )}
                </p>
              </p>
            </div>
            <div className="col-lg-4 col-12 position-relative">
              <img
                className="grid-country-img w-100 inspiration-img rounded-1"
                src="https://cf.bstatic.com/xdata/images/xphoto/540x405/123806704.webp?k=ee390765951cff7caf2b05e61c8f56ab3f8a5c2b689279616cc8f94fb81184be&o="
                alt=""
              />
              <p
                onClick={() => navigate("/LasVegas")}
                className="  custtomClass text-light"
              >
                {t("Home.GetInspiration.Las Vegas Beyond the Casinos")}
                <p className="fs-6 Span">
                  {t(
                    "Home.GetInspiration.In Las Vegas, gambling isn’t the only way to hit the jackpot."
                  )}
                </p>
              </p>
            </div>
            <div className="col-lg-4 col-12 position-relative">
              <img
                className="grid-country-img w-100 inspiration-img rounded-1"
                src="https://cf.bstatic.com/xdata/images/xphoto/540x405/122925057.webp?k=09f14b17546723a74f3c71cc9d5e5040e60c1594234b5a06cc3ce376ad299da5&o="
                alt=""
              />
              <p
                onClick={() => navigate("/Yoga")}
                className="custtomClass text-light"
              >
                {t("Home.GetInspiration.5 soulful yoga retreat destinations")}

                <p className="fs-6 Span">
                  {t(
                    "Home.GetInspiration.ver the past year, many people have sought refuge in the peaceful practice of yoga."
                  )}
                </p>
              </p>
            </div>
            <div className="col-lg-6 col-12  position-relative">
              <img
                className="grid-country-img w-100 inspiration-img rounded-1"
                src="https://cf.bstatic.com/xdata/images/hotel/max500/121406433.jpg?k=35435a71d5387f6a42b598d421231b63f0a4c3f1886d9734e6e669e0576cbb3d&o="
                alt=""
              />
              <p
                onClick={() => navigate("/Destination")}
                className="  custtomClass text-light"
              >
                {t(
                  "Home.GetInspiration.Destination Inspiration San Juan, Puerto Rico"
                )}
                <p className="fs-6 Span">
                  {t(
                    "Home.GetInspiration.Worlds collide in San Juan, Puerto Rico’s vibrant capital, a simmering melting pot of indigenous, European, American."
                  )}
                </p>
              </p>
            </div>
            <div className="col-lg-6 col-12  position-relative">
              <img
                className="grid-country-img w-100 inspiration-img rounded-1"
                src="https://cf.bstatic.com/xdata/images/city/540x270/693535.webp?k=39f09e1a64b76dc38b82fae5e51dd9728a68c06b8a0a26c2e6254a80eb792e72&o="
                alt=""
              />
              <p
                onClick={() => navigate("/Unmissable")}
                className="   custtomClass text-light 
               
                  "
              >
                {t("Home.GetInspiration.unmissable hot air balloon rides")}

                <p className="fs-6 Span">
                  {t(
                    "Home.GetInspiration.Peaceful yet full of adventure, experiencing a view by hot air balloon has to be the most scenic way to take it all in. Next time you take a trip."
                  )}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
