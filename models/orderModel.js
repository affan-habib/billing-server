const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    invoiceId: {
      type: String,
      required: [true, "Please add id"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
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
      required: [true, "Please add Contact Number"],
    },
    address: {
      type: String,
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
