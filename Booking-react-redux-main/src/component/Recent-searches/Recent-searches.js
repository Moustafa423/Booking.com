import React from "react";
import "./Recent-searches.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

export default function Recentsearches() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      {/* start covid  */}
      <section className="my-5">
        <div className="container">
          <div className="card d-flex align-content-center">
            <div className="card-body    d-flex align-items-center">
              <span className="coronavirus-banner__icon">
                <svg
                  className="bk-icon -streamline-info_sign"
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
                </svg>
              </span>
              <span>
                {t(
                  "Recent-searches.Get the advice you need. Check the latest COVID-19 restrictions before you travel."
                )}{" "}
                <a href="">{t("Recent-searches.Learn more")}</a>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* end covid */}

      {/* start recent search   */}
      <section>
        <div className="container recent-section">
          <h3>{t("Recent-searches.Your Recent Searches")}</h3>
          <ul className="d-flex my-3  justify-content-between flex-column flex-md-row">
            <li className="mx-auto me-md-3 w-100">
              <div className="card card-div mb-3 px-2 ">
                <div className="row g-0 justify-content-evenly align-items-center">
                  <div className="col-md-3 col-lg-2 col-1 ">
                    <img
                      src="https://cf.bstatic.com/xdata/images/city/square100/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
                      className="img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <div className="card-body  ">
                      <p className="card-title recent-title">
                        {t("Recent-searches.Card title")}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {t("Recent-searches.Last updated 3 mins ago")}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-auto me-md-3 w-100">
              <div className="card card-div mb-3 px-2 ">
                <div className="row g-0 justify-content-evenly align-items-center">
                  <div className="col-md-3 col-lg-2 col-1">
                    <img
                      src="https://cf.bstatic.com/xdata/images/city/square100/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
                      className="img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <div className="card-body  ">
                      <p className="card-title recent-title ">
                        {t("Recent-searches.Card title")}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {t("Recent-searches.Last updated 3 mins ago")}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mx-auto  w-100">
              <div className="card card-div mb-3 px-2 ">
                <div className="row g-0 justify-content-evenly align-items-center">
                  <div className="col-md-3 col-lg-2 col-1">
                    <img
                      src="https://cf.bstatic.com/xdata/images/city/square100/613095.webp?k=8caf960d96a59e284ac1518ac8777e89d17fda6572acd84dbec151f627c7bf07&o="
                      className="img-fluid rounded"
                      alt="..."
                    />
                  </div>
                  <div className="col-9">
                    <div className="card-body  ">
                      <p className="card-title recent-title">
                        {t("Recent-searches.Card title")}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          {t("Recent-searches.Last updated 3 mins ago")}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* end recent  */}
    </>
  );
}
