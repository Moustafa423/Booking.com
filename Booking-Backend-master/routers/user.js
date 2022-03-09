const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.post("/register/user", user.createUser);
router.post("/register/partner", user.createUser);
router.post("/login", user.loginUser);
router.post("/login/admin", user.loginAdmin);
router.get("/", user.displayUser);
router.get("/:id", user.displayUserById);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;
