import React from "react";
import Description from "./DescCom/Description";
import Reservation from "./reservation/reservation";

export default function BodyCom(props) {
  return (
    <>
      <div className=" d-flex justify-content-between">
        <div className="col-md-7">
          <Description
            description={
              localStorage.getItem("i18nextLng") == "ar"
                ? props.campground.descriptionAR
                : props.campground.description
            }
          />
        </div>
        <div className="col-md-4">
          <Reservation campground={props.campground} rate={props.rate} />
        </div>
      </div>
    </>
  );
}
