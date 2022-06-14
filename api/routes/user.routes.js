const router = require("express").Router();
const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");
const { verifySignup } = require("../middlewares/index");

router.get("/", getUsers);
router.get("/:userId", getOneUser);
router.post(
  "/",
  [verifySignup.checkDuplicateEmail, verifySignup.validatePassword],
  createUser
);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
