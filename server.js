const express = require("express");
const app = express();
const { cloudinary } = require("./utils/cloudinary");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const myParser = require("body-parser");

connectDB();

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true, limit: "200mb" }));
app.use(myParser.json({ limit: "200mb" }));
app.use(myParser.urlencoded({ limit: "200mb", extended: true }));

app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/customers", require("./routes/customerRoutes"));
app.use("/api/orders", require("./routes/billRoutes"));
app.use("/auth", require("./routes/userRoutes"));

app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.url);
  res.send(publicIds);
});
app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr);
    console.log(uploadResponse);
    res.json(uploadResponse.url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
