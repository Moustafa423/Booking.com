import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://iti-g3-booking-backend.herokuapp.com/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers["authentication"] = localStorage.getItem("authentication");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
