import React, { useEffect, useState } from "react";
import { Form, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../../Redux/network";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Tooltip } from "@mui/material";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
// local
import i18n from "../../i18next";
import { useTranslation } from "react-i18next";
import { lang } from "../../Redux/actions/lang";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loggedInUser, setloggedInUser] = useState();
  const [allFalseNotifications, setAllFalseNotifications] = useState(0);
  const [showNotifications, setShowNotifications] = useState();
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState();
  const changeLang = () => {
    localStorage.setItem("key", "arabic");
    window.location.reload();
  };

  const changeLang2 = () => {
    console.log("object");

    localStorage.setItem("key", "english");
    window.location.reload();
  };

  const logOut = () => {
    localStorage.removeItem("authentication");
    window.location.replace("http://localhost:4200/login");
    // window.location.reload();
  };

  useEffect(() => {
    axiosInstance.get("user/loggedin").then((result) => {
      console.log(result);
      if (result.data.success) {
        if (result.data.data) {
          setShowNotifications(
            result.data.data.notifications.reverse().slice(0, 20)
          );
        }
      }
      setloggedInUser(result.data.data);
      if (result.data.success) {
        let falseNotifications = 0;
        for (let noti of result.data.data.notifications) {
          setCurrentDate(new Date(noti.createdAt).toLocaleString());

          if (noti.isRead == false) {
            falseNotifications++;
          }
        }
        setAllFalseNotifications(falseNotifications);
      }
    });
  }, []);

  const readNotifications = () => {
    axiosInstance.get("user/read/notifications").then((res) => {
      console.log(res);
    });
  };

  //Local
  const language = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  function enhandleClick() {
    dispatch(lang("en"));
    i18n.changeLanguage("en");
  }
  function arhandleClick() {
    dispatch(lang("ar"));
    i18n.changeLanguage("ar");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary_color">
        <div className="container mt-2">
          <a className="navbar-brand font-white fw-bold fs-4" href="#">
            Booking.com
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse rtL" id="navbarText">
            <div className="d-flex align-items-center  ms-auto">
              <Button onClick={handleOpen}>
                {localStorage.getItem("key") == "english" && (
                  <Tooltip title="Choose your language" arrow>
                    <div>
                      <a className="nav-link" href="#">
                        <img
                          className="lang-img rounded-circle"
                          src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </Tooltip>
                )}

                {localStorage.getItem("key") == "arabic" && (
                  <Tooltip title="Chose your language" arrow>
                    <div>
                      <a className="nav-link" href="#">
                        <img
                          className="lang-img rounded-circle "
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </Tooltip>
                )}
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    component="h2"
                    className="text-center fw-bold"
                  >
                    {t("Navbar.Select your language")}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="d-flex justify-content-center">
                      <div
                        onClick={() => {
                          handleClose();
                          changeLang2();
                          enhandleClick();
                        }}
                      >
                        <a className="nav-link" href="#">
                          <img
                            className="lang-img rounded-circle"
                            src="https://cf.bstatic.com/static/img/flags/new/48-squared/gb/daba79fdd4066d133e8bf59070fd6819b951c403.png"
                            alt=""
                          />
                        </a>
                      </div>

                      <div
                        onClick={() => {
                          handleClose();
                          changeLang();
                          arhandleClick();
                        }}
                      >
                        <a className="nav-link" href="#">
                          <img
                            className="lang-img rounded-circle "
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/2560px-Flag_of_Egypt.svg.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </Typography>
                </Box>
              </Modal>

              <div className="nav-item mx-lg-2">
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div onClick={readNotifications}>
                      <button
                        {...bindTrigger(popupState)}
                        type="button"
                        className="btn btnBackground position-relative"
                      >
                        <svg
                          className="me-1"
                          height="27"
                          width="27"
                          viewBox="0 0 24 24"
                          role="presentation"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            fill="#FFFF"
                            d="M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422zM12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0zm-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75zm0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25z"
                          ></path>
                        </svg>

                        {allFalseNotifications ? (
                          <span className="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger my-2">
                            {allFalseNotifications}
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Typography
                          className="bg-light"
                          sx={{
                            p: 2,

                            width: "600px",
                            height: "50%",
                          }}
                        >
                          {showNotifications &&
                            showNotifications.map((elment) => {
                              return (
                                <Stack sx={{ width: "100%" }} spacing={2}>
                                  {elment.isRead ? (
                                    <a
                                      className="text-decoration-none"
                                      href={elment.link}
                                    >
                                      <Alert
                                        className="text-dark AlERT"
                                        variant="outlined"
                                        severity="success"
                                        sx={{
                                          marginBottom: "10px",
                                          bgcolor: "#fff",
                                          boxShadow:
                                            "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                                        }}
                                      >
                                        {elment.body} <br />{" "}
                                        <span className="text-muted">
                                          {currentDate}
                                        </span>
                                      </Alert>
                                    </a>
                                  ) : (
                                    <a
                                      className="text-decoration-none"
                                      href={elment.link}
                                    >
                                      {" "}
                                      <Alert
                                        className="AlERT text-dark"
                                        severity="info"
                                        sx={{
                                          boxShadow:
                                            "rgba(6, 24, 44, 0.4) 0px 0px 0px 1px, rgba(6, 24, 44, 0.65) 0px 2px 2px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                                          marginBottom: "10px",
                                          bgcolor: "#f0f8ff",
                                        }}
                                        variant="outlined"
                                      >
                                        {elment.body}
                                        <br />{" "}
                                        <span className="text-muted">
                                          {currentDate}
                                        </span>
                                      </Alert>
                                    </a>
                                  )}
                                </Stack>
                              );
                            })}
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              </div>
              <div className="nav-item mx-lg-2">
                <span
                  class="logOut"
                  role="button"
                  tabindex="0"
                  onClick={logOut}
                >
                  <svg
                    _ngcontent-vfw-c316=""
                    height="20"
                    width="20"
                    viewBox="0 0 128 128"
                    role="presentation"
                    fill="white"
                    aria-hidden="true"
                    focusable="false"
                    class="bk-icon -streamline-sign_out"
                  >
                    <path
                      _ngcontent-vfw-c316=""
                      d="M1.19 66.83l20 20a4.002 4.002 0 1 0 5.66-5.66L13.67 68H88a4 4 0 0 0 0-8H13.67l13.18-13.17a4.002 4.002 0 1 0-5.66-5.66l-20 20c-.183.186-.35.387-.5.6 0 0 0 .11-.08.16a3 3 0 0 0-.28.53 2.25 2.25 0 0 0-.08.24 3 3 0 0 0-.15.51 3.94 3.94 0 0 0 0 1.58c.036.174.086.344.15.51.022.081.049.162.08.24.076.182.17.357.28.52 0 .06.05.11.08.16.15.216.317.42.5.61zm31.13 35c20.876 19.722 53.787 18.787 73.509-2.089 14.874-15.743 18.432-39.058 8.931-58.521-10.77-22.12-42-37.41-69.52-24a52 52 0 0 0-12.91 8.93 4.004 4.004 0 0 1-5.49-5.83 60.002 60.002 0 0 1 14.9-10.29C67.26-2.37 106.48 6 122 37.74c14.519 29.787 2.142 65.704-27.645 80.223-22.44 10.938-49.308 6.839-67.465-10.293a4 4 0 0 1 5.48-5.82z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="nav-item mx-lg-2 d-flex align-items-center">
                <a className="text-decoration-none " href="">
                  <div className="d-flex align-items-center ">
                    <div className="mx-lg-2">
                      <img
                        className="nav-personal-img rounded-circle "
                        src={loggedInUser && loggedInUser.personalImage}
                        alt=""
                      />
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                      <p
                        className="person-name"
                        onClick={() => navigate("/dashboard")}
                      >
                        {loggedInUser && loggedInUser.username}
                      </p>
                      <p className="font-secoundry_color membership">
                        {loggedInUser && loggedInUser.country}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar navbar-expand-lg bg-primary_color text-white">
        <div className="container secondNav">
          <Nav className="secondNav">
            <Nav.Link className="text-white NavStyle">
              <NavLink
                id="comeHere"
                className="text-white text-decoration-none "
                to="/"
                activeClassName="active"
              >
                {t("Navbar.Home")}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                className="text-white text-decoration-none"
                activeClassName="active"
                to="/hotels"
              >
                {t("Navbar.Hotels")}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/apartments"
              >
                {t("Navbar.Apartments")}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/campgrounds"
              >
                {t("Navbar.Campgrounds")}
              </NavLink>
            </Nav.Link>
            <Nav.Link className="text-white NavStyle">
              <NavLink
                activeClassName="active"
                className="text-white text-decoration-none"
                to="/post"
              >
                {t("Navbar.Community")}
              </NavLink>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
}
