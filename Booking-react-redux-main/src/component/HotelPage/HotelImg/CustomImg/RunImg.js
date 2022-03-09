import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Redux/network";
import "./RunImg.css";

const Run = (props) => {
  const [hotel, setHotel] = useState(props.hotel);
  const [postsToShow, setPostsToShow] = useState([]);
  const [lastPhoto, setLastPhoto] = useState();
  useEffect(() => {
    setHotel(props.hotel);
    setPostsToShow(hotel.images.slice(0, 9));
    setPostsToShow(hotel.images.slice(0, 8));
    setLastPhoto(hotel.images[9]);
  }, []);

  return (
    <div className="gridHotel">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
      <div className="position-relative h-100 ">
        <img
          className="h-100 "
          style={{ filter: `brightness(50%)` }}
          src={lastPhoto}
          alt=""
        />

        <h4
          style={{ top: `40%` }}
          className="position-absolute ms-5 text-white text-decoration-underline fw-bold"
        >
          +{hotel.images && hotel.images.length - 9} photos
        </h4>
      </div>
    </div>
  );
};
export default Run;
