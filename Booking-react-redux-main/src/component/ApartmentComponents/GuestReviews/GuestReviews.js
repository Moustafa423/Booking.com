import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./GuestReviews.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import ReviewCanavas from "../GuestReviews/ReviewCanavas/ReviewCanavas";
export default function GuestReviews(props) {
  let [apartment, setApartment] = useState(props.apartment);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [reviewScore, setReviewScore] = useState();
 const { t, i18n } = useTranslation();
 function handleClick(lang) {
   i18n.changeLanguage(lang);
 }
  useEffect(() => {
      if (apartment.avgReviews.toString().split('').splice(0,3).join('') >= 1 && apartment.avgReviews.toString().split('').splice(0,3).join('') <= 3) {
        setReviewScore("bad");
        props.setReviews("bad");
      } else if (apartment.avgReviews.toString().split('').splice(0,3).join('') > 3 && apartment.avgReviews.toString().split('').splice(0,3).join('') <= 6) {
        setReviewScore("good");
        props.setReviews("good");
      } else if (apartment.avgReviews.toString().split('').splice(0,3).join('') > 6 && apartment.avgReviews.toString().split('').splice(0,3).join('') <= 8) {
        setReviewScore("very good");
        props.setReviews("very good");
      } else if (apartment.avgReviews.toString().split('').splice(0,3).join('') > 8 && apartment.avgReviews.toString().split('').splice(0,3).join('') <= 10) {
        setReviewScore("excellent");
        props.setReviews("excellent");
      }
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="my-3">
          <h5 className="fw-bold" id="idReviews">
            {t("ApartmentComponents.GuestReviews.Guest reviews")}
          </h5>
        </div>

        <div>
          <div className="d-flex">
            <span class="badge-rating me-2">
              {" "}
              {apartment.avgReviews
                .toString()
                .split("")
                .splice(0, 3)
                .join("")}{" "}
            </span>
            {reviewScore && reviewScore}
            <span className="text-secondary fw-bold ms-2">
              {apartment.totalReviews}{" "}
              {t("ApartmentComponents.GuestReviews.Reviews")}{" "}
              <a onClick={handleShow} className="cursor-pointer">
                {t("ApartmentComponents.GuestReviews.Read all reviews")}
              </a>
            </span>
          </div>

          <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div class="d-flex">
                  <div class="p-2 w-100">
                    {" "}
                    <span>
                      {apartment.totalReviews}
                      {t("ApartmentComponents.GuestReviews.Reviews")}{" "}
                    </span>
                  </div>
                  <div class="p-2 flex-shrink-1">
                    <span class="badge-rating">
                      {apartment.avgReviews
                        .toString()
                        .split("")
                        .splice(0, 3)
                        .join("")}
                    </span>
                  </div>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ReviewCanavas />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
