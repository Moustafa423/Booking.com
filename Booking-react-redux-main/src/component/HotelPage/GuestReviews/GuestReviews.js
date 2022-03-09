import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./GuestReviews.css";
import ReviewCanavas from "../ReviewCanavas/ReviewCanavas";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
export default function GuestReviews(props) {
  let [hotel, setHotel] = useState(props.hotel);
  const [reviewScore, setReviewScore] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    if (hotel.avgReviews >= 1 && hotel.avgReviews <= 3) {
      setReviewScore("bad");
      props.setReviews("bad");
    } else if (hotel.avgReviews > 3 && hotel.avgReviews <= 6) {
      setReviewScore("good");
      props.setReviews("good");
    } else if (hotel.avgReviews > 6 && hotel.avgReviews <= 8) {
      setReviewScore("very good");
      props.setReviews("very good");
    } else if (hotel.avgReviews > 8 && hotel.avgReviews <= 10) {
      setReviewScore("excellent");
      props.setReviews("excellent");
    }
  }, []);

  return (
    <>


    
      <div className="mt-5">
        <div className="my-3">
          <h5 className="fw-bold" id="idReviews">
            {t("HotelPage.GuestReviews.Guest reviews")}
          </h5>
        </div>

        <div>
          <div className="d-flex">
            <span class="badge-rating me-2">
              {" "}
              {hotel.avgReviews.toString().split("").splice(0, 3).join("")}{" "}
            </span>
            {reviewScore && reviewScore}
            <span className="text-secondary fw-bold ms-2">
              {hotel.totalReviews} {t("HotelPage.GuestReviews.Reviews")}{" "}
              <a onClick={handleShow} className="cursor-pointer">
                {t("HotelPage.GuestReviews.Read all reviews")}
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
                      {hotel.totalReviews} {t("HotelPage.GuestReviews.Reviews")}{" "}
                    </span>
                  </div>
                  <div class="p-2 flex-shrink-1">
                    <span class="badge-rating">
                      {hotel.avgReviews
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
