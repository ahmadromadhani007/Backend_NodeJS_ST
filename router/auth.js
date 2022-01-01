const express = require("express");
const router = express.Router();

const auth = require("../controller/auth");

router.get("/kode/", auth.kode);

module.exports = router;
