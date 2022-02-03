require("dotenv").config();
const express = require("express");
const { use } = require("express/lib/application");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

connectDB();

const app = express();

app.use(express.json()); //needing json

app.use("/api/products", productRoutes);

app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
