import React, { useState, useEffect } from "react";
import "./RunAllImg.css";

const RunAllImg = (props) => {
  const [apartment, setApartment] = useState(props.apartment);
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    setPostsToShow(props.apartment.images);
  }, []);

  return (
    <div className="gridApart2">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
    </div>
  );
};

export default RunAllImg;
