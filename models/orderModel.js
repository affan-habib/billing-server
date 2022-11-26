const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
   
    patientId: {
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
