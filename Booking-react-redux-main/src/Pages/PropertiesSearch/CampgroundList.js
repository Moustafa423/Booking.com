import React from "react";
import CampGrounds from "../../component/Properties/PropertiesCom/CampCom";
import HotelsCom from "../../component/Properties/PropertiesCom/HotelsCom";
import Search from "../../component/HotelPage/Search/Search";
import { useParams } from "react-router-dom";
export default function CampsSearch() {
  const { country, city } = useParams();
  return (
    <>
      <div className="container-lg mt-5 d-flex">
        <div className="row">
          <div className="col-md-3 mb-4 ">
            <Search />
          </div>
          <CampGrounds country={country} city={city} />
        </div>
      </div>
    </>
  );
}
