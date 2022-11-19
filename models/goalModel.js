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
    masterServiceName: {
      type: String,
      required: [true, 'Please add a masterServiceName value'],
    },
    tariffBaseAmount: {
      type: Number,
      required: [true, 'Please add a tariffBaseAmount value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
