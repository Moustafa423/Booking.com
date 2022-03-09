import React, { useEffect, useState } from "react";
import CampgroundImg from "../../component/CampgroundComponents/CampgroundImg/CampgroundImg";
import { axiosInstance } from "../../Redux/network";
import NavHotel from "../../component/HotelPage/NavHotel/NavHotel";
import Covid from "../../component/HotelPage/Covid/Covid";
import Search from "../../component/HotelPage/Search/Search";
import BodyCom from "../../component/CampgroundComponents/BodyCom/BodyCom";
import MostPopularFacilities from "../../component/CampgroundComponents/Mostpopularfacilities/MostPopularFacilities";
import Availability from "../../component/CampgroundComponents/All-Availability/Availability";
import WhyChose from "../../component/CampgroundComponents/WhyChose/WhyChose";
import GuestReviews from "../../component/CampgroundComponents/GuestReviews/GuestReviews";
import QuestionsAndAnswers from "../../component/CampgroundComponents/QuestionsAndAnswers/QuestionsAndAnswers";
import Facilities from "../../component/CampgroundComponents/Facilities/Facilities";
import HouseRules from "../../component/CampgroundComponents/HouseRules/HouseRules";
import Faqs from "../../component/CampgroundComponents/Faqs/Faqs";
import { useParams } from "react-router-dom";
export default function Campground() {
  const [campground, setCampground] = useState();
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    axiosInstance.get("campground/" + id).then((result) => {
      setCampground(result.data.data);
    });
  }, []);

  return (
    <>
      <Covid />
      <div className="container d-md-flex my-3">
        <div className="col-md-3 me-3">
          <Search prop={"campground"} />
        </div>
        <div className="col-md-9">
          {campground && <NavHotel campground={campground} />}
          {campground && <CampgroundImg campground={campground} />}
          {campground && <BodyCom rate={reviews} campground={campground} />}
          {campground && <MostPopularFacilities campground={campground} />}
          {campground && <Availability campground={campground} />}
          {campground && <WhyChose campground={campground} />}
          {campground && (
            <GuestReviews campground={campground} setReviews={setReviews} />
          )}
          <QuestionsAndAnswers />
          {campground && <Facilities campground={campground} />}
          {campground && <HouseRules campground={campground} />}
          {campground && <Faqs campground={campground} />}
        </div>
      </div>
    </>
  );
}
