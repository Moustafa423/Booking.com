import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Availability.css";
import { axiosInstance } from "../../../Redux/network";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Availability(props) {
  const [available, setAvailable] = useState({});
  const [availableRooms, setAvailableRooms] = useState();
  const [isSelect, setIsSelect] = useState(false);
  const [reservationInfo, setReservationInfo] = useState();
  const { id } = useParams();
  const [isBtn, setIsBtn] = useState(false);

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const handleDateChange = (e) => {
    if (e.target.name == "startAt") {
      if (new Date(e.target.value) < Date.now()) {
        alert("Please choose a valid date");
        e.target.value = "";
      } else {
        setAvailable({ ...available, [e.target.name]: e.target.value });
      }
    } else if (e.target.name == "endAt") {
      if (available.hasOwnProperty("startAt")) {
        if (available.startAt < e.target.value) {
          setAvailable({ ...available, [e.target.name]: e.target.value });
          setIsBtn(true);
        } else {
          alert("Choose valid date");
          e.target.value = "";
        }
      } else {
        alert("Choose check in date first");
        e.target.value = "";
      }
    }
  };
  const checkAvailability = () => {
    axiosInstance.post("filter/rooms/hotel/" + id, available).then((result) => {
      setAvailableRooms(result.data.data);
      setIsSelect(true);
    });
  };
  const handleRoomNumbChange = (event, room) => {
    if (props.hotel.status != "pending") {
      let start = new Date(available.startAt).getTime();
      let end = new Date(available.endAt).getTime();
      let days = (end - start) / 86400000;
      let totalPrice = event.target.value * days * room.price;
      setReservationInfo({
        totalPrice,
        days,
        roomType: room.type,
        roomName: room.roomName,
        roomsNum: event.target.value,
        startAt: available.startAt,
        endAt: available.endAt,
        roomId: room._id,
        room,
      });
    }
  };
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout", {
      state: { reservationInfo, prop: props.hotel, type: "hotel" },
    });
  };

  useEffect(() => {
    if (props.hotel.status == "pending") {
      setAvailableRooms(props.hotel.rooms);
      setIsSelect(true);
    }
  }, []);

  const bedTypeFun = (type, bedsNumber) => {
    switch (type) {
      case "Twin bed(s) / 90-130 cm wide":
        return (
          <div className="ms-1 bedType ">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Twin bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M81 54.9v30.34C81 86.9 79.9 88 78.25 88s-2.75-1.1-2.75-2.76v-8.27h-55v8.27c0 1.66-1.1 2.76-2.75 2.76S15 86.9 15 85.24V10.76C15 9.1 16.1 8 17.75 8s2.75 1.1 2.75 2.76v19.3h55v-5.5c0-1.66 1.1-2.77 2.75-2.77S81 22.9 81 24.54V54.9zm-60.5-4.14v9.65h55V46.63h-55v4.14z"></path>
            </svg>
          </div>
        );

      case "Full bed(s) / 131-150 cm wide":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Full bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M89.25 48H6.75C5.1 48 4 49.1 4 50.77v30.46C4 82.9 5.1 84 6.75 84s2.75-1.1 2.75-2.77V70.15h77v11.08c0 1.66 1.1 2.77 2.75 2.77S92 82.9 92 81.23V50.77C92 49.1 90.9 48 89.25 48zm-44-27.7h-27.5v-5.53c0-1.66-1.1-2.77-2.75-2.77s-2.75 1.1-2.75 2.77v27.7h33V20.3zm38.5 2.78v-8.3c0-1.67-1.1-2.78-2.75-2.78s-2.75 1.1-2.75 2.77v5.54h-27.5v22.16h33V23.08z"></path>
            </svg>
          </div>
        );

      case "Queen bed(s) / 151-180 cm wide":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Queen bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M89.25 48H6.75C5.1 48 4 49.1 4 50.77v30.46C4 82.9 5.1 84 6.75 84s2.75-1.1 2.75-2.77V70.15h77v11.08c0 1.66 1.1 2.77 2.75 2.77S92 82.9 92 81.23V50.77C92 49.1 90.9 48 89.25 48zm-44-27.7h-27.5v-5.53c0-1.66-1.1-2.77-2.75-2.77s-2.75 1.1-2.75 2.77v27.7h33V20.3zm38.5 2.78v-8.3c0-1.67-1.1-2.78-2.75-2.78s-2.75 1.1-2.75 2.77v5.54h-27.5v22.16h33V23.08z"></path>
            </svg>
          </div>
        );

      case "King bed(s) / 181-210 cm wide":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.King bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M89.25 48H6.75C5.1 48 4 49.1 4 50.77v30.46C4 82.9 5.1 84 6.75 84s2.75-1.1 2.75-2.77V70.15h77v11.08c0 1.66 1.1 2.77 2.75 2.77S92 82.9 92 81.23V50.77C92 49.1 90.9 48 89.25 48zm-44-27.7h-27.5v-5.53c0-1.66-1.1-2.77-2.75-2.77s-2.75 1.1-2.75 2.77v27.7h33V20.3zm38.5 2.78v-8.3c0-1.67-1.1-2.78-2.75-2.78s-2.75 1.1-2.75 2.77v5.54h-27.5v22.16h33V23.08z"></path>
            </svg>
          </div>
        );

      case "Bunk bed(s) / Variable size":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Bunk bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M81 54.9v30.34C81 86.9 79.9 88 78.25 88s-2.75-1.1-2.75-2.76v-8.27h-55v8.27c0 1.66-1.1 2.76-2.75 2.76S15 86.9 15 85.24V10.76C15 9.1 16.1 8 17.75 8s2.75 1.1 2.75 2.76v19.3h55v-5.5c0-1.66 1.1-2.77 2.75-2.77S81 22.9 81 24.54V54.9zm-60.5-4.14v9.65h55V46.63h-55v4.14z"></path>
            </svg>
          </div>
        );

      case "Sofa bed(s) / Variable size":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Sofa bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="22px"
            >
              <path d="M78.25 45.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v8.25H26V48.5c0-1.65-1.1-2.75-2.75-2.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v19.25c0 1.65 1.1 2.75 2.75 2.75h2.75v2.75c0 1.65 1.1 2.75 2.75 2.75S26 74.9 26 73.25V70.5h44v2.75C70 74.9 71.1 76 72.75 76s2.75-1.1 2.75-2.75V70.5h2.75c1.65 0 2.75-1.1 2.75-2.75V48.5c0-1.65-1.1-2.75-2.75-2.75z"></path>
              <path d="M45.25 51.25V21h-22c-1.65 0-2.75 1.1-2.75 2.75v16.5h8.25c1.65 0 2.75 1.1 2.75 2.75v8.25h13.75zm30.25-27.5c0-1.65-1.1-2.75-2.75-2.75h-22v30.25H64.5V43c0-1.65 1.1-2.75 2.75-2.75h8.25v-16.5z"></path>
            </svg>
          </div>
        );

      case "Futon bed(s) / Variable size":
        return (
          <div className="bedType ms-1">
            <span className="me-2">{bedsNumber}</span>

            <span className="me-2">
              {t("HotelPage.All-Availability.Futon bed")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M89.25 48H6.75C5.1 48 4 49.1 4 50.77v30.46C4 82.9 5.1 84 6.75 84s2.75-1.1 2.75-2.77V70.15h77v11.08c0 1.66 1.1 2.77 2.75 2.77S92 82.9 92 81.23V50.77C92 49.1 90.9 48 89.25 48zm-44-27.7h-27.5v-5.53c0-1.66-1.1-2.77-2.75-2.77s-2.75 1.1-2.75 2.77v27.7h33V20.3zm38.5 2.78v-8.3c0-1.67-1.1-2.78-2.75-2.78s-2.75 1.1-2.75 2.77v5.54h-27.5v22.16h33V23.08z"></path>
            </svg>
          </div>
        );
      default:
    }
  };

  return (
    <>
      <div className="d-flex my-2 mt-5" id="infoPrices">
        <h5 className="fw-bold">
          {t("HotelPage.All-Availability.Availability")}
        </h5>
      </div>
      <div className="border " style={{ backgroundColor: "#ffe08a" }}>
        <div>
          {" "}
          <h5 className=" p-2">
            {t("HotelPage.All-Availability.When would you like to stay at")}{" "}
            {  localStorage.getItem("i18nextLng") == "ar"
              ? props.hotel.hotelNameAR
              : props.hotel.hotelName}
          </h5>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column p-3">
            <div>
              <h6>
                {/* <p>{t("HotelPage.All-Availability.Check In")}</p> */}
                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    label="Check in"
                    type="date"
                    className="bg-white rounded-2"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="startAt"
                    onChange={handleDateChange}
                  />
                </Stack>
              </h6>
              {/* <h6 className="text-primary">{available && available.startAt}</h6> */}
            </div>
          </div>

          <div className="d-flex flex-column p-3">
            <div>
              <h6>
                {/* <p>{t("HotelPage.All-Availability.Check Out")}</p> */}
                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    name="endAt"
                    label="Check out"
                    className="bg-white rounded-2"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleDateChange}
                  />
                </Stack>
              </h6>
              {/* <h6 className="text-primary">{available && available.endAt}</h6> */}
            </div>
          </div>

          <div className="d-flex ms-auto p-3" id="ReV">
            {isBtn ? (
              <button
                className="btn btn-primary rounded-0 my-auto"
                onClick={checkAvailability}
              >
                {t("HotelPage.All-Availability.Check Availability")}
              </button>
            ) : (
              <button
                disabled
                className="btn btn-primary rounded-0 my-auto"
                onClick={checkAvailability}
              >
                {t("HotelPage.All-Availability.Check Availability")}
              </button>
            )}{" "}
          </div>
        </div>
      </div>

      {/* الجدول */}

      <div className="mt-4 TableDev">
        {reservationInfo && (
          <div
            style={{ backgroundColor: "#EBF3FF" }}
            className=" reserveCard d-flex w-50 mx-auto rounded-3 justify-content-between align-items-center mb-3  p-3"
          >
            <div className="w-100">
              <div className="d-flex justify-content-between mb-3 ">
                <div>
                  <h6>{t("HotelPage.All-Availability.Room type")}</h6>
                  <h6>{t("HotelPage.All-Availability.Room name")}</h6>
                  <h6>{t("HotelPage.All-Availability.Number of rooms")}</h6>
                  <h6>{t("HotelPage.All-Availability.Days")}</h6>
                  <h6>{t("HotelPage.All-Availability.Total price")}</h6>
                </div>
                <div>
                  <h6>{reservationInfo.roomType}</h6>
                  <h6>{reservationInfo.roomName}</h6>
                  <h6>{reservationInfo.roomsNum}</h6>
                  <h6>{reservationInfo.days}</h6>
                  <h6 className="text-success">
                    {reservationInfo.totalPrice}$
                  </h6>
                </div>
              </div>

              <button
                className="btn btn-outline-primary w-100"
                onClick={checkout}
              >
                {t("HotelPage.All-Availability.Reserve")}
              </button>
            </div>
          </div>
        )}
        <table id="customers" className="rooms-table">
          <tr>
            <th>{t("HotelPage.All-Availability.Room type")}</th>
            <th>{t("HotelPage.All-Availability.Room name")}</th>
            <th>{t("HotelPage.All-Availability.Sleeps")}</th>
            <th>{t("HotelPage.All-Availability.Price")}</th>
            <th>{t("HotelPage.All-Availability.Beds Type")}</th>
            <th>{t("HotelPage.All-Availability.Select rooms")}</th>
          </tr>

          {isSelect &&
            availableRooms.map((room) => {
              return (
                <tr>
                  <td className="roomType">{room.type}</td>
                  <td>{room.roomName}</td>
                  <td>
                    {[...Array(room.guestsNumber)].map((item) => {
                      return (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      );
                    })}
                  </td>
                  <td>
                    <span className="text-success">{room.price}$ </span>
                    <span className="text-muted">
                      {t("HotelPage.All-Availability.per day")}
                    </span>
                  </td>
                  <td>
                    <td>{bedTypeFun(room.bedType, room.bedsNumber)}</td>
                  </td>
                  <td>
                    <Form.Select
                      size="sm"
                      onChange={(event) => handleRoomNumbChange(event, room)}
                    >
                      <option>0</option>
                      {[...Array(room.availableRooms)].map((item, index) => {
                        return <option value={index + 1}>{index + 1}</option>;
                      })}
                    </Form.Select>
                  </td>
                </tr>
              );
            })}
        </table>
        {!isSelect && (
          <div className="bg-light text-center py-3">
            <h4 className="">
              {t("HotelPage.All-Availability.Choose booking date")}
            </h4>
          </div>
        )}
        {isSelect && availableRooms.length == 0 && (
          <div className="bg-light text-danger text-center py-3">
            <h4 className="">
              {t(
                "HotelPage.All-Availability.Sorry no available rooms for this date"
              )}
            </h4>
          </div>
        )}
      </div>
    </>
  );
}
