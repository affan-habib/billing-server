const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
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
    category: {
      type: String,
      required: [true, "Please add Category"],
    },
    serviceName: {
      type: String,
      required: [true, "Please add serviceName"],
    },
    basePrice: {
      type: Number,
      required: [true, "Please add basePrice"],
    },
    discountPerUnit: {
      type: Number,
      required: [true, "Please add discountPerUnit"],
    },
    vatPerUnit: {
      type: Number,
      required: [true, "Please add vatPerUnit"],
    },
    expiryDate: {
      type: Number,
      required: [true, "Please add expiryDate"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
