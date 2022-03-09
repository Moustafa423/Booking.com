import React, { useEffect, useState } from "react";
import PropertyType from "../../component/Property-type/PropertyType";
import Recentsearches from "../../component/Recent-searches/Recent-searches";
import HomesGustesLove from "../../component/Home/HomesGustesLove/HomesGustesLove";
import Header from "../../component/Home/Header/Headerr";
import Gridsection from "../../component/Home/Grid-section/Grid-section";
import ExploerEgypt from "../../component/Home/ExploerEgypt/ExploerEgypt";
import GetInspiration from "../../component/Home/GetInspiration/GetInspiration";
import Community from "../../component/Home/Community/Community";
import { axiosInstance } from "../../Redux/network";
import { Spinner } from "react-bootstrap";
export default function Home() {
  const [loggedInUser, setloggedInUser] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    axiosInstance.get("user/loggedin").then((result) => {
      setloggedInUser(result.data.data);
    });
  }, []);

  return (
    <>
      <Header loggedInUser={loggedInUser} />
      <Gridsection />
      <PropertyType />
      <ExploerEgypt />
      <GetInspiration />
      <HomesGustesLove prop={"hotel"} />
      <HomesGustesLove prop={"campground"} />
      <HomesGustesLove prop={"apartment"} />
      <Community />
   
    </>
  );
}
