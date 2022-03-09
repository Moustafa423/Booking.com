import React, { useEffect, useState } from "react";
import "./PropertiesCom.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getApartments } from "../../../Redux/actions/apartment";
import Hotel from "./Property/Hotel";
import {
  getLowStars,
  getTopRev,
  getTopStars,
} from "../../../Redux/actions/propsFilter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../../../Redux/network";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function Apartments(props) {
  let aparts = useSelector((state) => state.apartment.getApartments);
  let revProps = useSelector((state) => state.reviewSorting);
  let [allProps, setaparts] = useState();
  const dispatch = useDispatch();

  const TopReviewsSorting = () => {
    setaparts(revProps.getTopRev);
  };

  const LatestAparts = () => {
    setaparts(aparts);
  };
  useEffect(() => {
    setaparts(aparts);
  }, [aparts]);

  useEffect(() => {
    let city = props.city || "";

    if (!props.country && !props.city) {
      dispatch(getApartments());
      dispatch(getTopRev("apartment"));
      dispatch(getTopStars("apartment"));
      dispatch(getLowStars("apartment"));
    } else {
      axiosInstance
        .get("filter/search/apartment/" + props.country + "/" + city)
        .then((result) => {
          console.log(result);
          if (result.data.success) {
            setaparts(result.data);
          }
        });
    }
  }, []);
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className="col-sm-9   rounded">
        <div className="text d-flex justify-content-between">
          <h3>
            {t("Properties.PropertiesCom.ApartmentCom.properties found")}{" "}
            {aparts && aparts.data.length}{" "}
            {t("Properties.PropertiesCom.ApartmentCom.apart")}
          </h3>
          <div className="mapbtn ">
            <button className="btn btn-primary fw-bold " type="button">
              {t("Properties.PropertiesCom.ApartmentCom.Show on map")}
            </button>
          </div>
        </div>

        <div className="">
          <ButtonGroup className="mb-2">
            <Button variant="outline-primary" onClick={LatestAparts}>
              {t("Properties.PropertiesCom.ApartmentCom.Latest Apartments")}
            </Button>
            <Button variant="outline-primary" onClick={TopReviewsSorting}>
              {t("Properties.PropertiesCom.ApartmentCom.Top Reviews")}
            </Button>
          </ButtonGroup>
        </div>
        <div className="properties">
          {allProps &&
            allProps.data.map((prop) => {
              if (prop.status == "accepted") {
                return <Hotel prop={prop} type={"apartment"} />;
              }
            })}
        </div>
      </div>
    </>
  );
}
