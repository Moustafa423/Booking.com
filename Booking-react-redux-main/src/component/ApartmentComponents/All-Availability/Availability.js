import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../Redux/network";
import { useNavigate } from "react-router-dom";
import "./Availability.css";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function Availability(props) {
  const [bedType, setBedType] = useState([]);
  const [available, setAvailable] = useState({});
  const [reservationInfo, setReservationInfo] = useState();
  const [isBooked, setIsBooked] = useState(false);
  const [isBtn, setIsBtn] = useState(false);

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

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const checkAvailability = () => {
    console.log(available);
    if (Object.keys(available).length < 2) {
      alert("Choose booking date first");
    } else {
      let start = new Date(available.startAt).getTime();
      let end = new Date(available.endAt).getTime();
      let days = (end - start) / 86400000;
      let totalPrice = days * props.apartment.price;
      axiosInstance
        .post("apartment/check/" + props.apartment._id, available)
        .then((result) => {
          if (result.data.success) {
            setIsBooked(false);
            setReservationInfo({
              totalPrice,
              days,
              startAt: available.startAt,
              endAt: available.endAt,
            });
          } else {
            setIsBooked(true);
          }
        });
    }
  };
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/checkout", {
      state: { reservationInfo, prop: props.apartment, type: "apartment" },
    });
  };
  useEffect(() => {
    let allBeds = [];
    let index = 1;
    let i = 1;

    for (let item of props.apartment.bedRooms) {
      console.log(props.apartment.bedRooms);
      let beds = [];
      beds.push(
        <span className="bedType fw-bold">
          {t("ApartmentComponents.All-Availability.Bed room")} {index}:{" "}
        </span>
      );
      if (item.bunkBed) {
        let bedNum = item.bunkBed;
        beds.push(
          <div className="ms-1 bedType ">
            {bedNum} {t("ApartmentComponents.All-Availability.bunk bed")}{" "}
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
      }
      if (item.twinBed) {
        let bedNum = item.twinBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.twin bed")}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M78.25 48h-60.5C16.1 48 15 49.1 15 50.77v30.46C15 82.9 16.1 84 17.75 84s2.75-1.1 2.75-2.77V70.15h55v11.08c0 1.66 1.1 2.77 2.75 2.77S81 82.9 81 81.23V50.77C81 49.1 79.9 48 78.25 48zm-22-27.7h-27.5v-5.53c0-1.66-1.1-2.77-2.75-2.77s-2.75 1.1-2.75 2.77v27.7h33V20.3z"></path>
              <path d="M72.75 23.08v-8.3c0-1.67-1.1-2.78-2.75-2.78s-2.75 1.1-2.75 2.77v5.54h-27.5v22.16h33V23.08z"></path>
            </svg>
          </div>
        );
      }
      if (item.fullBed) {
        let bedNum = item.fullBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.full bed")}{" "}
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
      }
      if (item.queenBed) {
        let bedNum = item.queenBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.queen bed")}{" "}
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
      }
      if (item.kingBed) {
        let bedNum = item.kingBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.king bed")}{" "}
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
      }
      if (item.sofaBed) {
        let bedNum = item.sofaBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.sofa bed")}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M78.25 45.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v8.25H26V48.5c0-1.65-1.1-2.75-2.75-2.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v19.25c0 1.65 1.1 2.75 2.75 2.75h2.75v2.75c0 1.65 1.1 2.75 2.75 2.75S26 74.9 26 73.25V70.5h44v2.75C70 74.9 71.1 76 72.75 76s2.75-1.1 2.75-2.75V70.5h2.75c1.65 0 2.75-1.1 2.75-2.75V48.5c0-1.65-1.1-2.75-2.75-2.75z"></path>
              <path d="M45.25 51.25V21h-22c-1.65 0-2.75 1.1-2.75 2.75v16.5h8.25c1.65 0 2.75 1.1 2.75 2.75v8.25h13.75zm30.25-27.5c0-1.65-1.1-2.75-2.75-2.75h-22v30.25H64.5V43c0-1.65 1.1-2.75 2.75-2.75h8.25v-16.5z"></path>
            </svg>
          </div>
        );
      }
      if (item.futonBed) {
        let bedNum = item.futonBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.futon bed")}{" "}
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
      }
      allBeds.push(beds);
      setBedType(allBeds);
      console.log(allBeds);
      index++;
    }
    for (let item of props.apartment.livingRooms) {
      let beds = [];
      beds.push(
        <span className="bedType fw-bold">
          {t("ApartmentComponents.All-Availability.Livng room")}
          {i}:{" "}
        </span>
      );
      if (item.sofaBed) {
        let bedNum = item.sofaBed;
        beds.push(
          <div className="bedType ms-1">
            {bedNum} {t("ApartmentComponents.All-Availability.sofa bed")}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              fill="#003580"
              width="20px"
            >
              <path d="M78.25 45.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v8.25H26V48.5c0-1.65-1.1-2.75-2.75-2.75h-5.5c-1.65 0-2.75 1.1-2.75 2.75v19.25c0 1.65 1.1 2.75 2.75 2.75h2.75v2.75c0 1.65 1.1 2.75 2.75 2.75S26 74.9 26 73.25V70.5h44v2.75C70 74.9 71.1 76 72.75 76s2.75-1.1 2.75-2.75V70.5h2.75c1.65 0 2.75-1.1 2.75-2.75V48.5c0-1.65-1.1-2.75-2.75-2.75z"></path>
              <path d="M45.25 51.25V21h-22c-1.65 0-2.75 1.1-2.75 2.75v16.5h8.25c1.65 0 2.75 1.1 2.75 2.75v8.25h13.75zm30.25-27.5c0-1.65-1.1-2.75-2.75-2.75h-22v30.25H64.5V43c0-1.65 1.1-2.75 2.75-2.75h8.25v-16.5z"></path>
            </svg>
          </div>
        );
        allBeds.push(beds);
        setBedType(allBeds);
        i++;
      }
    }
  }, []);

  return (
    <>
      <div className="d-flex my-2 mt-5" id="infoPrices">
        <h5 className="fw-bold">
          {t("ApartmentComponents.All-Availability.Availability")}{" "}
        </h5>
      </div>
      {reservationInfo && (
        <div
          style={{ backgroundColor: "#EBF3FF" }}
          className=" reserveCard d-flex w-50 mx-auto rounded-3 justify-content-between align-items-center mb-3  p-3"
        >
          <div className="w-100">
            <div className="d-flex justify-content-between mb-3 ">
              <div>
                <h6>
                  {t("ApartmentComponents.All-Availability.Apartment name")}
                </h6>
                <h6>{t("ApartmentComponents.All-Availability.Country")}</h6>
                <h6>{t("ApartmentComponents.All-Availability.City")}</h6>
                <h6>{t("ApartmentComponents.All-Availability.Check in")}</h6>
                <h6>{t("ApartmentComponents.All-Availability.Check out")}</h6>
                <h6>{t("ApartmentComponents.All-Availability.Days")}</h6>
                <h6>{t("ApartmentComponents.All-Availability.Total price")}</h6>
              </div>
              <div>
                <h6>{props.apartment.apartmentName}</h6>
                <h6>{props.apartment.country}</h6>
                <h6>{props.apartment.city}</h6>
                <h6>{reservationInfo.startAt}</h6>
                <h6>{reservationInfo.endAt}</h6>
                <h6>{reservationInfo.days}</h6>
                <h6 className="text-success">{reservationInfo.totalPrice}$</h6>
              </div>
            </div>

            <button
              className="btn btn-outline-primary w-100"
              onClick={checkout}
            >
              {t("ApartmentComponents.All-Availability.Reserve")}
            </button>
          </div>
        </div>
      )}
      {isBooked && (
        <div className="text-danger text-center my-3 fs-4">
          {t(
            "ApartmentComponents.All-Availability.Sorry this date is already booked"
          )}
        </div>
      )}
      <div className="border " style={{ backgroundColor: "#ffe08a" }}>
        <div>
          {" "}
          <h5 className=" p-2">
            {t(
              "ApartmentComponents.All-Availability.When would you like to stay at"
            )}{" "}
            {  localStorage.getItem("i18nextLng") == "ar"
              ? props.apartment.apartmentNameAR
              : props.apartment.apartmentName}
          </h5>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column p-3">
            <div>
              <h6>
                {/* <p>Check In</p> */}
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
            </div>
          </div>

          <div className="d-flex flex-column p-3">
            <div>
              <h6>
                {/* <p>Check Out</p> */}

                <Stack component="form" noValidate spacing={3}>
                  <TextField
                    name="endAt"
                    label="Check out"
                    type="date"
                    className="bg-white rounded-2"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleDateChange}
                  />
                </Stack>
              </h6>
            </div>
          </div>
          <div className="d-flex ms-auto p-3" id="ReV">
            {isBtn ? (
              <button
                className="btn btn-primary rounded-0 my-auto"
                onClick={checkAvailability}
              >
                {t("ApartmentComponents.All-Availability.Check Availability")}
              </button>
            ) : (
              <button
                disabled
                className="btn btn-primary rounded-0 my-auto "
                onClick={checkAvailability}
              >
                {t("ApartmentComponents.All-Availability.Check Availability")}
              </button>
            )}{" "}
          </div>
        </div>
      </div>

      {/* الجدول */}

      <div className="mt-4 TableDev">
        <table id="customers">
          <tr>
            <th> {t("ApartmentComponents.All-Availability.Sleeps")}</th>
            <th>
              {t("ApartmentComponents.All-Availability.Accommodation Type")}{" "}
            </th>
            <th className="text-center">
              {t("ApartmentComponents.All-Availability.Price")}{" "}
            </th>
          </tr>
          <tr>
            <td>
              {[...Array(props.apartment.guestsNum)].map((item) => {
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
              {bedType &&
                bedType.map((item, index) => {
                  return (
                    <div className="d-flex flex-wrap align-items-center ">
                      {item}
                    </div>
                  );
                })}
            </td>
            <td className="text-success col-2 text-center">
              {props.apartment.price}${" "}
              <span className="text-muted" style={{ fontSize: "13px" }}>
                {t("ApartmentComponents.All-Availability.per day")}
              </span>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
