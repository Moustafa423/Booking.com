import React, { useEffect } from 'react'
import Search from '../../component/HotelPage/Search/Search';
import CampGrounds from '../../component/Properties/PropertiesCom/CampCom'
  

export default function CampsList() {
useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
     behavior: "instant",
   });
}, []);



    return (
      <>
        <div className="container-lg mt-5">
          <div className="row">
            <div className="col-md-3 mb-4 ">
              <Search />
            </div>
            <CampGrounds />
          </div>
        </div>
      </>
    );
}
