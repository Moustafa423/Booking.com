import React from "react";
import HotelsCom from "../../component/Properties/PropertiesCom/HotelsCom";
import { useParams } from "react-router-dom";
import Search from "../../component/HotelPage/Search/Search";
export default function HotelsSearch() {
  const { country, city } = useParams();
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mb-4 ">
            <Search />
          </div>
          <HotelsCom country={country} city={city} />
        </div>
      </div>
    </>
  );
}
