const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    id: {
      type: String,
      required: [true, 'Please add a id value'],
    },
    serviceName: {
      type: String,
      required: [true, 'Please add a serviceName value'],
    },
    basePrice: {
      type: Number,
      required: [true, 'Please add a basePrice value'],
    },
    discountAmount: {
      type: Number,
      required: [true, 'Please add a discountAmount value'],
    },
    vatPerUnit: {
      type: Number,
      required: [true, 'Please add a vatPerUnit value'],
    },
    expiryDate: {
      type: Number,
      required: [true, 'Please add a expiryDate value'],
    },

  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
