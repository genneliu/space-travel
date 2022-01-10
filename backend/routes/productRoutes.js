const express = require("express");
const router = express.Router();

// @desc get all products from db
// @route get /api/products
//@ access public
router.get("/", (req, res) => {});

// @desc get all products from db
// @route get /api/products
//@ access public
router.get("/:id", (req, res) => {});

module.exports = router;
