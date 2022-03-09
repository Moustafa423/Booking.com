import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../../../Redux/network";
import "./RunAllImg.css";

const RunAllImg = (props) => {
  const [hotel, setHotel] = useState(props.hotel);
  const [postsToShow, setPostsToShow] = useState([]);
  console.log(hotel);
  useEffect(() => {
    setPostsToShow(props.hotel.images);
 
  }, []);

  return (
    <div className="gridHotel2">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
    </div>
  );
};

export default RunAllImg;
