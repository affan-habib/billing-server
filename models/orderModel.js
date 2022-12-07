const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    total: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    advance: {
      type: Number,
    },
    due: {
      type: Number,
    },
    orderDetailList: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
