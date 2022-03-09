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
                ? props.apartment.descriptionAR
                : props.apartment.description
            }
          />
        </div>
        <div className="col-md-4">
          <Reservation apartment={props.apartment} rate={props.rate} />
        </div>
      </div>
    </>
  );
}
