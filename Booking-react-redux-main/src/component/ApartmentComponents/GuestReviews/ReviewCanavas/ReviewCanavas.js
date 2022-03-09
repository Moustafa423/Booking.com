import React, { useEffect, useState } from "react";
 import { axiosInstance } from "../../../../Redux/network";
import "./ReviewCanavas.css";
import { Rating } from "react-simple-star-rating";
import { Card, Form, Modal } from "react-bootstrap";
import "animate.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack"; 
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18next";
export default function ReviewCanavas() {
  
  const [review, setReview] = useState();
    const [msg, setMsg] = useState(false);
      const [reviews, setReviews] = useState({});
  const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);
  const { id } = useParams();
 const { t, i18n } = useTranslation();
 function handleClick(lang) {
   i18n.changeLanguage(lang);
 }
  useEffect(() => {
    axiosInstance
      .get("apartment/review/" + id)
      .then((result) => {
        setReview(result.data.data.reverse());
      
      });
  }, []);

   const handleRating = (rate = 0) => {
     setRating(rate);
   };
    const leaveReview = () => {
      // console.log(reviews.starRating);
      if (!reviews.starRating){
      reviews.starRating = rating / 20;   
      }  
      axiosInstance
        .post("apartment/review/" + id, reviews)
        .then((result) => {
          if (!result.data.success) {
            alert(result.data.msg);
          } else {
            setMsg(true);
            setTimeout(() => {
              setMsg(false);
            }, 3000);
          }

          axiosInstance
            .get("apartment/review/" + id)
            .then((result) => {
              setReview(result.data.data.reverse());
            });
        });
    };
    
  const onChange = (e) => {
    setReviews({ ...reviews, [e.target.name]: e.target.value });
    console.log(reviews);
  };
  return (
    <div className="containr-fluid">
      <div className="my-3">
        {" "}
        <div className="text-center">
          <Button
            onClick={() => setShow(true)}
            color="info"
            variant="outlined"
            size="small"
          >
            {" "}
            {t("ApartmentComponents.GuestReviews.ReviewCanavas.Leave Review")}
          </Button>
        </div>
        {msg && (
          <Stack
            sx={{ width: "100%" }}
            spacing={2}
            className="my-5 animate__animated animate__slideInLeft"
          >
            <Alert variant="filled" severity="success">
              {t(
                "ApartmentComponents.GuestReviews.ReviewCanavas.Thank you for your review"
              )}
            </Alert>
          </Stack>
        )}
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <h6 className="mt-2 fw-bold">
            {t(
              "ApartmentComponents.GuestReviews.ReviewCanavas.Please leave a review and say what your opinion about this apartment"
            )}
          </h6>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              {t(
                "ApartmentComponents.GuestReviews.ReviewCanavas.Type your review here"
              )}
            </Form.Label>
            <Form.Control
              name="body"
              as="textarea"
              rows={5}
              onChange={onChange}
            />
          </Form.Group>
          <div className="text-center">
            {t("ApartmentComponents.GuestReviews.ReviewCanavas.Rate by star")}
            <Rating
              className="my-3"
              onClick={handleRating}
              ratingValue={rating}
              name="starRating"
            />
          </div>

          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                setShow(false);
                leaveReview();
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              {t(
                "ApartmentComponents.GuestReviews.ReviewCanavas.Send your review"
              )}
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
      {review &&
        review.map((x) => {
          return (
            <div className="container my-5">
              <div className="d-flex align-items-center">
                <div>
                  <Card.Img
                    variant="top"
                    src={x.userId.personalImage}
                    style={{
                      width: "55px",
                      height: "55px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="ms-2">
                  <h5>{x.userId.username}</h5>
                </div>
                <div className="ms-auto">
                  <span class="badge-rating">{x.starRating}</span>
                </div>
              </div>
              <div className="col-12 mt-3">
                <p className="ms-5">{x.body}</p>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
