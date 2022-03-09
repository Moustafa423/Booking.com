import React, { useState } from "react";
import { Form, Modal, Offcanvas } from "react-bootstrap";
import ButtonBootStrap from "react-bootstrap/Button";
import { axiosInstance } from "../../../Redux/network";
import MessageOffcanvas from "../MessageOffcanvas/MessageOffcanvas";
import "./QuestionsAndAnswers.css";
import "animate.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Button from "@mui/material/Button";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function QuestionsAndAnswers() {
  const [maxChar, setmaxChar] = useState(300);
  const [show, setShow] = useState(false);
  const [Show, setshow] = useState(false);
  const [questions, setQuestions] = useState();
  const [msg, setMsg] = useState(false);
  const { id } = useParams();

  const funShow = () => setshow(true);
  const funClose = () => setshow(false);

  const askQuestion = () => {
    axiosInstance.post("hotel/message/" + id, questions).then((result) => {
      if (!result.data.success) {
        alert(result.data.msg);
      } else {
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      }
      axiosInstance.get("hotel/message/" + id).then((result) => {
        setQuestions(result.data.data);
      });
    });
  };
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const onChange = (e) => {
    setQuestions({ ...questions, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="mt-5 my-3">
        {" "}
        <h5 className="fw-bold">
          {t("HotelPage.QuestionAndAnswers.Got a question?")}
        </h5>
      </div>
      <div className="border">
        <div class="d-flex mt-3">
          <div class="p-3">
            <svg
              class="mt-2"
              fill="#0071C2"
              height="36"
              width="36"
              viewBox="0 0 24 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
            </svg>
          </div>
          <div class="p-2 ">
            <p className="fw-bold">
              {t("HotelPage.QuestionAndAnswers.Property questions and answers")}
            </p>
            <p>
              {t(
                "HotelPage.QuestionAndAnswers.Looking for more info? Send a question to the property to find out more."
              )}
              "
            </p>
          </div>
          <div class="ms-auto p-2 ">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<LiveHelpIcon />}
                onClick={() => setShow(true)}
                color="primary"
                size="small"
              >
                <span className="text-capitalize">
                  {t("HotelPage.QuestionAndAnswers.Ask a question")}
                </span>
              </Button>
            </Stack>
          </div>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <h6 className="mt-2">
                {t(
                  "HotelPage.QuestionAndAnswers.Didn't find the answer you were looking for? Ask a question about the property"
                )}
              </h6>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  {t("HotelPage.QuestionAndAnswers.Type your question here:")}
                </Form.Label>
                <Form.Control
                  name="body"
                  onChange={(e) => {
                    onChange(e);
                    setmaxChar(300 - e.target.value.length);
                  }}
                  as="textarea"
                  rows={5}
                  maxLength="300"
                  placeholder="e.g do you offer room service"
                />
                <p>
                  {maxChar} {t("HotelPage.QuestionAndAnswers.characters left")}
                </p>
              </Form.Group>

              <ButtonBootStrap
                onClick={() => {
                  setShow(false);
                  askQuestion();
                }}
                className="rounded-0 w-100"
                type="submit"
                variant="primary"
              >
                {t("HotelPage.QuestionAndAnswers.Submit your question")}
              </ButtonBootStrap>

              <div className="p-0">
                <p className="mt-3">
                  {t(
                    "HotelPage.QuestionAndAnswers.Your question will be published on Booking.com after it has been approved and answered."
                  )}
                  <a className="text-decoration-none fw-bold" href="#">
                    {t(
                      "HotelPage.QuestionAndAnswers.Click here to read post guidelines."
                    )}
                    "
                  </a>
                </p>
              </div>
            </Modal.Body>
          </Modal>

          <div class="ms-auto p-2 ">
            <Stack direction="row" spacing={2}>
              <Button
                onClick={funShow}
                variant="contained"
                endIcon={<QuestionAnswerIcon />}
                onClick={funShow}
                color="success"
                size="small"
              >
                <span className="text-capitalize">
                  {" "}
                  {t("HotelPage.QuestionAndAnswers.Read all questions")}
                </span>
              </Button>
            </Stack>
          </div>
          <Offcanvas show={Show} onHide={funClose} placement={"end"}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <span className="ms-3">
                  {t("HotelPage.QuestionAndAnswers.Question & Answers")}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-patch-question"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
                  </svg>
                </span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <MessageOffcanvas id={id} />
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {msg && (
        <Stack
          sx={{ width: "100%" }}
          spacing={2}
          className="my-5 animate_animated animate_slideInLeft"
        >
          <Alert variant="filled" severity="success">
            {t(
              "HotelPage.QuestionAndAnswers.Your question has been successfully posted"
            )}
          </Alert>
        </Stack>
      )}
    </>
  );
}
