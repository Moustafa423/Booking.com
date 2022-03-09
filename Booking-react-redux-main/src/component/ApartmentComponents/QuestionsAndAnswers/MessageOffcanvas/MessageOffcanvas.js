import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { axiosInstance } from "../../../../Redux/network";
 

import { useTranslation } from "react-i18next";
 import i18n from "../../../../i18next";




export default function MessageOffcanvas(props) {
  const [message, setMessage] = useState();
  const [allMessage, setallMessage] = useState();
  const [msg, setMsg] = useState(false);
  const [msg1, setMsg1] = useState(true);
  const [lenQuestions , setLenQuestions] = useState(false);

  const { t, i18n } = useTranslation();

function handleClick(lang) {
  i18n.changeLanguage(lang);
}

  useEffect(() => {
 
    axiosInstance.get("apartment/message/" + props.id).then((result) => {
          if (result.data.data.length > 3) {
            setLenQuestions(true);
           }
          setMessage(result.data.data.reverse().slice(0, 2));
    });
  }, []);

  const readAllMessages = () => {
    axiosInstance.get("apartment/message/" + props.id).then((result) => {
      setallMessage(result.data.data.reverse());
      setMsg(true);
      setMsg1(false);
      setLenQuestions(false);
    });
  };

  return (
    <>
      <div className="containr-fluid">
        {msg1 && (
          <div>
            {message &&
              message.map((msg) => {
                return (
                  <div className="container">
                    <div className="d-flex align-items-center">
                      <Card className="mt-3" style={{ width: "100%" }}>
                        <Card.Body>
                          <div className="d-flex flex-column ">
                            <div className="d-flex">
                              <div>
                                <svg
                                  className="me-2"
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-break"> {msg.body} </p>
                              </div>
                            </div>
                            <div className="mt-2 ms-2">
                              <svg
                                className="me-2"
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                              </svg>
                              {msg.replay[0] ? (
                                msg.replay[0]
                              ) : (
                                <span className="text-muted">
                                  {t(
                                    "ApartmentComponents.QuestionsAnd Answers.No answers yet"
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {msg && (
          <div>
            {allMessage &&
              allMessage.map((msg) => {
                return (
                  <div className="container">
                    <div className="d-flex align-items-center">
                      <Card className="mt-3" style={{ width: "100%" }}>
                        <Card.Body>
                          <div className="d-flex flex-column ">
                            <div className="d-flex">
                              <div>
                                <svg
                                  className="me-2"
                                  height="24"
                                  width="24"
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="text-break"> {msg.body} </p>
                              </div>
                            </div>
                            <div className="mt-2 ms-2">
                              <svg
                                className="me-2"
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                role="presentation"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                              </svg>
                              {msg.replay[0] ? (
                                msg.replay[0]
                              ) : (
                                <span className="text-muted">
                                  {t(
                                    "ApartmentComponents.QuestionsAnd Answers.No answers yet"
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        {lenQuestions && (
          <div className="mt-3 text-center">
            <button
              className="btn btn-outline-primary"
              onClick={readAllMessages}
            >
              {t("ApartmentComponents.QuestionsAnd Answers.Read More")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
