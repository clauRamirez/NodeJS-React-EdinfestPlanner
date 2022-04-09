const express = require("express");
const festivalController = require("./festivals-controller")

const router = express.Router();

router.get("/", festivalController);

module.exports = router;
