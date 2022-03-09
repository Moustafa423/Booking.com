import React, { useEffect, useState } from "react";
import "./Search.css";
import map from "../../../Static/map.png";
import { Button, Modal } from "react-bootstrap";
import CustomMap from "../../CustomMap/CustomMap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import { axiosInstance } from "../../../Redux/network";
import { useParams } from "react-router";
export default function Search(props) {
  const [show, setShow] = useState(false);
  const [countryData, setCountryData] = useState();
  const [city, setCity] = useState();
  const [countries, setCountries] = useState();
  const [allData, setAllData] = useState();

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
      setAllData(res.data.data);
      let arrCountry = [];
      for (let item of res.data.data) {
        arrCountry.push(item.country);
      }
      setCountries(arrCountry);
    });
  }, []);

  const Proprety = [
    { label: "apartment" },
    { label: "campground" },
    { label: "hotel" },
  ];

  const onCountryChange = (e) => {
    if (allData) {
      for (let Data of allData) {
        if (Data.country == e.target.innerText) {
          setCity(Data.cities);
        }
      }
    }
  };
  const [property, setProperty] = useState();
  const { id } = useParams();
  useEffect(() => {
    axiosInstance.get(props.prop + "/" + id).then((result) => {
      if (result.data.success) {
        setProperty(result.data.data);
      }
    });
  }, []);

  const saveData = () => {
    console.log(countryData);
  };

  return (
    <>
      <div className="price fst-italic fw-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-tag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>{" "}
        {t("HotelPage.Search.We Price Match")}
      </div>
      <div className="search p-3 rounded ">
        <h4> {t("HotelPage.Search.Search")} </h4>
        <div className="inp mb-2 mt-3">
          <Autocomplete
            name="country"
            disablePortal
            id="combo-box-demo"
            options={countries && countries}
            sx={{
              width: "100%",
            }}
            onChange={(e) => {
              setCountryData({
                ...countryData,
                country: e.target.innerText,
              });
              onCountryChange(e);
            }}
            renderInput={(params) => <TextField {...params} label="Country" />}
          />
        </div>

        <div className="inp mb-2 mt-4">
          <Autocomplete
            name="city"
            disablePortal
            id="combo-box-demo"
            options={city ? city : []}
            sx={{ width: "100%" }}
            onChange={(e) => {
              setCountryData({
                ...countryData,
                city: e.target.innerText,
              });
            }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
        </div>
        <div className="dropdown mb-2 mt-4">
          <Autocomplete
            name="property"
            disablePortal
            id="combo-box-demo"
            sx={{ width: "100%" }}
            options={Proprety}
            renderInput={(params) => <TextField {...params} label="Property" />}
          />
        </div>

      
     
        <button className="btn-primary w-100 p-2 fs-5 my-2" onClick={saveData}>
          {t("HotelPage.Search.Search")}
        </button>
      </div>

      <div className="imgDiv" onClick={() => setShow(true)}>
        <img className="w-100" src={map} alt="" />
        <div className="btnDiv">
          <button className="btn btn-primary">
            {t("HotelPage.Search.Show on map")}
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {t("HotelPage.Search.Map")}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomMap property={property} />
        </Modal.Body>
      </Modal>
    </>
  );
}
