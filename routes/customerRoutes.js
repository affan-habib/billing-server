const express = require("express");
const router = express.Router();
const {
  getCustomers,
  setCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCustomers).post(protect, setCustomer);
router
  .route("/:id")
  .delete(protect, deleteCustomer)
  .put(protect, updateCustomer);

module.exports = router;
