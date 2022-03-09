import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../Redux/network";
import "./ExploerEgypt.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function ExploerEgypt() {
  const [portsaid, setPortsaid] = useState();
  const [marsaalam, setMarsaalam] = useState();
  const [aswan, setAswan] = useState();
  const [ainsokhna, setAinsokhna] = useState();
  const [dahab, setDahab] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  useEffect(() => {
    axiosInstance.get("/filter/search/hotel/egypt/portsaid").then((result) => {
      if (result.data.success) setPortsaid(result.data.data);
    });
    axiosInstance.get("/filter/search/hotel/egypt/marsaalam").then((result) => {
      if (result.data.success) {
        setMarsaalam(result.data.data);
      }
    });
    axiosInstance.get("/filter/search/hotel/egypt/aswan").then((result) => {
      if (result.data.success) setAswan(result.data.data);
    });
    axiosInstance.get("/filter/search/hotel/egypt/ainsokhna").then((result) => {
      if (result.data.success) setAinsokhna(result.data.data);
    });
    axiosInstance.get("/filter/search/hotel/egypt/dahab").then((result) => {
      if (result.data.success) setDahab(result.data.data);
    });
  }, []);
  return (
    <>
      <div className="container py-4 ">
        <h3 className="">{t("Home.ExploreEgypt.Explore Egypt")}</h3>
        <h6 className="mb-4 text-muted">
          {t("Home.ExploreEgypt.hese popular destinations have a lot to offer")}
        </h6>
        <div className="d-flex justify-content-between flex-column flex-md-row">
          <div className="card border-0 mb-3 mx-auto CustomStyle">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/691353.webp?k=878cf98fab1232e95def135008bf96a8b3576a24c2aa0d9d6cb9ed828eefefc8&o="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p className="card-title fw-bold">
                {t("Home.ExploreEgypt.Ain Sokhna")}
              </p>
              {ainsokhna && (
                <p className="card-text text-muted">
                  {ainsokhna.length} {t("Home.ExploreEgypt.hotels")}
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomStyle">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/644433.webp?k=89cfcf202975aed2abbc6e79faf2306142982cf3731e63c006b0226016220e4b&o="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body my-2 p-0  ">
              <p className="card-title fw-bold">
                {t("Home.ExploreEgypt.Dahab")}
              </p>
              {dahab && (
                <p className="card-text text-muted">
                  {dahab.length} {t("Home.ExploreEgypt.hotels")}
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomStyle">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/644374.webp?k=0a4114616869f8e84e94b5c4c6a3a3026537b8ca4da90d3aa9945a9f2b14b45f&o="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p className="card-title fw-bold">
                {t("Home.ExploreEgypt.Aswan")}
              </p>
              {aswan && (
                <p className="card-text text-muted">
                  {aswan.length} {t("Home.ExploreEgypt.hotels")}
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomStyle">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/826916.webp?k=6b661368fe5ee0470d7f8e64c05e0766fa51d0f4d721ed77cf43c982dad46a5b&o="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p className="card-title fw-bold">
                {t("Home.ExploreEgypt.Port said")}
              </p>
              {portsaid && (
                <p className="card-text text-muted">
                  {portsaid.length} {t("Home.ExploreEgypt.hotels")}
                </p>
              )}
            </div>
          </div>
          <div className="card border-0 mb-3 mx-auto CustomStyle">
            <img
              src="https://cf.bstatic.com/xdata/images/region/square250/72401.webp?k=fa4db1a16d306784e042cd0e4ac2fa9d1b41ee2a58c51fabe868cc71bde4738c&o="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body my-2 p-0 ">
              <p className="card-title fw-bold">
                {t("Home.ExploreEgypt.Marsa alam")}
              </p>
              {marsaalam && (
                <p className="card-text text-muted">
                  {marsaalam.length} {t("Home.ExploreEgypt.hotels")}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
