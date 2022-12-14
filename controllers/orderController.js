const asyncHandler = require("express-async-handler");

const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.userId });

  res.status(200).json({ data: orders });
});

const setOrder = asyncHandler(async (req, res) => {
  const order = await Order.create({
    invoiceId: req.body.invoiceId,
    customerId: req.body.customerId,
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    age: req.body.age,
    gender: req.body.gender,
    itemTotal: req.body.itemTotal,
    discountAmount: req.body.discountAmount,
    paidAmount: req.body.paidAmount,
    dueAmount: req.body.dueAmount,
    itemList: req.body.itemList,
  });
  res.status(200).json({ data: order });
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  // Check for user

  const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedOrder);
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    throw new Error("Order not found");
  }

  await order.remove();

  res.status(200).json({ data: order });
});

module.exports = {
  getOrders,
  setOrder,
  updateOrder,
  deleteOrder,
};
