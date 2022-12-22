const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ user: req.userId });

  res.status(200).json({ data: products });
});

const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.serviceName) {
    res.status(400);
    throw new Error("Please add serviceName field");
  }

  const product = await Product.create({
    id: req.body.id,
    user: req._id,
    serviceName: req.body.serviceName,
    category: req.body.category,
    basePrice: req.body.basePrice,
    discountPerUnit: req.body.discountPerUnit,
    expiryDate: req.body.expiryDate,
    vatPerUnit: req.body.vatPerUnit,
  });
  res.status(200).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ data: updatedProduct });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  }

  await product.remove();

  res.status(200).json({ data: { id: req.params.id } });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
