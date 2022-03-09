import React, { useEffect, useState } from "react";

import "./PropertiesCom.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Hotel from "./Property/Hotel";
import {
  getLowStars,
  getTopRev,
  getTopStars,
} from "../../../Redux/actions/propsFilter";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { getCampGrounds } from "../../../Redux/actions/campground";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

 import { axiosInstance } from "../../../Redux/network";
export default function CampGrounds(props) {
   
  let camps = useSelector((state) => state.campGround.getCampGrounds);
  let revProps = useSelector((state) => state.reviewSorting);
  let [allProps, setCamps] = useState();
  const dispatch = useDispatch();

  const lowStarsSorting = () => {
    setCamps(revProps.getLowStars);

  };
  const TopStarsSorting = () => {
    setCamps(revProps.getTopStars);

    console.log(revProps);
  };
  const TopReviewsSorting = () => {
    setCamps(revProps.getTopRev);
  };

  const LatestCamps = () => {
    setCamps(camps);
  };
  useEffect(() => {
    setCamps(camps);
  }, [camps]);

  useEffect(() => {
    
    let city = props.city || "";
    if (!props.country && !props.city) {
      dispatch(getCampGrounds());
      dispatch(getTopRev("campground"));
    } else{
      axiosInstance
        .get("filter/search/campground/" + props.country + "/" + city)
        .then((result) => {
          
          if (result.data.success) {
            setCamps(result.data);
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
          <h3 className="align-self-center">
            <h3>
              {t("Properties.PropertiesCom.CampCom.properties found")}{" "}
              {camps && camps.data.length}{" "}
              {t("Properties.PropertiesCom.CampCom.camP")}
            </h3>
          </h3>
          <div className="mapbtn ">
            <button className="btn btn-primary fw-bold " type="button">
              {t("Properties.PropertiesCom.CampCom.Show on map")}
            </button>
          </div>
        </div>

        <div className="">
          <ButtonGroup className="mb-2">
            <Button variant="outline-primary" onClick={LatestCamps}>
              {t("Properties.PropertiesCom.CampCom.Latest Campgrounds")}
            </Button>
            <Button variant="outline-primary" onClick={TopReviewsSorting}>
              {t("Properties.PropertiesCom.CampCom.Top Reviews")}
            </Button>
          </ButtonGroup>
        </div>
        <div className="properties">
          {allProps &&
            allProps.data.map((prop) => {
              if (prop.status == "accepted") {
                return <Hotel prop={prop} type={"campground"} />;
              }
            })}
        </div>
      </div>
    </>
  );
}
