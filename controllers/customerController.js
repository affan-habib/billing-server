const asyncHandler = require("express-async-handler");

const Customer = require("../models/customerModel");

// @desc    Get customers
// @route   GET /api/customers
// @access  Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ user: req.userId });

  res.status(200).json({ data: customers });
});

const setCustomer = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add name field");
  }

  const customer = await Customer.create({
    id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    contactNumber: req.body.contactNumber,
    address: req.body.address,
    isCorporate: req.body.isCorporate,
  });

  res.status(200).json(customer);
});

// @desc    Update customer
// @route   PUT /api/customers/:id
// @access  Private
const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    res.status(400);
    throw new Error("Customer not found");
  }

  const updatedCustomer = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedCustomer);
});

// @desc    Delete customer
// @route   DELETE /api/customers/:id
// @access  Private
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer) {
    res.status(400);
    throw new Error("Customer not found");
  }
  await customer.remove();

  res.status(200).json({ data: customer });
});

module.exports = {
  getCustomers,
  setCustomer,
  updateCustomer,
  deleteCustomer,
};
