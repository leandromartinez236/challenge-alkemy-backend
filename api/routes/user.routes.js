const router = require("express").Router();
const {
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/:userId", getOneUser);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

module.exports = router;
