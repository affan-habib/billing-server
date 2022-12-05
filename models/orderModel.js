const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Customer',
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
