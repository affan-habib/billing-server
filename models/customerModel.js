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
      required: [true, "Please add a id value"],
    },
    name: {
      type: String,
      required: [true, "Please add a name value"],
    },
    age: {
      type: Number,
      required: [true, "Please add a age value"],
    },
    gender: {
      type: String,
      required: [true, "Please add a gender value"],
    },
    contactNumber: {
      type: String,
      required: [true, "Please add a contactNumber value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", customerSchema);
