import { useEffect, useState } from "react";
import { axiosInstance } from "../../Redux/network";

import * as React from "react";

import "./style.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

export default function Reviews() {
  let [userReviews, setUserReviews] = useState();
  let [revs, setRevs] = useState();

  useEffect(() => {
    axiosInstance.get("filter/review").then(
      (result) => {
        setUserReviews(result.data.data);
        let arr = [];
        if (
          result.data.data.hotels.length == 0 &&
          result.data.data.apartments.length == 0 &&
          result.data.data.campgrounds.length == 0
        ) {
          setRevs(false);
        } else {
          setRevs(true);
        }
      },
      (err) => {
        console.log("error yabasha");
      }
    );
  }, []);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return revs ? (
    <div className="mt-3">
      <div>
        <h5 className="ms-5">
          {t("UserDashBoard.Reviews.Hotels Reviews")} (
          {userReviews && userReviews.hotels.length})
        </h5>
        {userReviews &&
          userReviews.hotels.map((prop, index) => {
            let star = [];
            for (let i = 0; i < prop.review.starRating; i++) {
              star.push(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              );
            }
            let createdAt = new Date(prop.review.createdAt);

            return (
              <div>
                <div className="row card-body bg-seconary m-3">
                  <div className="col-sm-4 d-lg-flex">
                    <img
                      className=" col-lg-6 col-md-8 col-sm-12 rev-img"
                      src={prop.hotelImg}
                    />

                    <div className="ms-2 mt-1">
                      <div className="fw-bold ">{prop.hotelName}</div>
                      <div className="star ">{star}</div>
                    </div>
                  </div>
                  <div className="rev-body col-md-8 mt-4">
                    <p>{prop.review.body}</p>
                    <span className="text-muted FontSize">
                      {" "}
                      {createdAt.toDateString()}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
      <h5 className="ms-5">
        {t("UserDashBoard.Reviews.Apartments Reviews")}(
        {userReviews && userReviews.apartments.length})
      </h5>

      <div>
        {userReviews &&
          userReviews.apartments.map((prop, index) => {
            let star = [];
            for (let i = 0; i < prop.review.starRating; i++) {
              star.push(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              );
            }
            let createdAt = new Date(prop.review.createdAt);

            return (
              <div>
                <div className="row card-body bg-seconary m-3">
                  <div className="col-sm-4 d-lg-flex">
                    <img
                      className=" col-lg-6 col-md-8 col-sm-12 rev-img"
                      src={prop.apartmentImg}
                    />

                    <div className="ms-2 mt-1 ">
                      <div className="fw-bold ">{prop.apartmentName}</div>
                      <div className="star ">{star}</div>
                    </div>
                  </div>
                  <div className="rev-body col-md-8 mt-4">
                    <p>{prop.review.body}</p>
                    <span className="text-muted FontSize">
                      {" "}
                      {createdAt.toDateString()}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>

      <h5 className="ms-5">
        {t("UserDashBoard.Reviews.Campgrounds Reviews")}(
        {userReviews && userReviews.campgrounds.length})
      </h5>

      <div>
        {userReviews &&
          userReviews.campgrounds.map((prop, index) => {
            let star = [];
            for (let i = 0; i < prop.review.starRating; i++) {
              star.push(
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              );
            }
            let createdAt = new Date(prop.review.createdAt);

            return (
              <div>
                <div className="row card-body bg-seconary m-3">
                  <div className="col-sm-4 d-lg-flex">
                    <img
                      className=" col-lg-6 col-md-8 col-sm-12 rev-img"
                      src={prop.campgroundImg}
                    />

                    <div className="ms-2 mt-1 ">
                      <div className="fw-bold ">{prop.campgroundName}</div>
                      <div className="star ">{star}</div>
                    </div>
                  </div>
                  <div className="rev-body col-md-8 mt-4">
                    <p>{prop.review.body}</p>
                    <span className="text-muted FontSize">
                      {" "}
                      {createdAt.toDateString()}
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div class="d-flex py-5 my-5 justify-content-lg-center align-items-center flex-column">
       
      <svg
        data-test-id="default-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="70px"
        fill="#888888"
        height="70px"
        className="bui-empty-state__icon"
      >
         
        <path d="M13.629 22.5H2.25a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v11.379a.75.75 0 0 1-.22.53L14.16 22.28a.75.75 0 0 1-.53.219zm0 1.5a2.25 2.25 0 0 0 1.59-.659l8.122-8.122A2.25 2.25 0 0 0 24 13.63V2.25A2.25 2.25 0 0 0 21.75 0H2.25A2.25 2.25 0 0 0 0 2.25v19.5A2.25 2.25 0 0 0 2.25 24h11.379zM15 23.115V15.75a.75.75 0 0 1 .75-.75h7.365a.75.75 0 0 0 0-1.5H15.75a2.25 2.25 0 0 0-2.25 2.25v7.365a.75.75 0 0 0 1.5 0z">
           {" "}
        </path>
         
      </svg>
        {" "}
      <h4 className="my-4 text-muted">
        {t("UserDashBoard.Reviews.No Reviews")}
      </h4>{" "}
    </div>
  );
}
