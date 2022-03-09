import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Addpost from "../../component/Posts/Add Post/Addpost";
import Communities from "../../component/Posts/Communities/Communities";
import Example from "../../component/Posts/PostStructure/PostStructure";
import axios from "axios";
export default function Post() {
  const [listCountry, setListCountry] = useState();
  const [newPost, setNewPost] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    axios.get("https://countriesnow.space/api/v0.1/countries").then((res) => {
      let arrCountry = [];
      for (let item of res.data.data) {
        arrCountry.push(item.country);
      }
      setListCountry(arrCountry);
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Container>
        <Container>
          <Communities />
          <div className="row py-3 justify-content-between mx-1">
            <Addpost listCountry={listCountry} setNewPost={setNewPost} />
            <Example
              isUser={false}
              listCountry={listCountry}
              newPost={newPost}
            />
          </div>
        </Container>
      </Container>
    </div>
  );
}
