import React, { useEffect, useState } from "react";
import Availability from "../../component/HotelPage/All-Availability/Availability";
import BodyCom from "../../component/HotelPage/BodyCom/BodyCom";
import Covid from "../../component/HotelPage/Covid/Covid";
import HotelImg from "../../component/HotelPage/HotelImg/HotelImg";
import NavHotel from "../../component/HotelPage/NavHotel/NavHotel";
import Search from "../../component/HotelPage/Search/Search";
import MostPopularFacilities from "../../component/HotelPage/Mostpopularfacilities/MostPopularFacilities";
import { axiosInstance } from "../../Redux/network";
import WhyChose from "../../component/HotelPage/WhyChose/WhyChose";
import GuestReviews from "../../component/HotelPage/GuestReviews/GuestReviews";
import QuestionsAndAnswers from "../../component/HotelPage/QuestionsAndAnswers/QuestionsAndAnswers";
import Facilities from "../../component/HotelPage/Facilities/Facilities";
import HouseRules from "../../component/HotelPage/HouseRules/HouseRules";
import Faqs from "../../component/HotelPage/Faqs/Faqs";
import { useParams } from "react-router-dom";

export default function HotelPage(props) {
  const [hotel, setHotel] = useState();
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    axiosInstance.get("hotel/" + id).then((result) => {
      setHotel(result.data.data);
    });
  }, []);

  return (
    <>
      <Covid />
      <div className="container d-md-flex my-3">
        <div className="col-md-3 me-3 ms-3">
          <Search prop={"hotel"} />
        </div>
        <div className="col-md-9">
          {hotel && <NavHotel hotel={hotel} />}
          {hotel && <HotelImg hotel={hotel} />}

          {hotel && <BodyCom rate={reviews} hotel={hotel} />}
          {hotel && <MostPopularFacilities hotel={hotel} />}
          {hotel && <Availability hotel={hotel} />}
          {hotel && <WhyChose hotel={hotel} />}

          {hotel && <GuestReviews hotel={hotel} setReviews={setReviews} />}
          <QuestionsAndAnswers />
          {hotel && <Facilities hotel={hotel} />}
          {hotel && <HouseRules hotel={hotel} />}
          {hotel && <Faqs hotel={hotel} />}
        </div>
      </div>
    </>
  );
}
