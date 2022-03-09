import React from "react";
import Apartments from "../../component/Properties/PropertiesCom/ApartmentCom";

import { useParams } from "react-router-dom";
import Search from "../../component/HotelPage/Search/Search";
export default function ApartmentsSearch() {
  const { country, city } = useParams();
  console.log(country, city, "aaaaaaaaaaaaa");
  return (
    <>
      <div className="container-lg mt-5 d-flex">
        <div className="row">
          <div className="col-md-3 mb-4 ">
            <Search />
          </div>
          <Apartments country={country} city={city} />
        </div>
      </div>
    </>
  );
}
