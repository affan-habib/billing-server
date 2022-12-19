const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    id: {
      type: String,
      required: [true, "Please add a id value"],
    },
    serviceName: {
      type: String,
      required: [true, "Please add a serviceName value"],
    },
    basePrice: {
      type: Number,
      required: [true, "Please add a basePrice value"],
    },
    discountPerUnit: {
      type: Number,
      required: [true, "Please add a discountPerUnit value"],
    },
    vatPerUnit: {
      type: Number,
      required: [true, "Please add a vatPerUnit value"],
    },
    expiryDate: {
      type: Number,
      required: [true, "Please add a expiryDate value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
