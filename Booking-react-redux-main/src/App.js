import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
// import Home from "./Pages/Home/Home";
// import HotelsList from "./Pages/Properties/HotelsList";
// import CampsList from "./Pages/Properties/CampgroundList";
// import ApartmentsList from "./Pages/Properties/ApartmentsList";
// import HotelsSearch from "./Pages/PropertiesSearch/HotelsList";
// import CampsSearch from "./Pages/PropertiesSearch/CampgroundList";
// import ApartmentsSearch from "./Pages/PropertiesSearch/ApartmentsList";
// import Post from "./Pages/Posts/Post";
// import HotelPage from "./Pages/HotelPage/HotelPage";
// import HotelBooking from "./Pages/Checkout/hotelBooking";
// import ApartmentPage from "./Pages/ApartmentComponents/ApartmentPage";
// import Campground from "./Pages/CampgroundPage/Campground";
// import UserDashboard from "./Pages/UserDashBoard/UserDashboard";
import { Route, Routes, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
// import BestCoffee from "./component/articles/article1/BestCoffee";
// import LasVegas from "./component/articles/article2/LasVegas";
// import Yoga from "./component/articles/article3/Yoga";
// import Destination from "./component/articles/article4/Destination";
// import Unmissable from "./component/articles/article5/Unmissable";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const HotelsList = React.lazy(() => import("./Pages/Properties/HotelsList"));
const CampsList = React.lazy(() => import("./Pages/Properties/CampgroundList"));
const Auth = React.lazy(() => import("./component/Authentication/auth"));

const ApartmentsList = React.lazy(() =>
  import("./Pages/Properties/ApartmentsList")
);
const HotelsSearch = React.lazy(() =>
  import("./Pages/PropertiesSearch/HotelsList")
);
const ApartmentsSearch = React.lazy(() =>
  import("./Pages/PropertiesSearch/ApartmentsList")
);
const CampsSearch = React.lazy(() =>
  import("./Pages/PropertiesSearch/CampgroundList")
);
const Post = React.lazy(() => import("./Pages/Posts/Post"));
const HotelPage = React.lazy(() => import("./Pages/HotelPage/HotelPage"));
const HotelBooking = React.lazy(() => import("./Pages/Checkout/hotelBooking"));
const ApartmentPage = React.lazy(() =>
  import("./Pages/ApartmentComponents/ApartmentPage")
);
const Campground = React.lazy(() =>
  import("./Pages/CampgroundPage/Campground")
);
const UserDashboard = React.lazy(() =>
  import("./Pages/UserDashBoard/UserDashboard")
);
const BestCoffee = React.lazy(() =>
  import("./component/articles/article1/BestCoffee")
);
const LasVegas = React.lazy(() =>
  import("./component/articles/article2/LasVegas")
);
const Yoga = React.lazy(() => import("./component/articles/article3/Yoga"));
const Destination = React.lazy(() =>
  import("./component/articles/article4/Destination")
);
const Unmissable = React.lazy(() =>
  import("./component/articles/article5/Unmissable")
);

// Loc

function App() {
  const reduxLang = useSelector((state) => state.lang);
  const [lang, setLang] = useState(reduxLang);

  const [token, setToken] = useState(localStorage.getItem("authentication"));
  const isAuthenticated = () => {
    try {
      if (token) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("key") == null) {
      localStorage.setItem("key", "english");
    }
    if (localStorage.getItem("key") == "arabic") {
      setLang("rtl");
    }

    if (localStorage.getItem("key") == "english") {
      setLang("ltr");
    }
  }, [reduxLang]);

  return (
    <div className="App" dir={lang}>
      {isAuthenticated() && <Navbar />}
      <Suspense
        fallback={
          <div
            style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner
              style={{ width: "100px", height: "100px" }}
              animation="border"
              variant="primary"
              role="status"
            ></Spinner>
          </div>
        }
      >
        <Routes>
          <Route path="/auth/:token" element={<Auth />} />
          {isAuthenticated() && (
            <>
              <Route exact path="/" element={<Home />} />

              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/BestCoffee" element={<BestCoffee />} />
              <Route path="/LasVegas" element={<LasVegas />} />
              <Route path="/Yoga" element={<Yoga />} />
              <Route path="/Destination" element={<Destination />} />
              <Route path="/Unmissable" element={<Unmissable />} />
              <Route path="/campgrounds/:id" element={<Campground />} />
              <Route path="/apartments/:id" element={<ApartmentPage />} />
              <Route path="/hotels/:id" element={<HotelPage />} />
              <Route path="/post" element={<Post />} />
              <Route path="/post/:location" element={<Post />} />
              <Route path="/apartments" element={<ApartmentsList />} />
              <Route path="/hotels" element={<HotelsList />} />
              <Route path="/campgrounds" element={<CampsList />} />
              <Route
                path="/search/apartments/:country/:city"
                element={<ApartmentsSearch />}
              />
              <Route
                path="/search/apartments/:country"
                element={<ApartmentsSearch />}
              />
              <Route
                path="/search/hotels/:country/:city"
                element={<HotelsSearch />}
              />
              <Route
                path="/search/hotels/:country"
                element={<HotelsSearch />}
              />
              <Route
                path="/search/campgrounds/:country/:city"
                element={<CampsSearch />}
              />
              <Route
                path="/search/campgrounds/:country"
                element={<CampsSearch />}
              />
              <Route path="/checkout" element={<HotelBooking />} />
            </>
          )}
        </Routes>
      </Suspense>
      {isAuthenticated() && <Footer />}
    </div>
  );
}
export default App;
