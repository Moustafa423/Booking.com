import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { Spinner } from "react-bootstrap";
export default function Auth(props) {
  const { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("authentication", token);

    window.location.href = "http://localhost:3000/";
  }, []);
  return (
    <div
      style={{ height: "500px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Spinner
        style={{ width: "100px", height: "100px" }}
        animation="border"
        variant="primary"
        role="status"
      ></Spinner>
    </div>
  );
}
