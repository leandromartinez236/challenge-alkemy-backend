const router = require("express").Router();
const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const {
  checkDuplicateEmail,
  validatePassword,
} = require("../middlewares/verifySignup");

router.get("/", getUsers);
router.get("/:userId", getOneUser);
router.post("/", [checkDuplicateEmail, validatePassword], createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
