import React, { useEffect, useState } from "react";
import "./HomesGustesLove.css";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../../Redux/actions/hotel";
import { axiosInstance } from "../../../Redux/network";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function HomesGustesLove(props) {
  const [properties, setProps] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    axiosInstance
      .get("filter/property/" + props.prop + "/avgRating/dec")
      .then((result) => {
        if (result.data.success) {
          setProps(result.data.data.splice(0, 4));
        }
      });
  }, []);

  return (
    <>
      <div className="container py-4 ">
        <h3 className="mb-4">
          {props.prop}s {t("Home.HomeGustesLove.guests love")}
        </h3>
        <div className="d-flex justify-content-between flex-column  flex-md-row">
          {properties &&
            properties.map((item, index) => {
              return (
                <div key={index} className="card border-0 mb-3 mx-2 CustomImg">
                  <img
                    className="h-75 rounded-2 loveImg"
                    src={item.images[0]}
                    className="loveImg"
                    alt="..."
                  />
                  <div className="card-body my-2 p-0  ">
                    <Link
                      className="text-decoration-none "
                      to={"/" + props.prop + "s/" + item._id}
                    >
                      <p className="card-title text-muted mb-0">
                        {localStorage.getItem("i18nextLng")=="ar"?item[props.prop + "NameAR"]:item[props.prop + "Name"]}
                      </p>
                    </Link>
                    <p className="card-text text-muted mb-2">{localStorage.getItem("i18nextLng")=="ar"?item.countryAR:item.country}</p>

                    <div className="d-flex justify-content-between align-items-center w-75">
                      <span className=" bg-primary_color badge-rating ">
                        {item.avgReviews}
                      </span>{" "}
                      <span className="text-muted number-reviews">
                        {item.totalReviews} {t("Home.HomeGustesLove.reviews")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
