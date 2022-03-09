import React, { useState, useEffect } from "react";
 import "./RunImg.css";
 
 

const Run = (props) => {
  const [apartment, setApartment] = useState(props.apartment);
  const [postsToShow, setPostsToShow] = useState([]);
 
  useEffect(() => {
       setApartment(props.apartment);
      setPostsToShow(apartment.images.slice(0, 8));
  }, []);
   
  return (
    <div className="gridApart">
      {postsToShow.map((post, index) => (
        <img key={index} src={post}></img>
      ))}
    </div>
  );
 
          }
export default Run;
