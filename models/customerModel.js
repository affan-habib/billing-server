const mongoose = require("mongoose");

const customerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
    id: {
      type: String,
      required: [true, "Please add id"],
    },
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    age: {
      type: Number,
      required: [true, "Please addge"],
    },
    gender: {
      type: String,
      required: [true, "Please add Gender"],
    },
    contactNumber: {
      type: String,
      required: [true, "Please add Contact Number"],
    },
    isCorporate: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
