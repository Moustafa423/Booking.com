import React, { useState, useEffect } from "react";
import "./RunImg.css";

const Run = (props) => {
  const [campground, setCampground] = useState(props.campground);
  const [postsToShow, setPostsToShow] = useState([]);
  const [lastPhoto, setLastPhoto] = useState();

  useEffect(() => {
    setCampground(props.campground);
    setPostsToShow(campground.images.slice(0, 8));
    setLastPhoto(campground.images[9]);
  }, []);

  return (
    <div className="Images">
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
          +{campground.images && campground.images.length - 9} photos
        </h4>
      </div>
    </div>
  );
};
export default Run;
