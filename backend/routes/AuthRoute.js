const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware");

const router = require("express").Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify", userVerification);
router.get("/allOrders", (req, res) => {
  res.json(ordersData);
});
router.get("/allPositions", (req, res) => {
  res.json(positionsData);
});
module.exports = router;
