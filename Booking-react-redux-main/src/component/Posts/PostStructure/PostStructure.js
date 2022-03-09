import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/actions/post";
import { axiosInstance } from "../../../Redux/network";
import "./PostStructure.css";
import SinglePost from "./SinglePost/SinglePost";
import { useParams } from "react-router-dom";

export default function Example(props) {
  let [allPosts, setPosts] = useState();
  let [NoPosts, setNoPosts] = useState(false);
  let [newPost, setNewPost] = useState(props.newPost);
  const { location } = useParams();
  let test = false;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    if (props.isUser) {
      axiosInstance.get("post/user/all").then((result) => {
        setPosts(result.data);
        console.log(result.data.data, "sspostss");
        if (result.data.length >= 1) {
          setNoPosts(true);
        }
      });
    } else {
      axiosInstance.get("post").then((result) => {
        if (!location) {
          console.log("object");
          setPosts(result.data);
        } else {
          let posts = {
            data: result.data.data.filter((item) => item.location == location),
          };

          setPosts(posts);
        }
      });
    }
  }, []);

  return (
    <div className="col-7">
      {allPosts &&
        allPosts.data.reverse().map((pst) => {
          return (
            <SinglePost
              post={pst}
              isUser={props.isUser}
              listCountry={props.listCountry}
            />
          );
        })}
    </div>
  );
}
