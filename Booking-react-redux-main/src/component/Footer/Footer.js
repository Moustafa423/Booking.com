import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";
export default function Footer() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <footer className="row mx-auto">
        <div className="footer-search d-flex flex-column justify-content-center align-items-center">
          <h3>{t("Footer.Save time, save money!")}</h3>
          <p className="text-muted">
            {t("Footer.Sign up and we'll send the best deals to you")}
          </p>
          <div>
            <div className="input-group">
              <div className="form-outline mx-md-2 mx-auto">
                <input
                  type="search"
                  placeholder={t("Footer.Your Email")}
                  className="form-control footer-btn-search "
                />
              </div>
              <a
                href="#"
                className="btn btn-primary btn-lg rounded-2 mx-auto mx-md-2 "
                tabIndex="-1"
                role="button"
                aria-disabled="true"
              >
                {t("Footer.Search")}
              </a>
            </div>
            <div className="form-check form-check-inline mx-2 my-2 fs-6">
              <input
                className="form-check-input "
                type="checkbox"
                id="inlineCheckbox2"
                value="option2"
              />
              <label className="form-check-label " htmlFor="inlineCheckbox2">
                {" "}
                {t("Footer.Send me a link to get the FREE Booking.com app!")}
              </label>
            </div>
          </div>
        </div>
        <div className="bg-primary_color d-flex justify-content-center border-bottom border-light">
          <div className="nav-item list-property my-3">
            <div>
              <a className="nav-link active " aria-current="page" href="#">
                {t("Footer.List your property")}
              </a>
            </div>
          </div>
        </div>

        <div className="container bg-primary_color">
          <ul className="d-flex footer-ul my-2">
            <li className="mx-2">
              <a href=""> {t("Footer.Mobile version")}</a>
            </li>
            <li className="mx-2">
              <a href="">{t("Footer.Manage your booking")}</a>
            </li>
            <li className="mx-2">
              <a href="">{t("Footer.Contact Customer Service")}</a>
            </li>
            <li className="mx-2">
              <a href="">{t("Footer.Become an affiliate")}</a>
            </li>
            <li className="mx-2">
              <a href="">{t("Footer.Booking.com for Business")}</a>
            </li>
          </ul>
        </div>
        <div className="d-lg-block d-none">
          <div className="d-flex footer-list my-3">
            <div className="mx-5">
              <ul>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
              </ul>
            </div>
            <div className="mx-5">
              <ul>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
              </ul>
            </div>
            <div className="mx-5">
              <ul>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
              </ul>
            </div>
            <div className="mx-5">
              <ul>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
              </ul>
            </div>
            <div className="mx-5">
              <ul>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
                <li>{t("Footer.Countries")}</li>
                <li>{t("Footer.Homes")}</li>
              </ul>
            </div>
          </div>
          <div className="text-center my-4 font-third_color fw-bold">
            <p>{t("Footer.Extranet login")}</p>
          </div>
          <div className="container ms-5 w-50 my-2">
            <p className="copy-rights text-muted">
              {t(
                "Footer.Copyright ©️ 1996–2021 Booking.com™️. All rights reserved."
              )}
            </p>
          </div>
          <div className="d-flex justify-content-center my-2">
            <p className="copy-rights text-muted ">
              {t(
                "Footer.Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services."
              )}
            </p>
          </div>
          <div className="footer-images d-flex justify-content-center">
            <ul className="d-flex justify-content-evenly">
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
