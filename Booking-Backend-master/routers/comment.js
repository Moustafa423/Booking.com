const express = require("express");
const router = express.Router();
const comment = require("../controllers/comment");

router.post("/:postId", comment.createComment);
router.put("/:commentId", comment.updateComment);
router.delete("/:commentId", comment.deleteComment);
router.get("/post/:postId", comment.displayCommentsByPostId);
router.get("/:commentId", comment.displayCommentById);
router.post("/reply/:commentId", comment.createReply);
router.get("/reply/:commentId", comment.displayRepliesByCommentId);

module.exports = router;
