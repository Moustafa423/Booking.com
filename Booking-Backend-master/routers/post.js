const express = require("express");
const router = express.Router();
const Post = require("../controllers/post");

router.post("/", Post.createPost);
router.get("/", Post.displayAllPosts);
router.get("/:id", Post.displayPostById);
router.get("/user/all", Post.displayPostByUserId);
router.put("/:id", Post.updatePost);
router.delete("/:id", Post.deletePost);

module.exports = router;
