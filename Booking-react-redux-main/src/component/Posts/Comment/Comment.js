import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import {
  ButtonGroup,
  Card,
  Dropdown,
  DropdownButton,
  FloatingLabel,
  Form,
  Modal,
  Spinner,
} from "react-bootstrap";
import { axiosInstance } from "../../../Redux/network";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18next";
import { LinearProgress } from "@mui/material";
export default function Comment(props) {
  const [postImageChange, setPostImageChange] = useState();
  const [editComment, seteditComment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let commentImage;
  let newComment = {};
  const onPostImageChange = (event) => {
    setPostImageChange(event.target.files[0]);
  };
  const clearCommentImage = () => {
    setPostImageChange(undefined);
    newComment = {};
  };
  const onChangeComment = (e) => {
    newComment = { ...newComment, [e.target.name]: e.target.value };
  };

  const deleteComment = (id) => {
    axiosInstance.delete("comment/" + id).then((result) => {
      let comments = props.comment.filter((item) => item._id != id);
      props.setComment(comments);
      axiosInstance.get("comment/post/" + id).then((result) => {
        props.setCommentLength(result.data.data.length);
      });
    });
  };

  const updateComment = (id, postId) => {
    setIsLoading(true);
    if (postImageChange) {
      const formData = new FormData();
      formData.append("multiple_images", postImageChange);
      console.log("image");
      axiosInstance.post("upload/image/multiple", formData).then((result) => {
        if (result.data.success) {
          console.log(result.data);
          let image = result.data.data[0];

          let Comment = newComment;
          Comment.commentImg = image;
          console.log(newComment);
          axiosInstance.put("comment/" + id, newComment).then((res) => {
            if (res.data.success) {
              axiosInstance.get("comment/post/" + postId).then((result) => {
                let allComment = result.data.data;

                for (let com of allComment) {
                  if (com.userId._id == res.data.data.userId) {
                    com.isOwner = true;
                  } else {
                    com.isOwner = false;
                  }
                }
                setIsLoading(false);
                props.setComment(allComment);
              });
            } else {
              alert(result.data.msg);
            }
          });
        }
      });
    } else {
      axiosInstance.put("comment/" + id, newComment).then((res) => {
        if (res.data.success) {
          axiosInstance.get("comment/post/" + postId).then((result) => {
            let allComment = result.data.data;

            axiosInstance.get("user/loggedIn/").then((result) => {
              for (let com of allComment) {
                // console.log(allComment);
                if (
                  com.userId._id == result.data.data._id ||
                  result.data.data.type == "admin"
                ) {
                  com.isOwner = true;
                } else {
                  com.isOwner = false;
                }
              }
              // console.log(allComment);
              props.setComment(allComment);
            });
          });
        } else {
          alert(res.data.msg);
        }
      });
    }
  };

  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Card className="mb-3 commentCard">
      <Card.Header className="bg-white commentHeader">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              src={props.com.userId.personalImage}
              className="imgStyle me-2"
            ></img>
            <h6 className="mt-2">{props.com.userId.username} </h6>
          </div>

          <div>
            {props.com.isOwner && (
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  title={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  }
                  id="bg-nested-dropdown"
                  className=""
                  size="sm"
                >
                  <Dropdown.Item onClick={() => deleteComment(props.com._id)}>
                    {t("Posts.Comment.Delete comment")}
                  </Dropdown.Item>

                  <Dropdown.Item
                    onClick={() => {
                      clearCommentImage();
                      seteditComment(true);
                    }}
                  >
                    {t("Posts.Comment.Update comment")}
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            )}
          </div>
        </div>
        {isLoading && <LinearProgress className="my-2" />}
        <Modal
          show={editComment}
          onHide={() => seteditComment(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {t("Posts.Comment.Leave Comment")}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel controlId="floatingTextarea2" label="comment">
              <Form.Control
                as="textarea"
                onChange={onChangeComment}
                name="body"
                placeholder="Type your comment here"
                style={{ height: "200px" }}
              />
            </FloatingLabel>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>{t("Posts.Comment.Upload Image")}</Form.Label>
              <Form.Control
                type="file"
                name="commentImg"
                onChange={onPostImageChange}
              />
            </Form.Group>

            <Button
              className="btn w-100 h-100 btn-primary"
              onClick={() => {
                seteditComment(false);
                updateComment(props.com._id, props.posts._id);
              }}
            >
              {t("Posts.Comment.Update")}
            </Button>
          </Modal.Body>
        </Modal>
      </Card.Header>

      <Card.Body className="position-relative">
        <Card.Text>{props.com.body}</Card.Text>

        <img
          className="w-100 rounded-3"
          src={props.com.commentImg && props.com.commentImg}
          alt=""
        />
      </Card.Body>
    </Card>
  );
}
