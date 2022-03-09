import { useEffect, useState } from "react";
import { axiosInstance } from "../../Redux/network";
import "./style.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18next";

export default function Profile() {
  let [user, setUser] = useState({});

  useEffect(() => {
    axiosInstance.get("user/loggedin").then((result) => {
      setUser(result.data.data);

      console.log(result.data.data, "result!!!!");
    });
  }, []);

  let editUser = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setUser({ ...user, [name]: value });
  };

  let submitUser = (event) => {
    event.preventDefault();
    if (window.confirm("Are You Sure To Edit Your Informations !!")) {
      axiosInstance.put("user/" + user._id, user).then((result) => {});
    }
  };

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="main-content my-3 text-secondary">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 order-10">
            <div className=" card-user">
              <div className="image d-flex justify-content-center w-100 p-2">
                <img
                  className="rounded-circle  profile-img  "
                  src={user.personalImage}
                  alt="..."
                />
              </div>
              <div className="form-group mb-5 ">
                <input
                  type="text"
                  value={user.username}
                  onChange={editUser}
                  className="form-control my-3 text-center m-auto w-75"
                  name="username"
                  placeholder="UserName"
                />
              </div>
            </div>
          </div>

          <div className="col-md-8 order-12">
            <div className="">
              <div className="header ">
                <h4 className="title fw-bold text-primary">
                  {t("UserDashBoard.Profile.Edit Profile")}
                </h4>
              </div>
              <div className="content p-2">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label
                          className="fw-bold mt-2"
                          htmlFor="exampleInputEmail1"
                        >
                          {t("UserDashBoard.Profile.Email address")}
                        </label>
                        <input
                          type="email"
                          onChange={editUser}
                          value={user.email}
                          className="form-control mb-2"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.First Name")}
                        </label>
                        <input
                          type="text"
                          value={user.firstName}
                          onChange={editUser}
                          className="form-control mb-2"
                          name="firstName"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.Last Name")}
                        </label>
                        <input
                          type="text"
                          value={user.lastName}
                          onChange={editUser}
                          className="form-control mb-2"
                          name="lastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.Password")}
                        </label>
                        <input
                          type="password"
                          onChange={editUser}
                          className="form-control mb-2"
                          name="password"
                          placeholder="password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.City")}
                        </label>
                        <input
                          type="text"
                          value={user.city}
                          onChange={editUser}
                          className="form-control mb-2"
                          name="city"
                          placeholder="City"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.Country")}
                        </label>
                        <input
                          type="text"
                          value={user.country}
                          onChange={editUser}
                          className="form-control mb-2"
                          name="country"
                          placeholder="Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="fw-bold mt-2">
                          {t("UserDashBoard.Profile.Phone")}
                        </label>
                        <input
                          type="text"
                          value={user.phone}
                          onChange={editUser}
                          className="form-control mb-2"
                          name="phone"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary fw-bold btn-fill pull-right mb-2"
                    onClick={submitUser}
                  >
                    {t("UserDashBoard.Profile.Update Profile")}
                  </button>
                  <div className="clearfix"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
