require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));