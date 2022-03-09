import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import {
  Container,
  FloatingLabel,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../Redux/actions/post";
import { axiosInstance } from "../../../Redux/network";
import "./Addpost.css";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";

export default function Addpost(props) {
  const [countries, setCountries] = useState();
  const [countryData, setCountryData] = useState();
  const [postLocation, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [Display, setDisplay] = useState(false);
  const [Post, setPost] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const search = () => {
    if (postLocation) {
      navigate("/post/" + postLocation);
    }
  };
  const savePost = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("multiple_images", selectedFile, selectedFile.name);
      axiosInstance.post("upload/image/multiple", formData).then((result) => {
        let image = result.data.data[0];
        let newPost = Post;
        newPost.postImage = image;
        setPost(newPost);
        axiosInstance.post("post/", Post).then((result) => {
          if (result.data.success) {
            window.location.reload();
            console.log(result.data);
            props.setNewPost(result.data);
          } else {
            alert(result.data.msg);
          }
        });
      });
    } else {
      axiosInstance.post("post/", Post).then((result) => {
        if (result.data.success) {
          console.log(result);
          window.location.reload();
        } else {
          alert(result.data.msg);
        }
        console.log(result);
      });
    }
  };

  const onChange = (e) => {
    setPost({ ...Post, [e.target.name]: e.target.value });
  };
  const setLocFun = (e) => {
    console.log(e);
    setLocation(e.target.innerText);
  };

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="col-5 ">
      <div className="pe-5">
        <div className="d-flex flex-column  bd-highlight mb-3">
          <h5 className="text">{t("Posts.Addpost.Create a post")}</h5>

          <div className="p-2 bd-highlight">
            <Button className="Btn py-2" onClick={() => setDisplay(true)}>
              <svg
                class="bk-icon -streamline-diamond me-2"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                fill="#0071c2"
              >
                <path d="M19.837 2.775a2.25 2.25 0 0 0-1.8-.9h-12a2.25 2.25 0 0 0-1.8.9L.9 7.226a2.25 2.25 0 0 0 .072 2.79l9.336 11.298a2.251 2.251 0 0 0 3.453.003l9.341-11.303a2.25 2.25 0 0 0 .07-2.788l-3.335-4.45zm-1.2.9l3.335 4.45a.75.75 0 0 1-.024.93l-9.34 11.303a.75.75 0 0 1-1.147-.004L2.126 9.059a.75.75 0 0 1-.026-.932l3.337-4.451a.75.75 0 0 1 .6-.3h12a.75.75 0 0 1 .6.3zM4.643 3.046l6.688 18.583a.75.75 0 0 0 1.412-.508L6.055 2.538a.75.75 0 0 0-1.412.508zm13.375-.508l-6.687 18.583a.75.75 0 1 0 1.412.508L19.43 3.046a.75.75 0 0 0-1.412-.508zM1.198 9.375h21.673a.75.75 0 0 0 0-1.5H1.198a.75.75 0 0 0 0 1.5zm6.939-.3l4.5-6h-1.2l4.5 6a.75.75 0 1 0 1.2-.9l-4.5-6c-.3-.4-.9-.4-1.2 0l-4.5 6a.75.75 0 1 0 1.2.9z"></path>
              </svg>
              {t("Posts.Addpost.Give a tip")}
            </Button>

            <Modal
              show={Display}
              onHide={() => setDisplay(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {t("Posts.Addpost.Give a tip")}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>{t("Posts.Addpost.Add Location")}</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="e.g. city ,region ,district or specific hotel"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>
                      {t("Posts.Addpost.Title")}{" "}
                      <span className="text-danger">*</span>
                    </Form.Label>

                    <Form.Control
                      type="text"
                      placeholder="e.g. 'When is the best time to visit the Colosseum?' "
                    />
                    <Form.Label>
                      {t("Posts.Addpost.Your tip ?")}
                      <span className="text-danger"> *</span>
                    </Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Form>
              </Modal.Body>
            </Modal>
          </div>

          <div className="p-2 bd-highlight">
            <Button className="Btn py-2" onClick={() => setShow(true)}>
              <svg
                className="bk-icon -streamline-question_mark_circle me-2"
                height="16"
                width="16"
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                fill="#0071c2"
              >
                <path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
              </svg>
              {t("Posts.Addpost.Ask a Question")}
            </Button>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  {t("Posts.Addpost.Ask a Question")}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>{t("Posts.Addpost.Add Location")}</Form.Label>

                  <Autocomplete
                    name="location"
                    disablePortal
                    id="combo-box-demo"
                    className="w-100"
                    options={props.listCountry && props.listCountry}
                    sx={{
                      width: 300,
                    }}
                    onChange={(e) => {
                      setPost({
                        ...Post,
                        location: e.target.innerText,
                      });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Country" />
                    )}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>
                    {t("Posts.Addpost.Title")}{" "}
                    <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="title"
                    value={Post.title}
                    onChange={onChange}
                    placeholder="e.g. 'When is the best time to visit Egypt?' "
                  />

                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      className="my-3"
                      as="textarea"
                      placeholder="Leave a comment here"
                      name="body"
                      value={Post.body}
                      onChange={onChange}
                      style={{ height: "100px" }}
                    />

                    <Form.Label>
                      {t(
                        "Posts.Addpost.What kind of advice are you looking for ?"
                      )}
                      <span className="text-danger"> *</span>
                    </Form.Label>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group controlId="formFileLg" className="my-3">
                  <Form.Control type="file" size="md" onChange={onFileChange} />
                </Form.Group>
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    savePost();
                    setShow(false);
                  }}
                >
                  {t("Posts.Addpost.Add Post")}
                </Button>
              </Modal.Body>
            </Modal>
          </div>
        </div>

        <div className="d-flex flex-column bd-highlight mb-3">
          <h5 className="text">{t("Posts.Addpost.Search")}</h5>

          <div className="p-2 bd-highlight">
            <form className="d-flex justify-content-between">
              <Autocomplete
                name="country"
                disablePortal
                id="combo-box-demo"
                sx={{
                  width: 300,
                }}
                onChange={setLocFun}
                options={props.listCountry && props.listCountry}
                renderInput={(params) => (
                  <TextField {...params} label="Location" />
                )}
              />
              <button className="btn btn-outline-primary" onClick={search}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>

            <div className="bd-highlight mt-1 text2">
              <span>
                {t(
                  "Posts.Addpost.Top places: London, Edinburgh, Manchester, Liverpool, Glasgow"
                )}
              </span>
            </div>
          </div>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div className="bd-highlight">
              <h5 className="text">{t("Posts.Addpost.Filter by")}</h5>
            </div>
            <div className=" p-2 bd-highlight">
              <select
                className="form-select Search"
                aria-label="Default select example"
              >
                <option selected>{t("Posts.Addpost.All")}</option>
                <option value="1">{t("Posts.Addpost.All")}</option>
                <option value="2">{t("Posts.Addpost.Unaswered")}</option>
                <option value="3">{t("Posts.Addpost.Questions")}</option>
                <option value="3">{t("Posts.Addpost.Tips")}</option>
              </select>
              <span className="fs-6 m-5">
                <a
                  className="text-decoration-none text-secondary Size me-1"
                  href="#"
                >
                  {t("Posts.Addpost.Ambassador Program")}
                </a>{" "}
                |
                <a
                  className="text-decoration-none text-secondary Size ms-1"
                  href="#"
                >
                  {t("Posts.Addpost.Terms & Conditions")}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
