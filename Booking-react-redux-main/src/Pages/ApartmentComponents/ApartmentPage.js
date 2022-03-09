import React, { useEffect, useState } from "react";
import Availability from "../../component/ApartmentComponents/All-Availability/Availability";
import ApartmentImg from "../../component/ApartmentComponents/ApartmentImg/ApartmentImg";
import BodyCom from "../../component/ApartmentComponents/BodyCom/BodyCom";
import Facilities from "../../component/ApartmentComponents/Facilities/Facilities";
import Faqs from "../../component/ApartmentComponents/Faqs/Faqs";
import GuestReviews from "../../component/ApartmentComponents/GuestReviews/GuestReviews";
import HouseRules from "../../component/ApartmentComponents/HouseRules/HouseRules";
import MostPopularFacilities from "../../component/ApartmentComponents/Mostpopularfacilities/MostPopularFacilities";
import QuestionsAndAnswers from "../../component/ApartmentComponents/QuestionsAndAnswers/QuestionsAndAnswers";
import WhyChose from "../../component/ApartmentComponents/WhyChose/WhyChose";
import Covid from "../../component/HotelPage/Covid/Covid";
import NavHotel from "../../component/HotelPage/NavHotel/NavHotel";
import Search from "../../component/HotelPage/Search/Search";
import { axiosInstance } from "../../Redux/network";
import { useParams } from "react-router-dom";

export default function ApartmentPage() {
  const [apartment, setApartment] = useState();
  const [reviews, setReviews] = useState();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    axiosInstance.get("apartment/" + id).then((result) => {
      setApartment(result.data.data);
    });
  }, []);

  return (
    <>
      <Covid />
      <div className="container d-md-flex my-3">
        <div className="col-md-3 me-3">
          <Search prop={"apartment"} />
        </div>
        <div className="col-md-9">
          {apartment && <NavHotel apartment={apartment} />}
          {apartment && <ApartmentImg apartment={apartment} />}
          {apartment && <BodyCom apartment={apartment} rate={reviews} />}
          {apartment && <MostPopularFacilities apartment={apartment} />}
          {apartment && <Availability apartment={apartment} />}
          {apartment && <WhyChose apartment={apartment} />}
          {apartment && (
            <GuestReviews apartment={apartment} setReviews={setReviews} />
          )}
          {<QuestionsAndAnswers />}
          {apartment && <Facilities apartment={apartment} />}
          {apartment && <HouseRules apartment={apartment} />}
          {apartment && <Faqs apartment={apartment} />}
        </div>
      </div>
    </>
  );
}
