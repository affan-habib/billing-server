const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    invoiceId: {
      type: String,
      required: [true, "Please add a id value"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    customerId: {
      type: String,
      ref: "Customer",
    },
    name: {
      type: String,
    },
    contactNumber: {
      type: String,
      required: [true, "Please add a contactNumber value"],
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    paid: {
      type: Boolean,
      default: true,
    },
    itemTotal: {
      type: Number,
      default: 0,
    },
    discountAmount: {
      type: Number,
      default: 0,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    itemList: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
